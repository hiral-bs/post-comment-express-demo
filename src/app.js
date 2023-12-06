const express = require("express")
const logger = require("morgan")
const indexRouter = require("./routes/index.route")
const {
  errorHandler,
  notFoundHandler
} = require("../src/middlewares/error.middleware")

const app = express()

//Middleware stack
app.use(logger("dev"))
app.use(express.json())
app.use(express.urlencoded({ extended: true }))

//Enable routing
app.use(indexRouter)

//Error handler
app.use(notFoundHandler)
app.use(errorHandler)

module.exports = app
