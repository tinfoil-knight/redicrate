const config = require('../utils/config')
const stocksRouter = require('express').Router()
const bent = require('bent')
const getJSON = bent('json')

const Redis = require('ioredis')
const redis = new Redis(config.REDIS_PORT)

stocksRouter.get('/:ticker', async (request, response, next) => {
    const ticker = request.params.ticker
    url = `https://sandbox.iexapis.com/stable/stock/${ticker}/batch?types=quote&token=${config.TOKEN}`

    try {
        const cache = await redis.get(ticker)
        if (cache) {
            console.log("Using Redis Cache")
            response.send(cache)
        }
        else {
            console.log("Using API Calls")
            const data = await getJSON(url)
            redis.set(ticker, JSON.stringify(data))
            response.send(data)
        }

    }
    catch (exception) {
        next(exception)
    }

})

module.exports = stocksRouter