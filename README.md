# Redicrate

Ready 2 Go Redis client for small NodeJS applications that limits repetitive API calls.

## Who should use this package?

If you don't use Redis or have never used Redis in the past then this package offers abstractions for beginner-use for the specific purpose of reducing API calls. It has relevant instructions for setting up a Redis server but you can abstract away from that using cloud platforms as services.

## Installation & Usage

### Installation

Install using NPM.
```bash
npm i redicrate
```

### Usage

```javascript
const crate = require('redicrate')
const query = '<Your API Query goes here>'
const url = '<The Complete URL of the Resource you are fetching>'

async function doSomething(){
    // Let the magic happen!
    const data = await crate(url, query)
    // The data is fetched in JSON format. Do whatever you want in function scope.
}
```
> Using `async/await` is necessary. You'll get a pending Promise instead of the data if you don't use that syntax.

> The query needs to be passed separately because it acts as a key to access value from the key-value store.

### See an Example

I am using the <a href="https://ghibliapi.herokuapp.com/">Studio Ghibli API</a>. The controller module defined below will respond with the film details when provided the id. It won't call the API on repetitive similar requests.

So if 2 users are both searching for the same film, you call the API only once. The next time, cached data is sent back to the user. Using a cache is significantly faster than calling an API.

```javascript controllers/stock.js
const express = require('express')
const app = express()

const crate = require('redicrate')

// Defining the GET Route using Express.
app.get('/:id', async (request, response, next) => {
    const query = request.params.id
    url = `https://ghibliapi.herokuapp.com/films/${query}`

    try {
        data = await crate(url, query)
        response.send(data)
    }
    catch (exception) {
        next(exception)
    }
})
```

### Installing and Running a Redis Server

> If you host your own backend then you'll need to install Redis and run it on a separate server.

On MacOS, assuming you have <a href="https://brew.sh/">Homebrew</a> installed:

```brew install redis```

This will install the redis-server and redis-cli needed to host your own Redis cluster.

For other platforms, see here: <a href="https://redis.io/">redis.io</a>


To start a server, navigate to the folder where you want to store the data dumps and execute this:
```bash
redis-server
```
> By default, the redis-server uses Port: 6379

> You can use the redis-cli for testing or any other purposes when you don't want to use your backend. See the docs here: <a href="https://redis.io/topics/rediscli">using redis-cli</a>



### Using Redis on Heroku

<a href="https://dashboard.heroku.com/">Heroku</a> is a Platform-as-a-Service (PaaS) provider. You can host your backend there. It has add-ons for caching and many other things.

Get started quickly, head over to : <a href="https://elements.heroku.com/addons/heroku-redis">heroku-redis</a> to install the add-on.

After the add-on is configured, just install `redicrate` and you're good to go.

If you're on the NodeJS environment and have never used Heroku or other PaaS providers before, get started <a href="https://devcenter.heroku.com/articles/getting-started-with-nodejs">here</a>.

### Common Error

Something like this:

```bash
[ioredis] Unhandled error event: Error: connect ECONNREFUSED 127.0.0.1:6379
    at TCPConnectWrap.afterConnect [as oncomplete] (net.js:1128:14)
```

This means that you are not running a redis server. Please see the above instructions on how to install and run a redis server.
> Make sure that you're not using the same port for redis and your backend.

### Project Dependencies

<a href="https://github.com/luin/ioredis">ioredis</a> : A robust, performance-focused and full-featured Redis client for Node.js

<a href="https://github.com/mikeal/bent">bent</a> : Functional JS HTTP client (Node.js & Fetch) w/ async await

### Join in!
I'm happy to receive bug reports, fixes, documentation enhancements, and any other improvements. Raise an issue or mail me!

