// Import required modules
const express = require('express');

// Create an Express application
const app = express();
const port = 3000; // Define the port number

// Define routes
app.get('/', (req, res) => {
  res.send('Welcome to the landing page! <a href="/players">Go to players</a>');
});

app.get('/players', (req, res) => {
  res.send('This is the players page');
});

// Start the server
app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
