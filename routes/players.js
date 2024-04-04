// routes/players.js
const express = require('express');
const router = express.Router();

// const playersCtrl = require('../controllers/players.js')

// Players page route
router.get('/', (req, res) => {
    res.render('players');
});

// // GET /movies/new
// router.get('/new', playersCtrl.new);



module.exports = router;
