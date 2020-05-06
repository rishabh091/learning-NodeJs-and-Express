var fs = require('fs');

const data = "Rishabh is a good guy.";

let stream = fs.createWriteStream('file.txt');
stream.write(data,'UTF8');

stream.on('open',()=>{
    console.log("File opened");
});

stream.end();

stream.on('error',(e)=>{
    console.log("Cannot write data, Error : "+e.message());
});

stream.on('finish',()=>{
    console.log("Data Written");
});