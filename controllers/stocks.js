const config = require('../utils/config')
const stocksRouter = require('express').Router()
const bent = require('bent')
const getJSON = bent('json')

stocksRouter.get('/', async (request, response, next) => {
    try {
        url = `https://sandbox.iexapis.com/stable/stock/MSFT/batch?types=quote&token=${config.TOKEN}`
        let data = await getJSON(url)
        console.log(data)
        response.send(data)
    } catch (exception) {
    next(exception)
}

})
//:ticker/batch?types=quote&token=config.TOKEN

module.exports = stocksRouter