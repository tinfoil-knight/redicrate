const config = require('../utils/config')
const stocksRouter = require('express').Router()
const bent = require('bent')
const getJSON = bent('json')

const Redis = require('ioredis')
const redis = new Redis(6379)

stocksRouter.get('/:ticker', async (request, response, next) => {
    const ticker = request.params.ticker
    url = `https://sandbox.iexapis.com/stable/stock/${ticker}/batch?types=quote&token=${config.TOKEN}`

    try {
        //data = await getJSON(url)
        //response.send(data)
        //redis.set(ticker, JSON.stringify(data))
        data = await redis.get(ticker)
        response.send(data)
    }
    catch (exception){
        next(exception)
    }
    
})

module.exports = stocksRouter