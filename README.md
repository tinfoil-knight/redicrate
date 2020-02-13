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

const data = crate(url)
// Do whatever you want with the data
```

## Notes for Self:
1. Use an API in example which doesn't require an API Key.
2. Show how to pass paramaters through string literals.
3. Tell user to store the key separately first. The query is the key.

Money, Money, Money!


