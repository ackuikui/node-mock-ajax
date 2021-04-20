var http = require("http");

http.createServer((request, response) => {
    request.on("data", function (data) {
    });
    request.on('end', function () {
        response.end('hello');
    });

}).listen(8081);

console.log('Server running at http://127.0.0.1:8081/');