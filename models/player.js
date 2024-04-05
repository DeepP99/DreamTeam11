// models/formation.js
const mongoose = require('mongoose');

const playerSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    position: {
        type: String,
        required: true
    },
    description: String,
    // You can add more fields as needed
}, {
    timestamps: true
});

const Player = mongoose.model('Player', playerSchema);

module.exports = Player;

