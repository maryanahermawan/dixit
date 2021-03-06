import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, FormBuilder, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { Game } from '../models';
import { GameService } from '../services/game.service';
import { environment } from '../../environments/environment.prod';

@Component({
  selector: 'app-game',
  templateUrl: './game.component.html',
  styleUrls: ['./game.component.css']
})
export class GameComponent implements OnInit {
  myForm: FormGroup;
  NUM_PLAYER = 3;

  story = new FormControl('');
  game: Game;
  gameId: string;
  storyTeller: number = 0;
  playerId: number = 0;
  hidden: boolean = true;
  email: string;
  api_url: string = environment.api_url;

  activeCards: number[] = [];

  constructor(private gameService: GameService, private fb: FormBuilder, private route: ActivatedRoute) {
    this.myForm = this.fb.group({ story: ['', Validators.required] })
    this.gameId = this.route.snapshot.paramMap.get('groupId');
    this.email = this.route.snapshot.paramMap.get('email');
    console.log('email is', this.email);

    this.gameService.initPusher(this.gameId)
      .then(result => {
        this.playerId = result - 1;
        console.log('playerId is', this.playerId, 'storyteller', this.storyTeller);

        this.createPlayerAsset(this.gameId, this.playerId);
      })
      .catch(error => { console.log('Promise rejected', error) })

    this.listenForChanges(this.gameId); //update game

    this.gameService.listenMember(this.gameId); //update players (no. of players)

  }

  ngOnInit() {
  }

  getQueryParam(name) {
    var match = RegExp('[?&]' + name + '=([^&]*)').exec(window.location.search);
    return match && decodeURIComponent(match[1].replace(/\+/g, ' '));
  }

  createPlayerAsset(gameId: string, playerId: number) {
    this.gameService.createPlayerAsset(gameId, playerId)
      .then(result => {
        this.game = result;
      })
      .catch(error => { console.log('Error is', error) });
  }

  chooseActiveCards(cardId: number): GameComponent {
    if (this.cannotActivateCard()) { return; }
    this.gameService.chooseActiveCard(this.gameId, this.playerId, cardId)
      .then(result => {
      })
      .catch(error => {
      })

    return this;
  }

  chooseGuessCard(cardId: number): GameComponent {
    if (this.cannotGuessCard()) { return; }
    this.gameService.chooseGuessCard(this.gameId, this.playerId, cardId)
      .then(result => {
      })
      .catch(error => {
      })
    return this;
  }

  listenForChanges(gameId: string): GameComponent {
    const idx = this.pusherChannel.findIndex(e => e.gameId == gameId);
    this.pusherChannel[idx].channel.bind('server-fire', (obj) => {
      console.log('obj received', obj);
      let tempArray = [];
      obj.game.playerAsset.forEach(element => {
        if (!!element.activeCard) { tempArray.push(element.activeCard) }
      });
      this.activeCards = tempArray;

      if (this.activeCards.length == this.NUM_PLAYER) {
        console.log('shuffling');
        this.shuffleCard(this.activeCards);
        this.shuffleCard(this.activeCards);
        //Reveal cards
        this.hidden = false;
      }

      this.game = obj.game; //update the game
      this.storyTeller = obj.game.storyTeller;
      this.story.setValue(obj.game.story);

      if (this.activeCards.length == 0) {
        this.hidden = true;
      }

      console.log('LISTEN FOR CHANGE: updated game is', this.game);
      console.log('storyTeller >', this.storyTeller);
    });
    return this;
  }

  cannotActivateCard() { //can only choose active card once, only can choose after story is set
    return !!this.game.playerAsset[this.playerId].activeCard || (this.playerId != this.game.storyTeller && !this.game.story);
  }

  cannotGuessCard() { //can only guess card once
    return !!this.game.playerAsset[this.playerId].guessCard;
  }

  submitStory() {
    this.gameService.submitStory(this.gameId, this.story.value);
  }

  shuffleCard(cardArray) {
    let currentIndex = cardArray.length; let temp; let randomIndex;

    // While there remain elements to shuffle...
    while (0 !== currentIndex) {

      // Pick a remaining element...
      randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex -= 1;

      // And swap it with the current element.
      temp = cardArray[currentIndex];
      cardArray[currentIndex] = cardArray[randomIndex];
      cardArray[randomIndex] = temp;
    }

    return cardArray;
  }

  get pusherChannel(): any[] {
    return this.gameService.getChannel();
  }

  get players() {
    return this.gameService.getNoOfPlayers()
  }

}