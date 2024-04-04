// models/player.js
const mongoose = require('mongoose');

const playerSchema = new mongoose.Schema({
  name: String,
  position: String,
  // Add other player attributes as needed
}, {
    timestamps: true
});

module.exports = mongoose.model('Player', playerSchema);
