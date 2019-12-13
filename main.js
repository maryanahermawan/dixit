const morgan = require('morgan');
const express = require('express');
const Pusher = require('pusher');
const bodyParser = require('body-parser');
const crypto = require('crypto');
const db = require('./dbutil');
const fs = require('fs');
const passport = require('passport');
const jwt = require('jsonwebtoken');
const cors = require('cors');
const NUM_POOL = 6;
const NUM_CARDS = 50;

let config;

const ALL_CONFIG = './config.js';

if (fs.existsSync(ALL_CONFIG)) {
    config = require(ALL_CONFIG);
} else {
    config = {
        mysql: {
            host: process.env.DB_HOST,
            port: process.env.DB_PORT,
            user: process.env.DB_USER,
            password: process.env.DB_PASSWORD,
            database: 'music',
            connectionLimit: 4,
            ssl: {
                ca: process.env.DB_CA
            }
        },
        s3: {
            accessKey: process.env.S3_ACCESS_KEY,
            secret: process.env.S3_SECRET,
        },
        mongodb: {
            url: process.env.MONGODB_URL,
        }
    }
}

var pusher = new Pusher({
    appId: config.pusher.PUSHER_APPID,
    key: config.pusher.PUSHER_KEY,
    secret: config.pusher.PUSHER_SECRET,
    cluster: 'ap1',
    useTLS: true
});

var app = express();

const { loadConfig, testConnections } = require('./initdb')

const PORT = parseInt(process.argv[2] || process.env.APP_PORT || process.env.PORT) || 3000;

const conns = loadConfig(config);

//SQL
const SEARCH_USER = `select count(*) as user_count from users where email = ? and password = sha2(?, 256)`;
const searchUser = db.mkQueryFromPool(db.mkQuery(SEARCH_USER), conns.mysql);
const GET_USER_DETAILS = `select username from users where email = ?`;
const getUserDetails = db.mkQueryFromPool(db.mkQuery(GET_USER_DETAILS), conns.mysql);
const GET_GROUP_ID_BY_GROUP_NAME = `SELECT group_id FROM dixit.gameGroups where group_name = ?`;
const getGroupIdByGroupName = db.mkQueryFromPool(db.mkQuery(GET_GROUP_ID_BY_GROUP_NAME), conns.mysql);

// const GET_ALL_GROUPS = `SELECT gr.group_name, u.username, u.email from gameGroups as gr join membershipDetails as m 
// on gr.group_id = m.group_id join users as u on m.email = u.email`;
const GET_ALL_GROUPS = `select group_id, group_name from gameGroups`;
const getAllGroups = db.mkQueryFromPool(db.mkQuery(GET_ALL_GROUPS), conns.mysql);
app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(morgan('tiny'));
app.use(express.static(__dirname + '/public'));

let usedCards = [];
let games = [];

const isValidUser = (param) => { //return a boolean
    return (searchUser(param)
        .then(result => (result.length && result[0].user_count > 0))
        .catch(err => { })
    )
}

const LocalStrategy = require('passport-local').Strategy;
passport.use(new LocalStrategy(
    {
        usernameField: 'email',
        passwordField: 'password'
    },
    (username, password, done) => {
        isValidUser([username, password])
            .then(result => {
                if (result)
                    return (done(null, username))
                done(null, false, { message: 'Incorrect username or password.' });
            })
            .catch(error => {
                return done(error);
            })
    }
))

app.use(passport.initialize())

app.get('/status/:code',
    (req, resp) => {
        resp.status(parseInt(req.params.code)).json({ message: 'incorrect login' })
    }
)

app.post('/pusher/auth', function (req, res) {
    var socketId = req.body.socket_id;
    var channel = req.body.channel_name;
    var presenceData = {
        user_id: crypto.randomBytes(16).toString("hex")
    };
    var auth = pusher.authenticate(socketId, channel, presenceData);
    res.send(auth);
});

app.get('/game/player/create/:gameId/:playerId', (req, resp) => {
    const gameId = req.params.gameId;
    const playerId = req.params.playerId;

    if (games.findIndex(e => e.gameId == gameId) == -1) {
        console.log('cannot find existing game, games are', games);
        let newGame = {
            gameId: gameId,
            story: '',
            storyTeller: 0,
            playerAsset: []
        };
        games.push(newGame);

        let newUsedCardArray = {
            gameId: gameId,
            cards: []
        };
        usedCards.push(newUsedCardArray);
    }

    let drawn = 0;
    let newPool = [];
    const index = games.findIndex(e => e.gameId == gameId);

    for (let i = 0; i < NUM_POOL; i++) {
        do { drawn = Math.ceil(Math.random() * NUM_CARDS); }
        while (usedCards[index].cards.includes(drawn))
        newPool.push(drawn);
        usedCards[index].cards.push(drawn);
    }

    games[index].playerAsset.push({
        poolCards: newPool,
        activeCard: null,
        playerId: playerId,
        score: 0,
        guessCard: null,
    })
    console.log('GAMES after creation are', games);
    games.forEach(g => { console.log('each game is', g); console.log('assets is', g.playerAsset) })
    resp.status(200).json(games[index]);
})

app.get('/game/id/:groupName', (req, resp) => { //if authenticated(TBD), give an ID
    getGroupIdByGroupName([req.params.groupName])
        .then(result => {
            console.log('id obtained from SQL is', result);
            resp.status(200).json(result[0].group_id);
        })
        .catch(err => {
            resp.status(400).json({ err })
        })
    // return Math.random().toString(36).substr(2, 8);
})

app.post('/game/story/:gameId', (req, resp) => {
    const gameId = req.params.gameId;

    const gameIndex = games.findIndex(e => e.gameId == gameId);
    games[gameIndex].story = req.body.story;
    console.log('update story is', games[gameIndex]);
    pusher.trigger(`presence-${gameId}`, 'server-fire', JSON.stringify(
        {
            game: games[gameIndex] //temp only have one game
        }
    ));

    resp.status(200).json({});
})

app.get('/game/card/active/:gameId/:playerId/:cardId', (req, resp) => {
    const gameId = req.params.gameId;
    const playerId = req.params.playerId;
    const cardId = req.params.cardId;

    const gameIndex = games.findIndex(e => e.gameId == gameId);
    // console.log('game index', gameIndex, 'gameId', gameId, 'game', games);

    games[gameIndex].playerAsset[playerId].activeCard = cardId;
    // console.log('active card> ', games[gameIndex].playerAsset[playerId].activeCard)

    games[gameIndex].playerAsset[playerId].poolCards = games[gameIndex].playerAsset[playerId].poolCards.filter(e => e != cardId);
    // console.log('pool card after taken out is', games[gameIndex].playerAsset[playerId].poolCards)

    pusher.trigger(`presence-${gameId}`, 'server-fire', JSON.stringify(
        {
            game: games[gameIndex]
        }
    ));

    resp.status(200).json({});
})

app.get('/game/card/guess/:gameId/:playerId/:cardId', (req, resp) => {
    const gameId = req.params.gameId;
    const playerId = req.params.playerId;
    const cardId = req.params.cardId;
    const gameIndex = games.findIndex(e => e.gameId == gameId);
    const players = games[gameIndex].playerAsset.length; //number of players

    let noOfCorrectGuesses = 0;
    let playerWhoGuessRight = [];
    let votedCardOtherThanStoryCard = [];

    games[gameIndex].playerAsset[playerId].guessCard = cardId;

    let guessingCompleted = true;
    games[gameIndex].playerAsset.forEach(e => { if (!e.guessCard) { console.log('found null guess'); guessingCompleted = false } })

    if (guessingCompleted) { // score calculation
        let storyCard = games[gameIndex].playerAsset[games[gameIndex].storyTeller].activeCard;
        games[gameIndex].playerAsset.forEach(e => {
            if (e.guessCard == storyCard) {
                noOfCorrectGuesses++;
                playerWhoGuessRight.push(e.playerId);
            } else {
                //collect votedCardOtherThanStorycard
                votedCardOtherThanStoryCard.push(e.guessCard);
            }
        });
        console.log('voted cards other than story', votedCardOtherThanStoryCard);
        console.log('story card is', storyCard);
        //if all or nobody guess right
        if (noOfCorrectGuesses == 0 || noOfCorrectGuesses == players) {
            //all except story teller gets +2
            for (let id = 0; id < players; id++) {
                if (id == games[gameIndex].storyTeller) {
                    continue;
                }
                games[gameIndex].playerAsset[id].score += 2;
            }
            console.log('not good, story teller');
        } else {
            //otherwise story teller and playerWhoGuessRight gets +3
            games[gameIndex].playerAsset[games[gameIndex].storyTeller].score += 3;
            playerWhoGuessRight.forEach(e => { games[gameIndex].playerAsset[e].score += 3 })
        }

        //player whose card got voted gets +1
        votedCardOtherThanStoryCard.forEach(e => {
            let idx = games[gameIndex].playerAsset.findIndex(ply => ply.activeCard == e);
            games[gameIndex].playerAsset[idx].score++;
        })

        //clear: story, all activeCards and all guessCards
        //update storyTeller
        games[gameIndex].story = '';
        if (games[gameIndex].storyTeller < (players - 1)) { games[gameIndex].storyTeller++ }
        else { games[gameIndex].storyTeller = 0 }

        // games[gameIndex].playerAsset.map(e => { 
        //     return { ...e, guessCard: null, activeCard: null } 
        // });
        // tempArray.map(e => {return {...e, a: null}})
        let drawn = 0;
        for (let id = 0; id < players; id++) {
            do { drawn = Math.ceil(Math.random() * NUM_CARDS); }
            while (usedCards[gameIndex].cards.includes(drawn))
            usedCards[gameIndex].cards.push(drawn);
            games[gameIndex].playerAsset[id].guessCard = null;
            games[gameIndex].playerAsset[id].activeCard = null;
            games[gameIndex].playerAsset[id].poolCards.push(drawn);
        }
    }

    pusher.trigger(`presence-${gameId}`, 'server-fire', JSON.stringify(
        {
            game: games[gameIndex],
            message: 'round completed',
        }
    ));

    resp.status(200).json({});
})

app.get('/api/groups',
    (req, resp, next) => {
        const authorization = req.get('Authorization'); //from the header
        const jwtString = authorization.substring('Bearer '.length);

        if (!(authorization && authorization.startsWith('Bearer '))) {
            resp.status(403).json({ error: 'Forbidden' })
        }
        console.log('jwtString', jwtString);
        const jwtDecoded = jwt.verify(jwtString, config.PASSPORT_SECRET);
        req.jwt = jwtDecoded;
        next();

        // conns.mongodb.db('dixit').collection('jwt')
        //     .find({ jwtString: jwtString })
        //     .toArray()
        //     .then(result => {
        //         console.log('mongo result is', result)
        //         if (result.length > 0) {
        //             console.log('found in mongo', result);
        //             req.jwt = result[0].jwtDecoded;
        //             return next();
        //         }

        //         //else
        //         try {
        //             const jwtDecoded = jwt.verify(jwtString, config.PASSPORT_SECRET);
        //             req.jwt = jwtDecoded;
        //             conns.mongodb.db('dixit').collection('jwt').insertOne({
        //                 email: jwtDecoded.sub,
        //                 jwtString: jwtString,
        //                 jwtDecoded: jwtDecoded
        //             })
        //                 .then(result => next());
        //         } catch (e) {
        //             resp.status(401).json({ error: e })
        //         }
        //     })
    },
    (req, resp) => {
        getAllGroups()
            .then(result => {
                resp.status(200).json(result);
            })
            .catch(err => { console.log(err) })
    }
)

app.post('/authenticate',
    passport.authenticate('local', { failureRedirect: '/status/401', session: false }),
    (req, resp) => { //this function is called only when authentication is successful
        console.log('req.user is', req.user);
        const d = new Date();
        getUserDetails([req.user])
            .then(result => {
                console.log('got user detail', result)
                const token = jwt.sign({
                    sub: req.user,
                    iss: 'ng-dixit',
                    iat: d.getTime() / 1000, //to seconds
                    exp: d.getTime() / 1000 + (60 * 60), //60 mins
                    data: {
                        username: result[0].username,
                    }
                }, config.PASSPORT_SECRET
                );
                resp.status(200).json({
                    token_type: 'Bearer',
                    access_token: token,
                }); //send the bearer token
            })
            .catch(err => { console.log('Error is', err) })

    })

app.get('/api/image/:cardId', (req, resp) => {
    const s3params = {
        Bucket: 'jedimadawan',
        Key: `dixit/${req.params.cardId}.jpg`,
    };
    console.log('s3 param', s3params);
    conns.s3.getObject(s3params, (err, result) => {
        if (err) {
            return resp.status(500).json({ error: err });
        }
        resp.redirect(301, `https://jedimadawan.sgp1.digitaloceanspaces.com/dixit/${req.params.cardId}.jpg`);
    })
})

testConnections(conns)
    .then(() => {
        app.listen(PORT,
            () => {
                console.info(`Application started on port ${PORT} at ${new Date()}`);
            }
        )
    })
    .catch(error => {
        console.error(error);
        process.exit(-1);
    })