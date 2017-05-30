CREATE DATABASE burger_db;
USE burger_db;

-- Create the table plans.
CREATE TABLE burgers(
id int NOT NULL AUTO_INCREMENT,
burger varchar(255) NOT NULL,
description varchar (255),
devoured boolean DEFAULT false NOT NULL,
date TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
PRIMARY KEY (id)
);