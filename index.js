/////////////////////////////////////////////////////////////
//  Test for Azure
/////////////////////////////////////////////////////////////
const http = require('http');
const fs = require('fs');
const requestx = require('request');

const TOKEN = "0maOvAs8dtXu8h7eEPMXGk2VqMcj6LEztSP9C7kudOg"
const message = `これはテストですよ`;

sendRequest(message);


function sendRequest (message) {
  const options = {
    uri: 'https://notify-api.line.me/api/notify',
    headers: {
      // TOKENを誤ってgitに上げてしまわないように、環境変数から取得するようにした
      'Authorization': `Bearer ${TOKEN}`
    },
    form: {
      'message' : message
    }
  };

  requestx.post(options, (error, response, body) => {
    if (error) {
//      console.error(error);
      return;
    }

//    console.log(body);
  });
}

var html;
var dummy;
var filename;
const server = http.createServer((request, response) => { 
    if (request.method === 'GET'){
        [dummy,filename]=request.url.split("/");
        [file,ext]=filename.split(".");
        switch (ext) {
            case "html":
            case "css":
                response.writeHead(200, {"Content-Type": `text/${ext}`});
                html=fs.readFileSync(filename,'utf8');
                response.end(html);
                break;
            case "jpg":
            case "png":
            case "gif":                
                response.writeHead(200, {"Content-Type": `img/${ext}`});
                var image = fs.readFileSync(filename, "binary");
                response.end(image,"binary");
                break;
            default:
                response.writeHead(200, {"Content-Type": "text/html"});      
                msg = `EDIT-7.1b:method = ${request.method}, filename = ${filename}, ext = ${ext}`;
                response.end(msg);
        }
     } else if (request.method === 'POST'){
        var data = '';
    
        //POSTデータを受けとる
        request.on('data', function(chunk) {data += chunk})
           .on('end', function() {
            response.writeHead(200, {"Content-Type": "text/html"});
          datum=data.split("=");
          dat=datum[1];
          dat=data.replace(/\+/g," ")
          dat =  decodeURIComponent(dat);
          response.end(dat);
          sendRequest(dat);
            })
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
// EDIT-6.21 complete 6
// EDIT-7 add case jpg
// EDIT-7.1 add jpg file
// EDIT-7.2 readFileSync
// EDIT-7.3 add png
