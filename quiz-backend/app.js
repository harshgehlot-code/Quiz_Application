const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const dotenv = require('dotenv');
const quizRoutes = require('./routes/quizRoutes');
const mysql = require('mysql');

// Initialize dotenv for environment variables
dotenv.config();

const app = express();

// Middleware
app.use(bodyParser.json());
app.use(cors());

// Routes
app.use(quizRoutes);

// Start the server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
  const connection = mysql.createConnection ({
    host: 'localhost',
    user:'harsh',
    password: 'test1234',
    database: 'quiz_app' // Use the name of the database you created
});

// Connect to the MySQL database
connection.connect((err) => {
    if (err) {
        console.error('Error connecting to the database: ' + err.stack);
        return;
  }
    console.log('Connected to the database as ID harsh ' + connection.PORT);
});


});
