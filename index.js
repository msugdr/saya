/////////////////////////////////////////////////////////////
//  Test for Azure
/////////////////////////////////////////////////////////////
const http = require('http');
const fs = require('fs');
var html;
var dummy;
var filename;
const server = http.createServer((request, response) => { 
    if (request.method === 'GET'){
        [dummy,filename]=request.url.split("/");
        [file,ext]=filename.split(".");
        fn="index.html";
        response.writeHead(200, {"Content-Type": "text/html"});      
        fs.readFile(fn,'utf8', function(err, data) {html=data});
        msg = `EDIT-1:${request.method}, ${filename}`;
        response.end(msg + html);
}
});
const port = process.env.PORT || 1337;
server.listen(port);
