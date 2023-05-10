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
    value=request.url;
    fs.appendFile('doc.txt', value + "\n" , function(err) {});
    if (request.method === 'GET'){
        [dummy,filename]=request.url.split("/");
        [file,ext]=filename.split(".");
        response.writeHead(200, {"Content-Type": "text/text"}); 
//        filenameX="index.html";
        filenameX="doc.txt";
        if (ext == 'html') {
            filenameX = filename;
        } else {        
             fs.readFile(filenameX,'utf8', function(err, data) {html=data});
        //html=fs.readFileSync(filename,'utf8');
            html += `filename=${filename} filenameX=${filenameX}`;
            response.end(html);
        }
}
});
const port = process.env.PORT || 1337;

server.listen(port);
console.log("Server running at http://localhost:%d", port);
