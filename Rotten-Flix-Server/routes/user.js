const router = require('express').Router()
const UserController = require('../controllers/user')

router.get('/', UserController.getAllUsers )
router.get('/:id', UserController.getUserById )
router.post('/', UserController.createNewUser )
router.put('/:id', UserController.editUserById )
router.delete('/:id', UserController.deleteUserById )

module.exports = router