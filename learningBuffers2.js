var fs = require('fs');

let buffer1 = new Buffer(fs.readFileSync('file.txt').toString());
let buffer2 = new Buffer("Rishabh wrote this : ");
console.log(new Buffer.concat([buffer2, buffer1]).toString());
console.log(buffer2.toJSON());