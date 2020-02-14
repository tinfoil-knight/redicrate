require('dotenv').config()

let PORT = process.env.PORT
let TOKEN = process.env.API_TOKEN
let REDIS_PORT = process.env.REDIS_PORT

module.exports = {
  PORT,
  TOKEN,
  REDIS_PORT
}