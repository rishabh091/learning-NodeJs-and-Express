var express = require('express');
var app = express();
var fs = require('fs');
var multer = require('multer');

var upload = multer({
    dest: __dirname+'/multiple/'
})

app.post('/uploadFiles', upload.array('files', 5), (req, res)=>{

    for(let i=0;i<req.files.length;i++){
        let file = req.files[i];
        console.log(file);
        let item = file.destination.slice(0, file.destination.length) + file.originalname;

        fs.rename(file.path, item, (err)=>{
            if(err){
                console.log(err);
                res.send(500);
            }
        });
    }

    res.send('Files uploaded');
});

var server =  app.listen(8080,()=>{
    console.log('Server running at port : '+server.address().port);
});