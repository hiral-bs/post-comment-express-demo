const Joi = require("joi")

const objectIdValidation = Joi.string()
  .pattern(/^[0-9a-fA-F]{24}$/)
  .required()

exports.createPostValidation = {
  body: Joi.object({
    title: Joi.string().min(3).max(30).required(),
    body: Joi.string().min(5).max(100).required(),
    likes: Joi.number().optional(),
    userId: objectIdValidation
  }).options({ convert: true, stripUnknown: true })
}

exports.updatePostValidation = {
  params: Joi.object({
    userId: objectIdValidation,
    postId: objectIdValidation
  }),
  body: Joi.object({
    title: Joi.string().min(3).max(30).optional(),
    body: Joi.string().min(5).max(100).optional(),
    likes: Joi.number().optional(),
    userId: Joi.forbidden()
  })
    .min(1)
    .message("object must contain at least one field")
    .options({ convert: true, stripUnknown: true })
}

exports.paramsValidation = {
  params: Joi.object({
    userId: objectIdValidation,
    postId: objectIdValidation
  })
}
