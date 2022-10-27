const EventEmitter = require('events').EventEmitter
const channel = new EventEmitter()
channel.on('custom-event', function(data, second) {
  console.log('Welcome' + data + second)
})
channel.emit('custom-event', 'hanbg', 'second')