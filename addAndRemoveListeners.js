var event = require('events');

let eventEmitter = new event.EventEmitter();

let event1 = ()=>{
    console.log("Event 1 is fired");
};
let event2 = ()=>{
    console.log("Event 2 is fired");
};

eventEmitter.on('connection',event1);
eventEmitter.on('connection',event2);

console.log(eventEmitter.listenerCount('connection'));

eventEmitter.emit('connection');

//removing the event emitters
let arr=[event1,event2];
for(let i=0;i<arr.length;i++){
    console.log(eventEmitter.listenerCount('connection'));
    eventEmitter.removeListener('connection',arr[i]);
}