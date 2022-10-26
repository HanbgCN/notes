// const http = require('http')
// http.createServer(function(req, res) {
//   res.writeHead(200, { 'Content-Type': 'text/plain' })
//   res.end('Hello World\n')
// }).listen(3000)
// console.log('Server running at http://localhost:3000/')

// 写法二
const http = require('http')
const server = http.createServer()
server.on('request', function(req, res) {
  // do things
})
server.listen(3000)
console.log('Server running...')