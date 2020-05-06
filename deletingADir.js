var fs = require('fs');
var event = require('events');

let eventEmitter = new event.EventEmitter();
eventEmitter.on('completion',()=>{
    console.log('Deleting directory');
    fs.rmdirSync('sample');
}); 

fs.readdir('sample',(err,files)=>{
    files.forEach((value,index)=>{

        let path = 'sample/'+value;
        console.log('File : ',value);
        fs.unlinkSync(path);
    });

    eventEmitter.emit('completion');
});