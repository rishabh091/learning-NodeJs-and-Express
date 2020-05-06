var express = require('express');
var app = express();
var fs = require('fs');
//need multer for file upload
var multer = require('multer');

var upload = multer({
    dest: '/uploads/'
});

app.post('/file_upload', upload.single('file-to-upload'), (req, res) => {
    let file = req.file.destination.slice(1, req.file.destination.length) + req.file.originalname;
    console.log(file);

    fs.rename(req.file.path, file, (err) => {
        if (err) {
            console.log(err);
            res.send(500);
        } else {
            let response = {
                message: 'File uploaded succesfully',
                filename: req.file.originalname
            }

            res.send(JSON.stringify(response));
        }
    });
});

var server = app.listen(8080, () => {
    console.log('Server started on port : ' + server.address().port);
});