const http = require('http')
const config = require('./utils/config')
const express = require('express')
const app = express()
const cors = require('cors')
const blogsRouter = require('./controllers/stocks')
const middleware = require('./utils/middleware')

app.use(middleware.requestLogger)

app.use('/api', blogsRouter)

app.use(middleware.unknownEndpoint)
app.use(middleware.errorHandler)

const server = http.createServer(app)

server.listen(config.PORT, () => {
  console.log(`Server running on port ${config.PORT}`)
}) 