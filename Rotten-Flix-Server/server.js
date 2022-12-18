require('dotenv').config()
const express = require('express')
const mongoose = require('mongoose')
const bodyparser = require('body-parser')
const cors = require('cors')
const path = require('path')

const app = express()

// -- Middleware -- //
app.use(
    bodyparser.json( { limit: "30mb", extended: true }),
    bodyparser.urlencoded( { limit: "30mb", extended: true }),
    cors()
)

// serve static frontend in production mode
if (process.env.NODE_ENV === "production") {
    app.use(express.static(path.join(__dirname, 'public', 'build')));
}

// Routes
app.use('/users', require('./routes/user') )
app.use('/reviews', require('./routes/review') )
app.use('/ratings', require('./routes/rating') )
app.use('/movies', require('./routes/movie') )
app.use('/auth', require('./routes/auth') )

// Database Connection & Server Start -- //
mongoose.connect(process.env.CONNECTION_URI, { useNewUrlParser: true, useUnifiedTopology: true })
    .then( () => app.listen(process.env.PORT, () => console.log(`Database Connected : Server running on port: ${process.env.PORT}`)) )
    .catch( (err) => console.log(err.message) )

// Listen for Connection remove in production
// app.listen(process.env.PORT, () => {
//     console.log(`Rotten reviews @  ${process.env.PORT}`)
// })