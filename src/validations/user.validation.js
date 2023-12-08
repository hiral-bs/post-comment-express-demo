const Joi = require("joi")

const objectIdValidation = Joi.string().pattern(/^[0-9a-fA-F]{24}$/).required()

exports.createUserValidation = {
  body: Joi.object({
    name: Joi.string().min(3).max(10).required(),
    email: Joi.string().email().required(),
    city: Joi.string().min(4).max(10).optional(),
    age: Joi.number().positive().optional()
  }).options({ convert: true, stripUnknown: true })
}

exports.updateUserValidation = {
  params: Joi.object({
    userId: objectIdValidation
  }),
  body: Joi.object({
    name: Joi.string().min(3).max(10).optional(),
    email: Joi.string().email().optional(),
    city: Joi.string().min(4).max(10).optional(),
    age: Joi.number().positive().optional()
  })
    .min(1)
    .message("Object must contain at least one field")
    .options({ convert: true, stripUnknown: true })
}

exports.paramsValidation = {
  params: Joi.object({
    userId: objectIdValidation
  })
}
