// // controllers/playerController.js
// function newPlayerForm(req, res) {
//     res.render('players/new');
// }

// module.exports = {
//     newPlayerForm
// };

// controllers/playerController.js
const Player = require('../models/player');

async function getAllPlayers(req, res) {
    try {
        // Retrieve all players from the database
        const players = await Player.find({});

        // Render the players page with the retrieved players
        res.render('players/index', { players });
    } catch (error) {
        // Handle errors gracefully
        console.error('Error fetching players:', error);
        res.status(500).send('Internal Server Error');
    }
}

function newPlayerForm(req, res) {
    res.render('players/new');
}

module.exports = {
    getAllPlayers,
    newPlayerForm
};


