# http-forward [![Build Status](https://api.travis-ci.org/h2non/http-forward.svg?branch=master&style=flat)](https://travis-ci.org/h2non/http-forward) [![NPM](https://img.shields.io/npm/v/http-forward.svg)](https://www.npmjs.org/package/http-forward)


Simple proxy forward for incoming HTTP requets. Built for node.js/io.js.

## Installation

```
npm install http-forward
```

## API

```js
const http = require('http')
const forward = require('http-forward')

var server = http.createServer(function (req, res) {
  // Define proxy config params
  req.forward = { target: 'http://new.server.net' }
  forward(req, res)
})

server.listen(3000)
```

### forward(req, res, callback)

- **req** `http.IncomingMessage` - Required
- **res** `http.OutgoingMessage` - Required
- **callback** `function(err, res)` - Optional callback

## License

MIT - Tomas Aparicio
