// // models/player.js
// const mongoose = require('mongoose');

// const playerSchema = new mongoose.Schema({
//     name: {
//         type: String,
//         required: true
//     },
//     position: {
//         type: String,
//         required: true
//     }
//     // You can add more fields as needed
// }, {
//     timestamps: true
// });


// const Player = mongoose.model('Player', playerSchema);

// module.exports = Player;











//updated

// models/player.js
const mongoose = require('mongoose');

const qualitySchema = new mongoose.Schema({
    name: String,
    rating: Number
});

const playerSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    position: {
        type: String,
        required: true
    },
    qualities: [qualitySchema] // One-to-many relationship with qualities
}, {
    timestamps: true
});

const Player = mongoose.model('Player', playerSchema);

module.exports = Player;
