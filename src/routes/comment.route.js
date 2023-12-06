const { Router } = require("express")
const {
  getAllComments,
  getCommentById,
  createComment,
  updateComment,
  deleteComment
} = require("../controllers/comment.controller")

const commentRouter = Router({ mergeParams: true })

commentRouter.get("/", getAllComments)
commentRouter.get("/:commentId", getCommentById)
commentRouter.post("/", createComment)
commentRouter.put("/:commentId", updateComment)
commentRouter.delete("/:commentId", deleteComment)

module.exports = commentRouter
