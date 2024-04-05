// // controllers/playerController.js
const Player = require('../models/player');
const Quality = require('../models/quality');



const newPlayer = (req, res) => {
    res.render('players/new', { errorMsg: "" })
}


const create = async (req, res) => {
    try {
        // Trim the whitespace from req.body.name
        req.body.name = req.body.name.trim();

        // Check if req.body.name exists and is not empty
        if (req.body.name) {
            // Create a new player instance
            const newPlayer = new Player({
                name: req.body.name, 
                position: req.body.position
                // Add any other properties you need for a player
            });

            // Save the new player to the database
            await newPlayer.save();
            console.log(newPlayer)
            // Redirect to a success page or wherever you want
            res.redirect('/players');
        } else {
            // If req.body.name is empty, render the new player form again with an error message
            res.render('players/new', { errorMsg: "Name cannot be empty" });
        }
    } catch (err) {
        // Handle any errors that occur during the creation process
        console.error(err);
        res.status(500).send("Error creating player");
    }
}


const index = async (req, res) => {
    try {
        const player = await Player.find({})
        res.render('players/index', {players: player})
    } catch (err) {
        console.log(err)
    }
}

const deletePlayer = async (req, res) => {
    try {
        const playerId = req.params.id;
        // Find the player by ID and delete it
        await Player.findByIdAndDelete(playerId);
        // Redirect to the players list page after deletion
        res.redirect('/players');
    } catch (err) {
        console.error(err);
        res.status(500).send("Error deleting player");
    }
};


const addQuality = async (req, res) => {
    const playerId = req.params.id;
    const { name, rating } = req.body;

    try {
        // Find the player
        const player = await Player.findById(playerId);
        if (!player) {
            return res.status(404).json({ error: 'Player not found' });
        }

        // Create a new quality
        const newQuality = new Quality({ name, rating });

        // Add the quality to the player's qualities array
        player.qualities.push(newQuality);

        // Save the player
        await player.save();

        res.status(201).json({ message: 'Quality added successfully', quality: newQuality });
    } catch (err) {
        console.error(err);
        res.status(500).send({ error: 'Internal Server Error' });
    }
};


module.exports = {
    new: newPlayer,
    create: create,
    index,
    deletePlayer,
    addQuality
}














// // controllers/playerController.js
// const Player = require('../models/player');

// async function getAllPlayers(req, res) {
//     try {
//         // Retrieve all players from the database
//         const players = await Player.find({});

//         // Render the players page with the retrieved players
//         res.render('players', { players }); // Pass players to the view
//     } catch (error) {
//         // Handle errors gracefully
//         console.error('Error fetching players:', error);
//         res.status(500).send('Internal Server Error');
//     }
// }

// const newPlayerForm = (req, res) => {
//     res.render('players/new');
// };


// async function addPlayer(req, res) {
//     try {
//         // Create a new player using data from the request body
//         const player = new Player({
//             name: req.body.name,
//             position: req.body.position
//             // Add other player attributes as needed
//         });

//         // Save the new player to the database
//         await player.save();

//         // Redirect to the players page after successfully adding the player
//         res.redirect('/players');
//     } catch (error) {
//         // Handle errors gracefully
//         console.error('Error adding player:', error);
//         res.status(500).send('Internal Server Error');
//     }
// }

// module.exports = {
//     getAllPlayers,
//     newPlayerForm,
//     addPlayer
// };



