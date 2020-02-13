//const config = require('./utils/config')
const express = require('express')
const app = express()
const cors = require('cors')
const blogsRouter = require('./controllers/stocks')
const middleware = require('./utils/middleware')

app.use(middleware.requestLogger)

// EDIT THIS ADDRESS and uncomment dotenv config above
app.use('/api', blogsRouter)

app.use(middleware.unknownEndpoint)
app.use(middleware.errorHandler)

module.exports = app
