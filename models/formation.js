// models/formation.js
const mongoose = require('mongoose');

const formationSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    description: String // Add any other fields as needed
}, {
    timestamps: true
});

const Formation = mongoose.model('Formation', formationSchema);

module.exports = Formation;
