const joi = require("joi")

const authSchema = joi.object({
     username: joi.string().min(5).max(20).required(),
     // email: joi.string().email().min(5).max(30).lowercase().required(),
     password: joi.string().min(6).max(30).required(),
     phone: joi.number().required(),
     // dob: joi.date().required(),
     location: joi.string().required().min(5)
})

const loginSchema = joi.object({
     email: joi.string().email().min(5).max(30).lowercase().required(),
     password: joi.string().min(6).max(30).required(),
})

module.exports = {
     authSchema, loginSchema
}