const mongoose = require('mongoose')

const Schema = mongoose.Schema

const userSchema = new Schema({
    name: {
        type: String
    },
    avatar: {
        type: String
    },
    cloudinary_id: {
        type: String
    }
})

module.exports = mongoose.model('User', userSchema)