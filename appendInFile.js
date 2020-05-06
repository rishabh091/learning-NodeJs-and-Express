var fs = require('fs');

let data = new Buffer("Hello World");

fs.open('file.txt','a+',(error,fd)=>{

    fs.write(fd,data,(err,bytes)=>{
        if(err){
            return console.log(err);
        }

        console.log('Data appened : '+bytes);
    });
});