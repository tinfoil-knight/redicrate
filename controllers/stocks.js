const config = require('../utils/config')
const stocksRouter = require('express').Router()
const crate = require('./redic.js')

stocksRouter.get('/:ticker', async (request, response, next) => {
    const query = request.params.ticker
    url = `https://sandbox.iexapis.com/stable/stock/${query}/batch?types=quote&token=${config.TOKEN}`

    try {
        data = await crate(url, query)
        response.send(data)
    }
    catch (exception) {
        next(exception)
    }
    

})

module.exports = stocksRouter