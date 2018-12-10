const mongoose = require("mongoose");

const MovieStatusSchema = mongoose.Schema({
    title: String,
    user: String,
    status: String
});

module.exports = mongoose.model('MovieStatus', MovieStatusSchema, 'MovieStatus');