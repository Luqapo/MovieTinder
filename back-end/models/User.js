const mongoose = require("mongoose");

const UserSchema = mongoose.Schema({
    login: String,
    password: String,
    email: String
});

module.exports = mongoose.model('User', UserSchema, 'User');