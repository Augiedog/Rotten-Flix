const Review = require('../models/review')
const Movie = require('../models/movie')

const ReviewController = {

    // GET all reviews
    getAllReviews : async (req, res) => {
        try {
            const allReviews = await Review.find()
            res.json(allReviews)
        } catch (err) {
            res.status(500).json({ message : err })
        }
    },

    // GET review by Id
    getReviewById : async (req, res) => {
        try {
            const { id } = req.params
            const review = await Review.findById(id)
            res.json(review)
        } catch (err) {
            res.status(500).json({ message: err })
        }
    },

    // POST create new review
    createNewReview : async (req, res) => {
        try {
            const check = await Review.find({movie: req.body.movie, username: req.body.username});
            if (check.length > 0) {
                return res.status(400).json({ message: "Only Allowed 1 Review Per Movie." })
            }
            const newReview = await Review.create(req.body)
            const movie = await Movie.findById(newReview.movie)
            movie.reviews.push(newReview._id)
            movie.save()
            res.json({ message: `A new review was created!` })
        } catch (err) {
            res.status(500).json({ message : err })
        }
    },

    // PUT edit reivew by Id
    editReviewById : async (req, res) => {
        try {
            const { id } = req.params
            await Review.findByIdAndUpdate(id, req.body)
            res.json({ message: `Review was edited successfully!` })
        } catch (err) {
            res.status(500).json({ message : err })
        }
    },

    // DELETE review by Id
    deleteReviewById : async (req, res) => {
        try {
            const { id } = req.params
            await Review.findByIdAndDelete(id)
            res.json({ message: `Successfully deleted review!` })
        } catch (err) {
            res.status(500).json({ message : err })
        }
    }

}

module.exports = ReviewController