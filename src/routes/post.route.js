const { Router } = require("express")
const {
  getAllPosts,
  getPostById,
  createPost,
  updatePost,
  deletePost
} = require("../controllers/post.controller")
const { validate } = require("../middlewares/validate.middleware")
const {
  createPostValidation,
  updatePostValidation,
  paramsValidation
} = require("../validations/post.validation")

const postRouter = Router({ mergeParams: true })

postRouter.get("/", getAllPosts)
postRouter.get("/:postId", validate(paramsValidation), getPostById)
postRouter.post("/", validate(createPostValidation), createPost)
postRouter.put("/:postId", validate(updatePostValidation), updatePost)
postRouter.delete("/:postId", validate(paramsValidation), deletePost)

module.exports = postRouter
