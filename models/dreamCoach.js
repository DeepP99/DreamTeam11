// models/dreamCoach.js
const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const dreamCoachSchema = new Schema({
    name: { type: String, required: true },
    nationality: { type: String },
    age: { type: Number }
    // Add other fields as needed
}, {
    timestamps: true
});

module.exports = mongoose.model('DreamCoach', dreamCoachSchema);
