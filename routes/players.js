// routes/players.js
const express = require('express');
const router = express.Router();

const playerCtrl = require('../controllers/playerController');

// // Players page route
// router.get('/', (req, res) => {
//     res.render('players');
// });

// Players page route
router.get('/', playerCtrl.getAllPlayers); 

// GET /players/new
router.get('/new', playerCtrl.newPlayerForm);


// POST /players (to handle adding a new player)
router.post('/', playerCtrl.addPlayer); // Define a route for adding a player



module.exports = router;
