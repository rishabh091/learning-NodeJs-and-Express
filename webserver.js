var http = require('http');
var fs = require('fs');
var url = require('url');

//creating a server
http.createServer((request, response) => {
    let pathName = url.parse(request.url).pathname;
    let reqFile = pathName.slice(1, pathName.length);

    console.log("Requested file : " + reqFile);

    fs.readFile(reqFile, (err, data)=>{
        if(err){
            response.writeHead(404, {'Content-Type': 'text/html'});
        }
        else{
            response.writeHead(200, {'Content-Type': 'text/html'});
            response.write(data.toString());
        }

        response.end();
    });

}).listen(8080);