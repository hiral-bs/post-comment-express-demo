require("dotenv").config()
const http = require("http")
const app = require("./src/app")
const { connectDB } = require('./src/utils/database.utils')

const port = +process.env.PORT

const server = http.createServer(app)

connectDB().then(async () => {
  server.listen(port, () => {
    console.log( typeof port)
    console.log(`server is running at:${port}`)
  })
})
