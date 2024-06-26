// controllers/coachController.js
const Coach = require('../models/coach');

const newCoach = (req, res) => {
    res.render('coaches/new', { errorMsg: "" });
};



const createCoach = async (req, res) => {
    try {
        const { name, age, nationality } = req.body;
        console.log('Received form data:', { name, age, nationality });

        const newCoach = new Coach({ name, age, nationality });
        await newCoach.save();
        console.log('New coach saved:', newCoach);

        res.redirect('/coaches');
    } catch (err) {
        console.error('Error creating coach:', err);
        res.status(500).send('Error creating coach');
    }
};


const indexCoaches = async (req, res) => {
    try {
        const coaches = await Coach.find({});
        res.render('coaches/index', { coaches });
    } catch (err) {
        console.error(err);
        res.status(500).send('Error fetching coaches');
    }
};

module.exports = {
    newCoach,
    createCoach,
    indexCoaches
};
