const users = require("../models/user.model")
const createError = require("http-errors")

exports.getAllusers = async (req, res, next) => {
  try {
    const allUsers = await users.find().lean();
    return res.json(allUsers)
  } catch (error) {
    next(error);
  }
}

exports.getUserById = async (req, res, next) => {
  try {
    const { userId } = req.params
    const user = await users.findById(userId).lean();

    if (!user) {
      throw createError(404, "User not found")
    }

    return res.json(user)
  } catch (err) {
    next(err)
  }
}

exports.createUser = async (req, res, next) => {
  try {
    const payload = req.body

    const existingUser = await users.findOne({ email: payload.email }).lean();
    
    if (existingUser) {
      throw createError(409, "Email already in use")
    }

    const user = (await users.create(payload)).toObject();
    return res.status(201).json(user);
  } catch (err) {
    next(err)
  }
}

exports.updateUser = async (req, res, next) => {
  try {
    const payload = req.body
    const { userId } = req.params

    const userToUpdate = await users.findOneAndUpdate({ _id: userId }, { $set: payload }, {
      new: true
    }).lean();

    if (!userToUpdate) {
      throw createError(404, "User does not found")
    }

    return res.json(userToUpdate)
  } catch (err) {
    next(err)
  }
}

exports.deleteUser = async (req, res, next) => {
  try {
    const { userId } = req.params

    const deletedUser = await users.findOneAndDelete({ _id: userId }).lean();
    
    if (!deletedUser) {
      throw createError(404, "User does not found")
    }

    return res.send("User deleted successfully.");
  } catch (err) {
    next(err)
  }
}
