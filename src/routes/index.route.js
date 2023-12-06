const { Router } = require("express")
const userRouter = require("../routes/user.route")
const postRouter = require("../routes/post.route")
const commentRouter = require("../routes/comment.route")

const indexRouter = Router()

indexRouter.use("/users", userRouter)
indexRouter.use("/users/:userId/posts", postRouter)
indexRouter.use("/users/:userId/posts/:postId/comments", commentRouter)

module.exports = indexRouter
