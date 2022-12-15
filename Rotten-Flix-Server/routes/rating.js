const router = require('express').Router()
const RatingController = require('../controllers/rating')

router.get('/', RatingController.getAllRatings )
router.get('/:id', RatingController.getRatingById )
router.post('/', RatingController.createNewRating )
router.put('/:id', RatingController.editRatingById )
router.delete('/:id', RatingController.deleteRatingById )

module.exports = router