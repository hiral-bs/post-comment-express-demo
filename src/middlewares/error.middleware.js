const createError = require("http-errors")

const errorHandler = (err, req, res, next) => {
  let message
  let status

  if (err.name === "ValidationError") {
    const {
      details: [{ message: errorMessage }]
    } = err
    message = errorMessage
  }
  message = err.message || "something went wrong"
  status = err.status || 500
  res.status(status).send(message)
}

const notFoundHandler = (req, res, next) => {
  return next(createError(404, "Reasource not Found"))
}

module.exports = { errorHandler, notFoundHandler }