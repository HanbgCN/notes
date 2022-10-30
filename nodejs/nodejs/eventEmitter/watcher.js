const events = require('events')
const util = require('util')
const fs = require('fs')

function Watcher(watchDir, processedDir) {
  this.watchDir = watchDir
  this.processedDir = processedDir
}

util.inherits(Watcher, events.EventEmitter)

const watchDir = './watch'
const processedDir = './done'

Watcher.prototype.watch = function() {
  console.log('run to here')
  const watcher = this
  fs.readdir(this.watchDir, function(err, files) {
    if (err) throw err
    for(const index in files) {
      watcher.emit('process', files[index])
    }
  })
}

Watcher.prototype.start = function() {
  console.log('start here')
  const watcher = this
  fs.watchFile(watchDir, function() {
    watcher.watch()
  })
}

const watcher = new Watcher(watchDir, processedDir)
watcher.on('process', function(file) {
  console.log(file)
  const watchFile = this.watchDir + '/' + file
  const processedFile = this.processedDir + '/' + file.toLowerCase()

  fs.rename(watchFile, processedFile, function(err) {
    if (err) throw err
  })
})

watcher.start()