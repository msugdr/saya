/////////////////////////////////////////////////////////////
//  Test for Azure
/////////////////////////////////////////////////////////////
const http = require('http');

var htmlStyle=`
<style>
body {  width:800px;
        background-color:pink;
        margin : auto;
}
main {
 width:800px;
        background-color:pink;
        margin : auto;
]
</style>
`
const server = http.createServer((request, response) => { 
  response.writeHead(200, {"Content-Type": "text/html"});        
        var msg="<html><head>" + htmlStyle + "</head>";
        msg += "<body><main><h1>SAYA</h1>";
        msg += " URI : " + request.url; 
        msg += "</main></body></html>"
        response.end(msg);});
const port = process.env.PORT || 1337;
server.listen(port);
console.log("Server running at http://localhost:%d", port);
