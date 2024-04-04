// models/formation.js
const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const formationSchema = new Schema({
    name: { type: String, required: true },
    description: { type: String }
    // Add other fields as needed
}, {
    timestamps: true
});

module.exports = mongoose.model('Formation', formationSchema);
