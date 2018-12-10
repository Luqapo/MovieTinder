const Joi = require('joi');

const createUserSchema = Joi.object().keys({
    login: Joi.string().min(2).max(30).required(),
    password: Joi.string().min(5).max(30).required(),
    email: Joi.string().email()
})

module.exports = createUserSchema;