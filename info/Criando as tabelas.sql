CREATE TABLE contas_pagars (id INT NOT NULL AUTO_INCREMENT,nome VARCHAR(200) NULL,valor DOUBLE NULL,PRIMARY KEY(id))


CREATE TABLE users (nome VARCHAR(200) NULL, email VARCHAR(200) NULL)

INSERT INTO users (nome, email) VALUES ('lucas', 'l@sistemas.com.br');


https://www.devmedia.com.br/primeiros-passos-no-mysql/28438

ALTER TABLE users ADD COLUMN id  INT NOT NULL AUTO_INCREMENT AFTER email, ADD PRIMARY KEY (id);

colocando o campo id na frente:

ALTER TABLE users CHANGE COLUMN id id INT(11) NOT NULL AUTO_INCREMENT FIRST;


