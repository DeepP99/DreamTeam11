// routes/formations.js
const express = require('express');
const router = express.Router();
const formationCtrl = require('../controllers/formationController');

router.get('/new', formationCtrl.newFormation);
router.post('/', formationCtrl.createFormation);
router.get('/', formationCtrl.indexFormations);

// DELETE /players/:id - Delete a player
router.post('/:id', formationCtrl.deleteFormation);

module.exports = router;
