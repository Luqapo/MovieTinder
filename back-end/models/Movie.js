const mongoose = require("mongoose");

const UserSchema = mongoose.Schema({
    title: String,
    imageURL: String,
    summary: String,
    rating: String
});

module.exports = mongoose.model('Movie', UserSchema, 'Movie');