const User = require('../models/user')
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')
const Token = require('../models/token')

const AuthController = {
    CreateNewUser: async (req,res) => {
        try {
            req.body.password = await bcrypt.hash(req.body.password, 10)
            const newUser = await User.create(req.body)
            res.json({ message: `${newUser.username} successfully created!`})
        } catch (error) {
            error.code === 11000 ? res.status(400).json({ message: `${req.body.username} already exists!`})
            :
            res.status(500).json({ message: error })
        }
    },
 

    SignIn: async (req,res) => {
        const { username, password } = req.body;

        try {
            User.findOne({username: username}, async function (err,doc) {
                // -- Is there an username in our database -- // 
                if (doc === null) return res.status(404).json({message: `${username} was not found.`})
                // -- Use bcrypt to compare the passwords -- //
                const matchedPW = await bcrypt.compare(password, doc.password)
                if (matchedPW === false) return res.status(401).json({message: "Invalid Username or Password"}) 
                // -- Generate an access token -- //
                const accessToken = AuthController.GenerateAuthToken(doc._id)
                // -- Sign token -- //
                const refreshToken = jwt.sign({ user: doc._id }, process.env.REFRESH_TOKEN )
                // -- Save token to database
                await Token.create({ refreshToken: refreshToken })
        
                res.send({ accessToken: accessToken, refreshToken: refreshToken, uid: doc._id, username: doc.username })
            })   
        } catch (error) {
            res.status(500).json({ message: error })
        }
    },
    
    AuthenticateToken: async (req, res, next) => {
        const authHeader = req.headers['authorization']
        const token = authHeader && authHeader.split(' ')[1]

        if (token === null) return res.status(401).send('no token')

        jwt.verify(token, process.env.GUARDIAN_TOKEN, (err, user) => {
            if (err) return res.status(403).send('invalid token')
            req.user = user
            next()
        })
    },

    AuthenticateSession: async (req, res) => {
        User.findById(req.body.uid, (err,doc) => {
            if (err) return res.status(401).send("Error: Invalid User")
            return doc ? res.json({message: true}) : res.status(401).send('Error: Invalid User')
        })
    },

    GenerateAuthToken: (user) => jwt.sign({user: user}, process.env.GUARDIAN_TOKEN, { expiresIn: '30m' } )
}

module.exports = AuthController;