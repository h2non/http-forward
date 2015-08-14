# request-forward

Simple proxy forward for incoming HTTP requets. Built for node.js/io.js.

## Installation

```
npm install request-forward
```

## API

```js
const http = require('http')
const forward = require('request-forward')

var server = http.createServer(function (req, res) {
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