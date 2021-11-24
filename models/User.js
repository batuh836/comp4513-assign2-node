const mongoose = require('mongoose');

// define a schema that maps to the structure of the data in MongoDB
const userSchema = new mongoose.Schema({
    id: Number,
    details: {
        firstname: String,
        lastName: String,
        city: String,
        country: String
    },
    picture: {
        large: String,
        thumbnail: String
    },
    membership: {
        date_joined: Date,
        last_update: Date,
        likes: Number
    },
    email: String,
    password_bcrypt: String,
    apikey: String,
    favourites: []
});

module.exports = mongoose.model('User', userSchema, 'users');