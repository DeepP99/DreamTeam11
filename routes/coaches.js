// routes/coaches.js
const express = require('express');
const router = express.Router();
const coachCtrl = require('../controllers/coachController');

router.get('/new', coachCtrl.newCoach);
router.post('/', coachCtrl.createCoach);
router.get('/', coachCtrl.indexCoaches);

module.exports = router;
