// routes/players.js
const express = require('express');
const router = express.Router();

// Players page route
router.get('/players', (req, res) => {
    res.render('players');
});

module.exports = router;
