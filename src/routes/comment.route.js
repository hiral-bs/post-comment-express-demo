const { Router } = require("express")
const {
  getAllComments,
  getCommentById,
  createComment,
  updateComment,
  deleteComment
} = require("../controllers/comment.controller")
const { validate } = require('../middlewares/validate.middleware')
const { createCommentValidation, paramsValidation } = require('../validations/comment.validation')
 
const commentRouter = Router({ mergeParams: true })

// const data = Array.from(paramsValidation.params._ids._byKey.keys())

commentRouter.get("/", getAllComments)
commentRouter.get("/:commentId",validate(paramsValidation), getCommentById)
commentRouter.post("/",validate(createCommentValidation), createComment)
// commentRouter.put("/:commentId", updateComment)
commentRouter.delete("/:commentId",validate(paramsValidation), deleteComment)

module.exports = commentRouter
