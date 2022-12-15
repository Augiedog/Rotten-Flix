const router = require('express').Router()
const ReviewController = require('../controllers/review')

router.get('/', ReviewController.getAllReviews )
router.get('/:id', ReviewController.getReviewById )
router.post('/', ReviewController.createNewReview )
router.put('/:id', ReviewController.editReviewById )
router.delete('/:id', ReviewController.deleteReviewById )

module.exports = router