var fs = require('fs');
fs.readFile('file.txt',(error, data)=>{
    if(error)
        console.log(error);
    else
        console.log(data.toString());
});

//Asynchronous data retrived from file
console.log("Program ended");