const mongoose = require('mongoose')

const ratingSchema = new mongoose.Schema({
    rating: {
        type: Number,
        max: 5,
        min: 1,
        required:true
    },
    username: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User"
    },
    movie: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Movie"
    }
})

module.exports = mongoose.model('Rating', ratingSchema)