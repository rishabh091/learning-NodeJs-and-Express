var fs = require('fs');
/*
    zlib is neccesary as it actually compresses the files into zip.
 */
var zlib = require('zlib');

let inputStream = fs.createReadStream('file.txt');
inputStream
    .pipe(zlib.createGzip())
    .pipe(fs.createWriteStream('file.txt.zip'));

console.log('Program ended');