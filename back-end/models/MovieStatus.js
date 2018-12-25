const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const MovieStatusSchema = new Schema({
    movieId: { type: Schema.Types.ObjectId, required: true, ref: 'Movie' },
    userId: { type: Schema.Types.ObjectId, required: true, ref: 'User' },
    status: { type: String, required: true}
});

module.exports = mongoose.model('MovieStatus', MovieStatusSchema, 'MovieStatus');