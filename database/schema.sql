DROP DATABASE IF EXISTS smoothie_db;

CREATE DATABASE smoothie_db;
USE smoothie_db;

CREATE TABLE smoothies
(
	id int NOT NULL AUTO_INCREMENT,
	smoothieName varchar(100) NOT NULL,
	devoured BOOLEAN DEFAULT false,
	PRIMARY KEY (id)
);