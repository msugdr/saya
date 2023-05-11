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
            switch (ext) {
                case "html":
                    fn = filename;
                    response.writeHead(200, {"Content-Type": "text/html"});      
                    fs.readFile(fn,'utf8', function(err, data) {
                        html=data;
                        msg = `EDIT-6.1a:method = ${request.method}, filename = ${filename}, ext = ${ext}`;
                        response.end(msg + html);           
                    });
                    break;
                default:
                //    fn="index.html";
                    response.writeHead(200, {"Content-Type": "text/html"});      
                    msg = `EDIT-6.1b:method = ${request.method}, filename = ${filename}, ext = ${ext}`;
                    response.end(msg);
            }
    }
});
const port = process.env.PORT || 1337;
server.listen(port);
// EDIT-4.1  response.end(msg + html); -> response.end(msg);
// EDIT-5  del fs.readFile(fn,'utf8', function(err, data) {html=data});
// EDIT-5.1 undo 5.1, response is written inside call back function of fs.readFile
// EDIT-5.2 both 5 and 5.1
// EDIT-5.3 complete 5.2
// EDIT-6 change if to switch
// EDIT-6.1 complete 6