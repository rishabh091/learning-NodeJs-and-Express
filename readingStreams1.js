var fs = require('fs');

let stream = fs.createReadStream('file.txt');
stream.setEncoding('UTF8');

let data = '';

stream.on('data',(chunk)=>{
    data+=chunk;
    console.log("Reading data");
});

stream.on('error',(e)=>{
    console.log("Got and error : "+e);
});

stream.on('end',()=>{
    console.log("Stream ended");
    console.log("Data is : "+data);
});