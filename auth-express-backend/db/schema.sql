
DROP DATABASE IF EXISTS auth_dev;
DROP TABLE IF EXISTS users;


CREATE DATABASE auth_dev;

\c auth_dev;

CREATE TABLE users (
    id SERIAL PRIMARY KEY,
    firstname TEXT NOT NULL,
    lastname TEXT  NOT NULL,
    email TEXT NOT NULL,
    password TEXT  NOT NULL
);

CREATE TABLE registration (
    resource_id INT SERIAL PRIMARY KEY ,
    user_id INT,
    title VARCHAR(100) NOT NULL,
    content TEXT,
    creation_date TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    FOREIGN KEY (user_id) REFERENCES users(id)
);
