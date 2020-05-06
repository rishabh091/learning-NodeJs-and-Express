var fs = require('fs');

var data = fs.readFileSync('file.txt');
console.log(data.toString());

//Synchronous reading of file
console.log("Program ended");