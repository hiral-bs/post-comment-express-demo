const mongoose = require("mongoose")
const { Schema, model } = mongoose

// Schema creation
const postSchema = new Schema({
  title: String,
  body: String,
  likes: Number,
  userId: { type: mongoose.Schema.Types.ObjectId, ref: "User" },
})

const postModel = model("Post", postSchema, "posts")

module.exports = postModel
