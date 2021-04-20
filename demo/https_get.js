const https = require('https')

const fs = require('fs')
const path = require('path')

const options = {
  key: fs.readFileSync(path.join(__dirname, '../cert/server.key'), 'utf8'),
  cert: fs.readFileSync(path.join(__dirname, '../cert/server.crt'), 'utf8')
}

https.createServer(options, (req, res) => {
  res.writeHead(200)
  res.end('hello world\n')
}).listen(3000)

console.log('Server running at https://127.0.0.1:3000')