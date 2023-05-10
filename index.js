/////////////////////////////////////////////////////////////
//  Test for Azure
/////////////////////////////////////////////////////////////
        //html=fs.readFileSync(filename,'utf8');
const http = require('http');
const fs = require('fs');
var html;
var dummy;
var filename;
var msg;

const server = http.createServer((request, response) => { 
//    value=request.url;
//    fs.appendFile('doc.txt', value + "\n" , function(err) {});
    if (request.method === 'GET'){
        [dummy,filename]=request.url.split("/");
        [file,ext]=filename.split(".");
        response.writeHead(200, {"Content-Type": "text/text"}); 
        if (ext == 'html') {
                value="  HTML:" + request.url;
                fs.appendFile('doc.txt', value + "\n" , function(err) {});
            filenameX = filename;
            fs.readFile(filenameX,'utf8', function(err, data) {html=data});
            html += `filename=${filename} filenameX=${filenameX}`;
            response.end(html);
        } else {
                value="noHTML:" + request.url;
                fs.appendFile('doc.txt', value + "\n" , function(err) {});
            filenameX="doc.txt";
            fs.readFile(filenameX,'utf8', function(err, data) {html=data});
            html += `filename=${filename} filenameX=${filenameX}`;
//            response.end(html);
        }
}
});
const port = process.env.PORT || 1337;

server.listen(port);
console.log("Server running at http://localhost:%d", port);
