const http = require('http');
const os = require('os');

console.log("Learning Kubernetes server starting...");

var handler = function(request, response) {
 ┬áconsole.log("Received request from " + request.connection.remoteAddress);
 ┬áresponse.writeHead(200);
 ┬áresponse.end("You've hit " + os.hostname() + "\n");
};

var www = http.createServer(handler);
www.listen(8080);
