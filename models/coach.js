// models/coach.js
const mongoose = require('mongoose');

const coachSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    age: {
        type: Number,
        required: true
    },
    nationality: String,
    // Add more fields as needed
}, {
    timestamps: true
});

const Coach = mongoose.model('Coach', coachSchema);

module.exports = Coach;

