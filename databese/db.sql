create database db_links;

use db_links;

create table users(
    id int(11) not null primary key auto_increment,
    username varchar(16) not null,
    password varchar(60) not null,
    fullname varchar(100) not null
)

create table links(
    id int(11) not null primary key auto_increment,
    title varchar(150) not null,
    url varchar(255) not null,
    description text,
    user_id int(11),
    created_at timestamp not null default current_timestamp,

    constraint fk_user foreign key (user_id) references users(id)
);
