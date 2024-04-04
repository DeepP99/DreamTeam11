// Import required modules
const express = require('express');
const bodyParser = require('body-parser');
require('dotenv').config();
require('./config/database');


// Import routes
const indexRouter = require('./routes/index');
const playersRouter = require('./routes/players');

// Create an Express application
const app = express();
const port = 3000; // Define the port number

// Set EJS as view engine
app.set('view engine', 'ejs');
app.set('views', './views');

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());


// Use routes
app.use('/', indexRouter);
app.use('/', playersRouter);

// Start the server
app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});










