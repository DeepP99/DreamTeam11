// Import required modules
const express = require('express');
const router = express.Router();

// Define route to display formations
router.get('/', (req, res) => {
    // Logic to retrieve formations from the database
    // Render the formations page with the retrieved formations
    res.render('formations', { formations: [] }); // Pass formations to the view
});

// Define route to display form for adding a new formation
router.get('/new', (req, res) => {
    res.render('formations/new');
});

// Define route to handle adding a new formation
router.post('/', (req, res) => {
    // Logic to add a new formation to the database
    // Redirect to the formations page after successfully adding the formation
    res.redirect('/formations');
});

module.exports = router;
