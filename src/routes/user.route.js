const { Router } = require("express")
const {
  getAllusers,
  getUserById,
  createUser,
  updateUser,
  deleteUser
} = require("../controllers/user.controller")
const { validate } = require("../middlewares/validate.middleware")
const {
  createUserValidation,
  updateUserValidation,
  paramsValidation
} = require("../validations/user.validation")

const userRouter = Router()

userRouter.get("/", getAllusers)
userRouter.get("/:userId", validate(paramsValidation), getUserById)
userRouter.post("/", validate(createUserValidation), createUser)
userRouter.put("/:userId", validate(updateUserValidation), updateUser)
userRouter.delete("/:userId", validate(paramsValidation), deleteUser)

module.exports = userRouter