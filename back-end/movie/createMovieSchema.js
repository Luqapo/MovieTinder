const Joi = require('joi');

const createMovieSchema = Joi.object().keys({
    title: Joi.string().required(),
    imageURL: Joi.string().required(),
    summary: Joi.string().required(),
    rating: Joi.string().required()
})

module.exports = createMovieSchema;