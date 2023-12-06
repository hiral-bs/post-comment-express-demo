const createError = require("http-errors")
const Posts = require("../models/post.model")
const Users = require("../models/user.model")

exports.getAllPosts = async (req, res, next) => {
  try {
    const { userId } = req.params
    const posts = await Posts.find({ userId }).lean();
    return res.json(posts);
  } catch (err) {
    next(err)
  }
}

exports.getPostById = async (req, res, next) => {
  try {
    const { userId, postId } = req.params

    const post = await Posts.findOne({ userId: userId, _id: postId }).lean();

    if (!post) {
      throw createError(404, "Post does not found")
    }

    return res.json(post)
  } catch (err) {
    next(err)
  }
}

exports.createPost = async (req, res, next) => {
  try {
    const payload = req.body
    const { userId } = req.params

    const userExist = await Users.findById(userId)

    if (!userExist) {
      throw createError(404, "User does not exist")
    }

    const post = await Posts.create({
      ...payload,
      userId
    })

    return res.json(post.toObject());
  } catch (err) {
    next(err)
  }
}

exports.updatePost = async (req, res, next) => {
  try {
    const payload = req.body
    const { userId, postId } = req.params

    const postToUpdate = await Posts.findOneAndUpdate(
      { userId , _id: postId },
      { $set: payload },
      { new: true }
    ).lean();

    if (!postToUpdate) {
      throw createError(404, "Post does not found")
    }
    return res.json(postToUpdate);
  } catch (err) {
    next(err)
  }
}

exports.deletePost = async (req, res, next) => {
  try {
    const { userId, postId } = req.params

    const postToDelete = await Posts.findOneAndDelete({ userId, _id: postId }).lean();

    if (!postToDelete) {
      throw createError(404, "Post does not exist")
    }

    return res.send("Post deleted successfully.");
  } catch (err) {
    next(err)
  }
}
