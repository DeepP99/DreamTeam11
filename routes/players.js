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

module.exports = router;



