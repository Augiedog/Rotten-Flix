const router = require('express').Router()
const AuthController = require('../controllers/auth')

router.post('/', AuthController.SignIn )
router.post('/create', AuthController.CreateNewUser )
router.post('/access', AuthController.AuthenticateToken, AuthController.AuthenticateSession )

module.exports = router