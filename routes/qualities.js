// routes/qualities.js
const express = require('express');
const router = express.Router();
const qualityCtrl = require('../controllers/qualityController');

// POST /qualities - Create a new quality
router.post('/', qualityCtrl.createQuality);

// PUT /qualities/:id - Update a quality
router.put('/:id', qualityCtrl.updateQuality);

// DELETE /qualities/:id - Delete a quality
router.delete('/:id', qualityCtrl.deleteQuality);

// Other routes for managing qualities...
// For example: GET /qualities, GET /qualities/:id

module.exports = router;
