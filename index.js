/////////////////////////////////////////////////////////////
//  Test for Azure
/////////////////////////////////////////////////////////////
const http = require('http');
const fs = require('fs');
var html;
var dummy;
var filename;
var msg;
const server = http.createServer((request, response) => { 
    if (request.method === 'GET'){
        [dummy,filename]=request.url.split("/");
        [file,ext]=filename.split(".");
        response.writeHead(200, {"Content-Type": "text/html"});
      
        fs.readFile("index.html",'utf8', function(err, data) {html=data});
        //html=fs.readFileSync(filename,'utf8');
        html += "filename";
        response.end(html);
}
});
const port = process.env.PORT || 1337;
server.listen(port);
console.log("Server running at http://localhost:%d", port);
