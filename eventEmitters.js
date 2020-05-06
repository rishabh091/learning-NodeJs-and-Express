//event emitters are used to add functionality when an even is thrown
/**
 * The function that listen to the events are called observers.
 * Node heavily relies on event emitter therefore is fast 
 * 
 * import from events to use event emitter
 */

 //import events
 var event = require('events');

//create event emitter
let eventEmitter = new event.EventEmitter();

//bind the event and data together
eventEmitter.on('connection',()=>{
    console.log("connection successful");
});

//start event || we can say emit event
eventEmitter.emit('connection');