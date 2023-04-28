/////////////////////////////////////////////////////////////
//  Test for Azure
/////////////////////////////////////////////////////////////
const http = require('http');
/*
var msg=`<html>
<head>
<style>
body {  width:800px;
        background-color:pink;
        margin : auto;
}
</style>
</head>
<body>
<h1>SAYA</h1>`;
*/
const server = http.createServer((request, response) => { 
  response.writeHead(200, {"Content-Type": "text/html"});
        
var msg=`<html>
<head>
<style>
body {  width:800;
        background-color:pink;
        margin : auto;
}
</style>
</head>
<body>
<h1>SAYA</h1>`
var sz;
let url = "http://ip.jsontest.com/";
const fetchPromise = fetch(url);
fetchPromise
   .then((response) => response.text())
   .then((data) =>{
       
   });



  msg += " URI : " + request.url; 
  msg += "</body></html>"
  response.end(msg);});
const port = process.env.PORT || 1337;
server.listen(port);
console.log("Server running at http://localhost:%d", port);
