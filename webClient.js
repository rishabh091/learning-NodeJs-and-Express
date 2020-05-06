var http = require('http');

let link = 'http://localhost:8080/html/MailFormat.html';

var request = http.get(link,(message)=>{
    let data = '';

    message.on('data',(chunk)=>{
        data+=chunk;
    });
    message.on('end',()=>{
        console.log('Message recieved');
        console.log(data);
    });
});

request.end();