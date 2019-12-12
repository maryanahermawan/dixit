drop database if exists dixit;

create database dixit;
use dixit;

create table users (
	email varchar(64) not null,
    username varchar(128) not null,
    password varchar(256) not null,
    primary key(email),
    key(username)
);

create table gameGroups (
	group_id int not null auto_increment,
    group_name text not null,
    created datetime not null,
    primary key(group_id)
);

create table membershipDetails (
	id int not null auto_increment,
	group_id int not null,
    email varchar(64) not null,
    primary key(id),
    constraint fk_group foreign key(group_id) references gameGroups(group_id),
    constraint fk_user foreign key(email) references users(email)
);

create table games (
	game_id varchar(64) not null,
    group_id int not null,
    game_time datetime not null,
    primary key(game_id),
    constraint fk_game_group foreign key(group_id) references gameGroups(group_id)
);

create table wins (
	win_id int not null auto_increment,
    email varchar(64) not null,
    game_id varchar(64) not null,
    winning_score int not null,
    primary key(win_id),
    key (email),
    constraint fk_win_email foreign key(email) references users(email),
    constraint fk_win_game foreign key(game_id) references games(game_id)
);

create table loses (
	lose_id int not null auto_increment,
    email varchar(64) not null,
    game_id varchar(64) not null,
    losing_score int not null,
    primary key(lose_id),
    key(email),
    constraint fk_lose_email foreign key(email) references users(email),
    constraint fk_lose_game foreign key(game_id) references games(game_id)
);

INSERT INTO users(username, email, password)
VALUES ('Luke', 'luke@gmail.com', sha2('luke', 256)),
       ('Leia', 'leia@gmail.com', sha2('leia', 256)),
       ('R2', 'r2@gmail.com', sha2('r2', 256)),
       ('Yoda', 'yoda@gmail.com', sha2('yoda', 256)),
       ('Obiwan', 'obiwan@gmail.com', sha2('obiwan', 256));
       
INSERT INTO gameGroups(group_name, created)
VALUES ('The Skywalkers', localtime()),
('Obiwan and friends', localtime());

INSERT INTO membershipDetails(group_id, email)
VALUES (2,'obiwan@gmail.com'),
(2, 'yoda@gmail.com'),
(2, 'luke@gmail.com'),
(1, 'luke@gmail.com'),
(1, 'leia@gmail.com'),
(1, 'r2@gmail.com');

INSERT INTO games(game_id, group_id, game_time)
VALUES ('game1', 1, localtime()),
('game2', 2, localtime());

INSERT INTO wins(email, game_id, winning_score)
VALUES ('r2@gmail.com', 'game1', 32),
('yoda@gmail.com', 'game2', 34);

INSERT INTO loses(email, game_id, losing_score)
VALUES ('leia@gmail.com', 'game1', 16),
('luke@gmail.com', 'game1', 28),
('obiwan@gmail.com', 'game2', 30),
('luke@gmail.com', 'game2', 29);