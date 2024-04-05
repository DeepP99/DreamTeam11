// models/quality.js
const mongoose = require('mongoose');

const qualitySchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    rating: {
        type: Number,
        required: true
    }
}, {
    timestamps: true
});

const Quality = mongoose.model('Quality', qualitySchema);

module.exports = Quality;
