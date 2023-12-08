const Comments = require("../models/comment.model")
const createError = require("http-errors")
const Posts = require("../models/post.model")

exports.getAllComments = async (req, res, next) => {
  try {
    const { userId, postId } = req.params

    const comments = await Comments.find({ userId, postId: postId }).lean();
    return res.json(comments)
  } catch (err) {
    next(err)
  }
}

exports.getCommentById = async (req, res, next) => {
  try {
    const { userId, postId, commentId } = req.params

    const comment = await Comments.findOne({ userId, postId, _id: commentId }).lean();

    if (!comment) {
      throw createError(404, "comment does not exist")
    }

    return res.json(comment);
  } catch (err) {
    next(err)
  }
}

exports.createComment = async (req, res, next) => {
  try {
    const payload = req.body
    const { userId, postId } = req.params

    const postExist = await Posts.findOne({_id: postId, userId }).lean();

    if (!postExist) {
      throw createError(404, "post does not exist")
    }

    const comment = await Comments.create({ ...payload, userId, postId })
    return res.json(comment.toObject());
  } catch (err) {
    next(err)
  }
}

// exports.updateComment = async (req, res, next) => {
//   try {
//     const payload = req.body
//     const { userId, postId, commentId } = req.params

//     const commentToUpdate = await Comments.findOneAndUpdate(
//       { userId, postId, _id: commentId },
//       { $set: payload },
//       { new: true }
//     ).lean();

//     if (!commentToUpdate) {
//       throw createError(404, "comment does not exist")
//     }

//     return res.json(commentToUpdate)
//   } catch (err) {
//     next(err)
//   }
// }

exports.deleteComment = async (req, res, next) => {
  try {
    const { userId, postId, commentId } = req.params

    const commentToDelete = await Comments.findOneAndDelete({ userId, postId, _id: commentId }).lean();

    if (!commentToDelete) {
      throw createError(404, "comment does not exist")
    }

    return res.send('Comment deleted successfully.')
  } catch (err) {
    next(err)
  }
}
