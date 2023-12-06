const { connect, connection, Schema, model} = require('mongoose')
const db_url = process.env.DB_URL

// Database connections
const connectDB = () => {
  connection.on('connected', (stream) => {
    console.log("database connected successfully...")
  })
  return connect(db_url, { })
}


module.exports = { connectDB }