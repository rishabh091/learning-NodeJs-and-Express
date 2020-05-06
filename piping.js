var fs = require('fs');

let inputStream = fs.createReadStream('file.txt');
let outputStream = fs.createWriteStream('output.txt');

inputStream.pipe(outputStream);