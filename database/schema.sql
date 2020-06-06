### Schema

CREATE DATABASE smoothie_db;
USE smoothie_db;

CREATE TABLE smoothies
(
	id int NOT NULL AUTO_INCREMENT,
	smoothie_name varchar(100) NOT NULL,
	devoured BOOLEAN DEFAULT false,
	PRIMARY KEY (id)
);