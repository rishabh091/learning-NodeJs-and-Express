var fs = require('fs');

let buffer = new Buffer(256);
buffer.write(fs.readFileSync('file.txt').toString());

console.log(buffer.toString());