// // controllers/playerController.js
// function newPlayerForm(req, res) {
//     res.render('players/new');
// }

// module.exports = {
//     newPlayerForm
// };









// // controllers/playerController.js
// const Player = require('../models/player');

// async function getAllPlayers(req, res) {
//     try {
//         // Retrieve all players from the database
//         const players = await Player.find({});

//         // Render the players page with the retrieved players
//         res.render('players', { players });
//     } catch (error) {
//         // Handle errors gracefully
//         console.error('Error fetching players:', error);
//         res.status(500).send('Internal Server Error');
//     }
// }

// function newPlayerForm(req, res) {
//     res.render('players/new');
// }

// module.exports = {
//     getAllPlayers,
//     newPlayerForm
// };














// controllers/playerController.js
const Player = require('../models/player');

async function getAllPlayers(req, res) {
    try {
        // Retrieve all players from the database
        const players = await Player.find({});

        // Render the players page with the retrieved players
        res.render('players', { players }); // Pass players to the view
    } catch (error) {
        // Handle errors gracefully
        console.error('Error fetching players:', error);
        res.status(500).send('Internal Server Error');
    }
}

function newPlayerForm(req, res) {
    res.render('players/new');
}

async function addPlayer(req, res) {
    try {
        // Create a new player using data from the request body
        const player = new Player({
            name: req.body.name,
            position: req.body.position
            // Add other player attributes as needed
        });

        // Save the new player to the database
        await player.save();

        // Redirect to the players page after successfully adding the player
        res.redirect('/players');
    } catch (error) {
        // Handle errors gracefully
        console.error('Error adding player:', error);
        res.status(500).send('Internal Server Error');
    }
}

module.exports = {
    getAllPlayers,
    newPlayerForm,
    addPlayer
};



