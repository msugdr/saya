/////////////////////////////////////////////////////////////
//  Test for Azure
/////////////////////////////////////////////////////////////
const http = require('http');
const fs = require('fs');
const server = http.createServer((request, response) => { 
        response.writeHead(200, {"Content-Type": "text/html"});        
        msg = "<html><body>I live you</body></html>";
        response.end(msg);});
const port = process.env.PORT || 1337;
server.listen(port);
//console.log("Server running at http://localhost:%d", port);
