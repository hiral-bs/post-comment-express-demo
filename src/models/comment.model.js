const mongoose = require('mongoose');

const { Schema, model } = mongoose;
const { Types: { ObjectId } } = Schema;

const commentSchema = new Schema({
  title: String,
  reaction: Number,
  userId: {type: ObjectId, ref: 'User'},
  postId: {type: ObjectId, ref: 'Post'}
})

const commentModel = model('Comment', commentSchema, 'comments')

module.exports = commentModel