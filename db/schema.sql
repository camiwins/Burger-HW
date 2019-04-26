DROP DATABASE IF EXISTS burgers_db;
CREATE DATABASE burgers_db;
USE burgers_db;

CREATE TABLE burgersTable (
    id INT NOT NULL AUTO_INCREMENT,
    burgerName VARCHAR(30) NOT NULL,
    isDevoured BOOLEAN DEFAULT false,
    PRIMARY KEY (id)
);

INSERT INTO burgersTable (burgerName, isDevoured)
VALUES ("Hamburger", false);

INSERT INTO burgersTable (burgerName, isDevoured)
VALUES ("Cheeseburger", false);

INSERT INTO burgersTable (burgerName, isDevoured)
VALUES ("Veggie Burger", false);