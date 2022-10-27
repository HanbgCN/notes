const net = require('net')

const server = net.createServer(function(socket) {
  socket.on('data', function(data) {
    socket.write(data)
  })
})
server.listen(8888)

// 事件只会触发一次
// const _server = net.createServer(function(socket) {
//   socket.once('data', function(data) {
//     // do things
//   })
// })
// _server.listen(8880)