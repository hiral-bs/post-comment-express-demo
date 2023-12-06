const { Router } = require('express')
const { getAllusers, getUserById, createUser , updateUser, deleteUser } = require('../controllers/user.controller')

const userRouter = Router()

userRouter.get('/', getAllusers)
userRouter.get('/:userId', getUserById)
userRouter.post('/', createUser)
userRouter.put('/:userId', updateUser)
userRouter.delete('/:userId', deleteUser)

module.exports = userRouter