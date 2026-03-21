const mongoose = require('mongoose')

const gameSchema = new mongoose.Schema({
    playerName: {type: String, required: true, trim: true},
    difficulty: {type: String, enum: ['easy', 'medium', 'hard']},
    score: {type: Number, default: 0}, 
}, {timestamps: true})


module.exports = mongoose.model('Game', gameSchema)