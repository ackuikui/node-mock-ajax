const http = require('http')

const server = http.createServer((req, res) => {
  res.writeHead(200)
  res.end('hello world\n')
})

server.listen(8080)

console.log('Server running at http://127.0.0.1:8080')