// controllers/formationController.js
const Formation = require('../models/formation');

const newFormation = (req, res) => {
    res.render('formations/new', { errorMsg: "" });
};

const createFormation = async (req, res) => {
    try {
        const { name, description } = req.body;
        const newFormation = new Formation({ name, description });
        await newFormation.save();
        res.redirect('/formations');
    } catch (err) {
        console.error(err);
        res.status(500).send('Error creating formation');
    }
};

const indexFormations = async (req, res) => {
    try {
        const formations = await Formation.find({});
        res.render('formations/index', { formations });
    } catch (err) {
        console.error(err);
        res.status(500).send('Error fetching formations');
    }
};

const deleteFormation = async (req, res) => {
    try {
        // Extract the formation ID from the request parameters
        const formationId = req.params.id;

        // Find the formation in the database by ID and remove it
        await Formation.findByIdAndDelete(formationId);

        // Redirect back to the all formations page
        res.redirect('/formations');
    } catch (err) {
        // Handle errors
        console.error(err);
        res.status(500).send('Error deleting formation');
    }
};

module.exports = {
    newFormation,
    createFormation,
    indexFormations,
    deleteFormation
};
