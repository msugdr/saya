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
        if (ext === "html"){
            fn="index.html";
            fn = filename;
            response.writeHead(200, {"Content-Type": "text/html"});      
            fs.readFile(fn,'utf8', function(err, data) {
                html=data;
                msg = `EDIT-5.1a:method = ${request.method}, filename = ${filename}, ext = ${ext}`;
                response.end(msg + html);
            
            });
        // msg = `EDIT-4.1a:method = ${request.method}, filename = ${filename}, ext = ${ext}`;
        //  response.end(msg + html);
        } else {
            fn="index.html";
            response.writeHead(200, {"Content-Type": "text/html"});      
            fs.readFile(fn,'utf8', function(err, data) {html=data});
            msg = `EDIT-5.1b:method = ${request.method}, filename = ${filename}, ext = ${ext}`;
            response.end(msg);
        }
}
});
const port = process.env.PORT || 1337;
server.listen(port);
// EDIT-4.1  response.end(msg + html); -> response.end(msg);
// EDIT-5  del fs.readFile(fn,'utf8', function(err, data) {html=data});
// EDIT-5.1