require('dotenv').config()

let PORT = process.env.PORT
let TOKEN = process.env.API_TOKEN

module.exports = {
  PORT,
  TOKEN
}