const User = require('../models/user')

const UserController = {

    // GET all users
    getAllUsers : async (req, res) => {
        try {
            const allUsers = await User.find()
            res.json(allUsers)
        } catch (err) {
            res.status(500).json({ message : err })
        }
    },

    // GET user by Id
    getUserById : async (req, res) => {
        try {
            const { id } = req.params
            const user = await User.findById(id)
            res.json(user)
        } catch (err) {
            res.status(500).json({ message : err })
        }
    },

    // POST create new user
    createNewUser : async (req, res) => {
        try {
            const newUser = await User.create(req.body)
            res.json({ message: `New user created: ${newUser.username}` })
        } catch (err) {
            res.status(500).json({ message : err })
        }
    },

    // PUT edit user by Id
    editUserById : async (req, res) => {
        try {
            const { id } = req.params
            const editedUser = await User.findByIdAndUpdate(id, req.body)
            res.json({ message: `User: ${editedUser.username} was edited successfully!` })
        } catch (err) {
            res.status(500).json({ message : err })
        }
    },

    // DELETE user by Id
    deleteUserById : async (req, res) => {
        try {
            const { id } = req.params
            const deletedUser = await User.findByIdAndDelete(id)
            res.json({ message: `Successfully deleted ${deletedUser.username}` })
        } catch (err) {
            res.status(500).json({ message : err })
        }
    }

}

module.exports = UserController