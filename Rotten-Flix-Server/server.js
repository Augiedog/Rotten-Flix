require('dotenv').config()
const express = require('express')
const mongoose = require('mongoose')
const bodyparser = require('body-parser')
const cors = require('cors')
const path = require('path')

const app = express()

// -- Middleware -- //
app.use(
    bodyparser.json({ limit: "30mb", extended: true }),
    bodyparser.urlencoded({ limit: "30mb", extended: true }),
    cors()
)

// serve static frontend in production mode
if (process.env.NODE_ENV === "production") {
    app.use(express.static(path.join(__dirname, 'public', 'build')));
}

// Root
app.get('/', (req, res) => {
    res.status(200).json({
        message: 'Rotten-Flix-Server'
    })
})

// Routes
app.use('/auth', require('./routes/auth'))
app.use('/users', require('./routes/user'))
app.use('/reviews', require('./routes/review'))
app.use('/ratings', require('./routes/rating'))
app.use('/movies', require('./routes/movie'))

// Database Connection
mongoose.connect(process.env.CONNECTION_URI, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => console.log('MongoDB connected'))
    .catch((err) => console.log(err.message))

// LISTEN--remove listen for Connection in production //
const PORT = process.env.PORT
app.listen(PORT, () => {
    console.log('Rotten Flix Server running on port:', PORT);
})