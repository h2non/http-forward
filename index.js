var HttpProxy = require('http-proxy')

module.exports = function httpForward(req, res, next) {
  next = next || function () {}
  
  var proxy = new HttpProxy(req.proxy)
  var resolve = once(resolver)
  
  proxy.web(req, res, req.forward, error)
  proxy.once('proxyRes', function (proxyRes, req, res) {
    success(proxyRes)
  })

  function error(err) {
    resolve(err)
  }

  function success(data) {
    resolve(null, data)
  }

  function resolver(err, data) {
    cleanup(proxy)
    next(err, data)
  }
}

function cleanup(proxy) {
  proxy.removeAllListeners('error')
  proxy.removeAllListeners('proxyRes')
}

function once(fn) {
  var called = false
  return function () {
    return fn.apply(null, arguments)
  }
}
