const http = require('http')
const fs = require('fs')

// 回调嵌套特别长特别多
// http.createServer(function(req, res) {
//   if (req.url === '/') {
//     fs.readFile('./title.json', function(err, data) {
//       if (err) {
//         console.error(err)
//         res.end('Server Error')
//       } else {
//         const titles = JSON.parse(data.toString())
//         fs.readFile('./template.html', function(err, data) {
//           if (err) {
//             console.error(err)
//             res.end('Server Error')
//           } else {
//             const template = data.toString()
//             console.log(template)
//             const html = template.replace('%', titles.join('</li><li>'))
//             console.log(html)
//             res.writeHead(200, { 'Content-Type': 'text/html'})
//             res.end(html)
//           }
//         })
//       }
//     })
//   }
// }).listen(8000, '127.0.0.1')

// 创建中间件以减少嵌套
// const server = http.createServer(function(req, res) {
//   getTitles(res)
// }).listen(8000, '127.0.0.1')
// function getTitles(res) {
//   fs.readFile('./title.json', function(err, data) {
//     if (err) {
//       hadError(err, res)
//     } else {
//       getTemplate(JSON.parse(data.toString()), res)
//     }
//   })
// }
// function getTemplate(titles, res) {
//   fs.readFile('./template.html', function(err, data) {
//     if (err) {
//       hadError(err, res)
//     } else {
//       formatHtml(titles, data.toString(), res)
//     }
//   })
// }
// function formatHtml(titles, template, res) {
//   const html = template.replace('%', titles.join('</li><li>'))
//   res.writeHead(200, { 'Content-Type': 'text/html'})
//   res.end(html)
// }
// function hadError(err, res) {
//   console.error(err)
//   res.end('Server Error')
// }

// 通过尽早返回减少嵌套
const server = http.createServer(function(req, res) {
  getTitles(res)
}).listen(8000, '127.0.0.1')
function getTitles(res) {
  fs.readFile('./title.json', function(err, data) {
    if (err) hadError(err, res)
    getTemplate(JSON.parse(data.toString()), res)
  })
}
function getTemplate(titles, res) {
  fs.readFile('./template.html', function(err, data) {
    if (err) hadError(err, res)
    formatHtml(titles, data.toString(), res)
  })
}
function formatHtml(titles, template, res) {
  const html = template.replace('%', titles.join('</li><li>'))
  res.writeHead(200, { 'Content-Type': 'text/html'})
  res.end(html)
}
function hadError(err, res) {
  console.error(err)
  res.end('Server Error')
}