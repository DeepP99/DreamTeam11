const qualitySchema = new mongoose.Schema({
    player: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Player'
    },
    dribbling: Number,
    pace: Number,
    ballControl: Number,
    vision: Number,
    defense: Number
});

const Quality = mongoose.model('Quality', qualitySchema);

module.exports = {
    Player: Player,
    Quality: Quality
};
