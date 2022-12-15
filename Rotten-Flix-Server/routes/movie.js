const router = require('express').Router()
const MovieController = require('../controllers/movie')

router.get('/', MovieController.getAllMovies )
router.get('/:id', MovieController.getMovieById )
router.post('/', MovieController.createNewMovie )
router.put('/:id', MovieController.editMovieById )
router.delete('/:id', MovieController.deleteMovieById )

module.exports = router