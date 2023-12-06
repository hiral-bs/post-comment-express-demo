const mongoose = require("mongoose")
const { Schema, model } = mongoose

// Schema creation
const userSchema = new Schema({
  name: String,
  email: String,
  city: String,
  age: Number
})

const userModel = model("User", userSchema, "users")

module.exports = userModel
