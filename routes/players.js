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



module.exports = router;
