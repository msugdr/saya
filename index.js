/////////////////////////////////////////////////////////////
//  Test for Azure
/////////////////////////////////////////////////////////////
const http = require('http');
const fs = require('fs');
var html;
var dummy;
var filename;
const server = http.createServer((request, response) => { 
        response.writeHead(200, {"Content-Type": "text/html"});        
        msg = "<html><body>I love you, add var</body></html>";
        response.end(msg);});
const port = process.env.PORT || 1337;
server.listen(port);
console.log("Server running at http://localhost:%d", port);
