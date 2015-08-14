const http = require('http')
const supertest = require('supertest')
const assert = require('assert')
const forward = require('..')

suite('forward', function () {
  test('simple forward', function (done) {
    var target = 'http://localhost:8899'
    createServer(8898, 500, proxy)
    createServer(8899, 200)

    supertest('http://localhost:8898')
      .get('/')
      .end(function (err, res) {
        assert.equal(err, undefined)
        assert.equal(res.statusCode, 200)
        done()
      })

    function proxy(req, res) {
      req.forward = { target: target }
      forward(req, res, function (err, res) { 
        assert.equal(err, undefined)
        assert.equal(res.statusCode, 200) 
      })
    }
  })
})

function createServer(port, status, fn) {
  var server = http.createServer(function (req, res) {
    if (fn) return fn(req, res)
    res.statusCode = status
    res.end()
    server.close()
  })
  server.listen(port)
}
