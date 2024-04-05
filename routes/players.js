// routes/players.js
const express = require('express');
const router = express.Router();

const playerCtrl = require('../controllers/playerController');

// GET /players/new
router.get('/new', playerCtrl.new);

// GET /players
router.get('/', playerCtrl.index)

// POST /players
router.post('/', playerCtrl.create)

// DELETE /players/:id - Delete a player
router.delete('/:id', playerCtrl.deletePlayer)

// POST /players/:id/qualities - Add quality to player
router.post('/:id/qualities', playerCtrl.addQuality);



module.exports = router;



