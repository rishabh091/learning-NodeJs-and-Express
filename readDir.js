var fs = require('fs');

fs.readdir('sample',(err,files)=>{
    files.forEach((file,index)=>{
        let path = 'sample/'+file;

        fs.readFile(path,(error,data)=>{
            console.log('Data of file '+file+' is : '+data.toString());
        });
    });
});