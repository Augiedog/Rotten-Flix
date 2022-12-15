const Rating = require('../models/rating')
const Movie = require('../models/movie')

const RatingController = {

    // GET all ratings
    getAllRatings : async (req, res) => {
        try {
            const allRatings = await Rating.find()
            res.json(allRatings)
        } catch (err) {
            res.status(500).json({ message: err })
        }
    },

    // GET rating by Id
    getRatingById : async (req, res) => {
        try {
            const { id } = req.params
            const rating = await Rating.findById(id)
            res.json(rating)
        } catch (err) {
            res.status(500).json({ message: err })
        }
    },

    // POST create new rating
    createNewRating : async (req, res) => {
        try {
            const check = await Rating.find({movie: req.body.movie, username: req.body.username});
            if (check.length > 0) {
                return res.status(400).json({ message: "Only Allowed 1 Rating Per Movie." })
            }
            const newRating = await Rating.create(req.body)
            const movie = await Movie.findById(newRating.movie);
            movie.ratings.push(newRating._id);
            movie.save()
            res.json({ message: `A new rating was created!` })
        } catch (err) {
            res.status(500).json({ message: err })
        }
    },

    // PUT edit rating by Id
    editRatingById : async (req, res) => {
        try {
            const { id } = req.params
            await Rating.findByIdAndUpdate(id, req.body)
            res.json({ message: `Rating was edited successfully!` })
        } catch (err) {
            res.status(500).json({ message: err })
        }
    },

    // DELETE rating by Id
    deleteRatingById : async (req, res) => {
        try {
            const { id } = req.params
            await Rating.findByIdAndDelete(id)
            res.json({ message: `Successfully deleted rating!` })
        } catch (err) {
            res.status(500).json({ message: err })
        }
    }

}

module.exports = RatingController