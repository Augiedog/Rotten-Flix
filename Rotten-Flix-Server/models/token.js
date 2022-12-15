const mongoose = require('mongoose');

const tokenSchema = new mongoose.Schema({
    refreshToken: {
        type: String,
    },
    expiresAt: {
        type: Date,
        default: Date.now,
        index: {
            expires: '30m'
        }
    }
})

module.exports = mongoose.model('Token',tokenSchema);