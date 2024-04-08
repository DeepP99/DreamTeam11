// // controllers/playerController.js
const Player = require('../models/player');



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




// const showPlayer = async (req, res) => {
//     try {
//         const playerId = req.params.id;
//         const player = await Player.findById(playerId);
//         if (!player) {
//             return res.status(404).send('Player not found');
//         }
//         res.render('players/show', { player });
//     } catch (err) {
//         console.error(err);
//         res.status(500).send('Error fetching player details');
//     }
// };

const deletePlayer = async (req, res) => {
    try {
        // Extract the player ID from the request parameters
        const playerId = req.params.id;

        // Find the player in the database by ID and remove it
        await Player.findByIdAndDelete(playerId);

        // Respond with a success message or status
        // res.status(200).send('Player deleted successfully');
        res.redirect('/players');
    } catch (err) {
        // Handle errors
        console.error(err);
        res.status(500).send('Error deleting player');
    }
};






module.exports = {
    new: newPlayer,
    create: create,
    index,
    // showPlayer,
    deletePlayer
}


















