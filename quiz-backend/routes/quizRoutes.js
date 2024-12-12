const express = require("express");
const db = require("../config/db");
const router = express.Router();
const mysql = require('mysql');


const connection = mysql.createConnection({
  host: "localhost",
  user: "harsh",
  password: "test1234",
  database: "quiz_app", // Use the name of the database you created
});

// Connect to the MySQL database
connection.connect((err) => {
  if (err) {
    console.error("Error connecting to the database: " + err.stack);
    return;
  }
  console.log("Connected to the database as ID harsh " + connection.PORT);
});
// Fetch questions based on category and difficulty
router.post("/questions", (req, res) => {
  const { category, difficulty } = req.body;

  const query = `
    SELECT id, question, correct_answer, incorrect_answers
    FROM questions
    WHERE category = ? AND difficulty = ?
    LIMIT 10
  `;
  db.query(query, [category, difficulty], (err, results) => {
    if (err) {
      return res.status(500).json({ error: "Error fetching questions" });
    }
    // Parse JSON for incorrect_answers
    const formattedResults = results.map((row) => ({
      ...row,
      incorrect_answers: JSON.parse(row.incorrect_answers),
    }));
    res.json(formattedResults);
  });
});

// Save user and score
router.post("/submit",  (req, res) => {
  const { name, score } = req.body;

  console.log("Username" ,name);
  console.log(score);

  connection.query(
    "INSERT INTO users (name) VALUES (?)",
    [name],
    
    (error, results) => {
      if (error) {
        console.error("Error inserting user into the database: " + error.stack);
        return res.status(500).json({ error: "Failed to insert user" });
      }

      // Send a success response
      res.json({ message: "User inserted successfully" });
    }
  );
});

router.post("/quiz/submit", (req, res) => {

  const { score } = req.body;
  
  connection.query('INSERT INTO results (score) VALUES (?)', [score], (error, results) => {
    if (error) {
        console.error('Error inserting user into the database: ' + error.stack);
        return res.status(500).json({ error: 'Failed to insert user' });
    }

  // Send a success response
  console.log({ message: 'score inserted successfully' });
});

})

module.exports = router;
