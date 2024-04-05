// Import required modules
const express = require('express');
const bodyParser = require('body-parser');
const logger = require('morgan')
require('dotenv').config();
require('./config/database');



// Import routes
const indexRouter = require('./routes/index');
const playersRouter = require('./routes/players');
// const formationsRouter = require('./routes/formations');

// Create an Express application
const app = express();
const port = 3000; // Define the port number

// Set EJS as view engine
app.set('view engine', 'ejs');
app.set('views', './views');

// Middleware
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(logger('dev'));


// Use routes
app.use('/', indexRouter);
app.use('/players', playersRouter);
// app.use('/formations', formationsRouter); // Use formations router


// Error handling middleware
app.use((err, req, res, next) => {
    console.error(err.stack);
    res.status(500).send('Internal Server Error');
});



// Start the server
app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});










