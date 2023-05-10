/////////////////////////////////////////////////////////////
//  Test for Azure
/////////////////////////////////////////////////////////////
const http = require('http');
const fs = require('fs');
var html;
var dummy;
var filename="index.html";
const server = http.createServer((request, response) => { 
    if (request.method === 'GET'){
        [dummy,filename]=request.url.split("/");
        [file,ext]=filename.split(".");
        response.writeHead(200, {"Content-Type": "text/html"});
        html=fs.readFileSync(filename,'utf8');
        msg = `<html><body>I love you, ${request.method}, ${filename}</body></html>`;
        response.end(msg);
    }
});
const port = process.env.PORT || 1337;
server.listen(port);
console.log("Server running at http://localhost:%d", port);
