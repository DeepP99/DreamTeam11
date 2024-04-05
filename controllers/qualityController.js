// controllers/qualityController.js
const Quality = require('../models/quality');

const createQuality = async (req, res) => {
    try {
        const { name, rating } = req.body;
        const newQuality = new Quality({ name, rating });
        await newQuality.save();
        res.status(201).json({ message: 'Quality created successfully', quality: newQuality });
    } catch (err) {
        console.error(err);
        res.status(500).json({ error: 'Internal Server Error' });
    }
};

const getAllQualities = async (req, res) => {
    try {
        const qualities = await Quality.find();
        res.render('qualities/index', { qualities });
    } catch (err) {
        console.error(err);
        res.status(500).json({ error: 'Internal Server Error' });
    }
};

// Implement other CRUD operations as needed

module.exports = {
    createQuality,
    getAllQualities,
    // Add other CRUD functions here
};
