const REQUEST_ENITIES = ["body", "query", "params"]

exports.validate = (schema, options) => {
  return async (req, res, next) => {
    try {
      for (let requestEnities of REQUEST_ENITIES) {
        if (schema[requestEnities]) {
          req[requestEnities] = await schema[requestEnities].validateAsync(
            req[requestEnities],
            options
          )
        }
      }
      next()
    } catch (err) {
      next(err)
    }
  }
}
