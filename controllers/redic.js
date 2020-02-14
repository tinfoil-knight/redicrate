const Redis = require('ioredis')
const bent = require('bent')
const getJSON = bent('json')

const redis = new Redis()

async function store(url, query) {
    try {
        const cache = await redis.get(query)
        if (cache) {
            console.log("Using Redis Cache")
            return cache
        }
        else {
            console.log("Using API Calls")
            const data = await getJSON(url)
            redis.set(query, JSON.stringify(data))
            return data
        }
    }
    catch (exception) {
        throw exception
    }

}

module.exports = store