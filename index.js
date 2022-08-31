const express = require('express')
const mongoose = require('mongoose')
require('dotenv').config()

const port = process.env.PORT

// Init app
const app = express()

// Connect DB
mongoose
    .connect(process.env.MONGO_URI)
    .then(() => console.log('mongoDB is connected'))
    .catch(err => console.log(err))

// Middleware
app.use(express.json())


// Routes
app.use('/user', require('./routes/user'))

app.listen(port, () => console.log(`Server is listening on port ${port}`))