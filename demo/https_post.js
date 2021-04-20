const https = require('https')

const fs = require('fs')
const path = require('path')

const options = {
  key: fs.readFileSync(path.join(__dirname, '../cert/server.key'), 'utf8'),
  cert: fs.readFileSync(path.join(__dirname, '../cert/server.crt'), 'utf8')
}

https.createServer(options, (request, response) => {
    request.on("data", function (data) {
    });
    request.on('end', function () {
        response.end('hello https');
    });

}).listen(3001);

console.log('Server running at https://127.0.0.1:3001/');