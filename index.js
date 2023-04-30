/////////////////////////////////////////////////////////////
//  Test for Azure
/////////////////////////////////////////////////////////////
const http = require('http');
var fs = require('fs');
var htmlStyle=`
<style>
body {  width:800px;
        background-color:pink;
        margin : auto;
}
main {
        width:600px;
        height:600px;
        background-color:black;
        color:white;
        margin : auto;
        padding : 10px;
]
</style>
`
var htmlForm = `
<div>
<form method="get" action="https://chodoin-saya.azurewebsites.net/">
<!-- <form method="get" action="http://localhost:1337/"> -->
<input type="text" name="query">
<input type="submit" value="SUBMIT">
</form>
</div>
`
var sz;
//var doc=[];
//fs.readFile('doc.txt','utf8', function(err, data) {sz=data});

const server = http.createServer((request, response) => { 

        fs.readFile('doc.txt','utf8', function(err, data) {sz=data});
        response.writeHead(200, {"Content-Type": "text/html"});        
        var msg="<html>\n<head>\n<meta charset='utf8'>\n" + htmlStyle + "</head>";
        msg += "<body><main>";
//        msg += "<h1>SAYA's HomePage!</h1>";
//        req=request.url.replace("\l","");
//        msg += "<div>request.url : " + req + "</div>\n"; 
//        msg += "<div>typeof request.url : " + (typeof req) + "</div>\n"; 
//        msg += "<div>request.url.length : " + req.length + "</div>\n"; 
//        [key,value] = req.split("=");
//        value=decodeURIComponent(value);
//        if (value !=="undefined") {
//                fs.appendFile('doc.txt', value + "\n" , function(err) {});
//        }
//        msg += "<div>QUERY : " + value + "</div>\n"; 
        msg += "<pre>sz = " + sz + "</pre>\n";
  

//        msg += htmlForm;
        msg += "</main></body></html>"
        response.end(msg);});
const port = process.env.PORT || 1337;
server.listen(port);
console.log("Server running at http://localhost:%d", port);
