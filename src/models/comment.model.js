const mongoose = require('mongoose')

const { Schema, model } = mongoose

const commentSchema = new Schema({
  title: String,
  reaction: Number,
  userId: {type: mongoose.Schema.Types.ObjectId, ref: 'User'},
  postId: {type: mongoose.Schema.Types.ObjectId, ref: 'Post'}
})

const commentModel = model('Comment', commentSchema, 'comments')

module.exports = commentModel