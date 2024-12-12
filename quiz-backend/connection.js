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
})

    connection.query('INSERT INTO users (name) VALUES (?)', [name], (error, results) => {
        if (error) {
            console.error('Error inserting user into the database: ' + error.stack);
            return res.status(500).json({ error: 'Failed to insert user' });
        }
  
      // Send a success response
      res.json({ message: 'User inserted successfully' });
    });
    // connection.query('INSERT INTO results (score) VALUES (?)', [score], (error, results) => {
    //     if (error) {
    //         console.error('Error inserting results into the database: ' + error.stack);
    //         return res.status(500).json({ error: 'Failed to insert results' });
    //     }
  
    //   // Send a success response
    //   res.json({ message: 'results inserted successfully' });
    // });
