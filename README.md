# Redicrate

Ready 2 Go Redis Client that limits repetitive API calls.

## Installation
```shell
npm i redicrate
```

## Usage
```javascript
const crate = require('redicrate')

const key = 'Tsk_cbfff79bfe95478da2e712e373017005'
const query = 'AAPL'
const url = `https://sandbox.iexapis.com/stable/stock/${query}/batch?types=quote&token=${key}`

const data = crate(url, query)
// Do whatever you want with the data
```

## Installing Redis
> If you're going to host your own backend then you'll need to install Redis.
On MacOS, assuming you have Homebrew installed:
```brew install redis```
This will install the redis-server and redis-cli needed to host your own Redis cluster.

For other platforms, see here: https://redis.io/

### Using Redis on Heroku
Head over to : https://elements.heroku.com/addons/heroku-redis

## Notes for Self:
1. Use an API in example which doesn't require an API Key.
2. Show how to pass paramaters through string literals.
3. Tell user to store the key separately first. The query is the key.

Money, Money, Money!

Use XMLHTTPRequests and Node HTTP client.




