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
<<<<<<< HEAD
        response.writeHead(200, {"Content-Type": "text/html"});      
        fs.readFile("index.html",'utf8', function(err, data) {html=data});
        msg = `Edit-1.1: method = ${request.method}, filename = ${filename}`;
        response.end(msg + html);
}
=======
        if (ext === 'html') {
            response.writeHead(200, {"Content-Type": "text/html"}); 
            fn = "index.html";
            fs.readFile(fn,'utf8', function(err, data) {html=data});
            msg = `EDIT-3: method = ${request.method}, filename = ${filename}`;
            response.end(msg + html);
        }
    }
>>>>>>> 8f1455d60364e0e3916fabe4f324ec817146ba30
});
const port = process.env.PORT || 1337;
server.listen(port);
