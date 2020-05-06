var fs = require('fs');
var zlib = require('zlib');

let stream = fs.createReadStream('file.txt.zip');
stream.pipe(zlib.createGunzip()).pipe(fs.createWriteStream('input.txt'));

console.log('File Decompressed');