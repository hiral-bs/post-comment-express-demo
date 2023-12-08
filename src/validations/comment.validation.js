const Joi = require("joi")

const objectIdValidation = Joi.string()
  .pattern(/^[0-9a-zA-Z]{24}$/)
  .required()

exports.createCommentValidation = {
  body: Joi.object({
    title: Joi.string().min(3).max(10).required(),
    reaction: Joi.number().positive().optional(),
    userId: objectIdValidation,
    postId: objectIdValidation
  }).options({ convert: true, stripUnknown: true })
}

exports.paramsValidation = {
  params: Joi.object({
    userId: objectIdValidation,
    postId: objectIdValidation,
    commentId: objectIdValidation
  })
}
