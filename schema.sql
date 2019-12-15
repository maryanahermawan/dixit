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
	group_id varchar(64) not null,
    group_name text not null,
    created datetime not null,
    picture_file varchar(64) not null,
    primary key(group_id)
);

create table membershipDetails (
	id int not null auto_increment,
	group_id varchar(64) not null,
    email varchar(64) not null,
    primary key(id),
    constraint fk_group foreign key(group_id) references gameGroups(group_id),
    constraint fk_user foreign key(email) references users(email)
);

create table games (
	game_id int not null auto_increment,
    group_id varchar(64) not null,
    game_time datetime not null,
    primary key(game_id),
    constraint fk_game_group foreign key(group_id) references gameGroups(group_id)
);

create table wins (
	win_id int not null auto_increment,
    email varchar(64) not null,
    game_id int not null,
    winning_score int not null,
    primary key(win_id),
    key (email),
    constraint fk_win_email foreign key(email) references users(email),
    constraint fk_win_game foreign key(game_id) references games(game_id)
);

create table loses (
	lose_id int not null auto_increment,
    email varchar(64) not null,
    game_id int not null,
    losing_score int not null,
    primary key(lose_id),
    key(email),
    constraint fk_lose_email foreign key(email) references users(email),
    constraint fk_lose_game foreign key(game_id) references games(game_id)
);