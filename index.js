/////////////////////////////////////////////////////////////
//  Test for Azure
/////////////////////////////////////////////////////////////
const http = require('http');
var msg="";
var msg1=`<html>
<head>
<style>
body {  width:800;
        background-color:pink;
        margin : auto;
}
</style>
</head>
<body>
<h1>SAYA</h1>`;
const server = http.createServer((request, response) => { 
  response.writeHead(200, {"Content-Type": "text/html"});
  msg += " URI : " + request.url; 
  msg += "</body></html>"
  response.end(msg);});
const port = process.env.PORT || 1337;
server.listen(port);
console.log("Server running at http://localhost:%d", port);
