CREATE DATABASE famous;

USE famous

CREATE TABLE people(
    id INT(11) NOT NULL AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(180),
    office VARCHAR(180),
    image VARCHAR(200),
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP

);

DESCRIBE people;