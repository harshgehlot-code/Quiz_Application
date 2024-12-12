CREATE DATABASE quiz_app;

USE quiz_app;

-- Users table
CREATE TABLE users (
    id INT AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(255) NOT NULL
);

-- Questions table
CREATE TABLE questions (
    id INT AUTO_INCREMENT PRIMARY KEY,
    category VARCHAR(255),
    difficulty ENUM('easy', 'medium', 'hard'),
    question TEXT,
    correct_answer VARCHAR(255),
    incorrect_answers JSON
);

-- Results table
CREATE TABLE results (
    id INT PRIMARY KEY,
    user_id INT,
    score INT,
    FOREIGN KEY (id) REFERENCES users(id)
);
