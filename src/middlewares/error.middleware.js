const createError = require('http-errors')

const errorHandler = (err, req, res, next) => {
  const { message="Something went wrong", status=500} = err
  res.status(status).send(message)
}

const notFoundHandler = (req, res, next) => {
  return next(createError(404, 'Reasource not Found'))
}

module.exports = { errorHandler, notFoundHandler}