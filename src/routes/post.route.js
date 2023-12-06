const { Router } = require("express")
const {
  getAllPosts,
  getPostById,
  createPost,
  updatePost,
  deletePost
} = require("../controllers/post.controller")

const postRouter = Router({ mergeParams: true })

postRouter.get("/", getAllPosts)
postRouter.get("/:postId", getPostById)
postRouter.post("/", createPost)
postRouter.put("/:postId", updatePost)
postRouter.delete("/:postId", deletePost)

module.exports = postRouter
