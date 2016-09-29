var events = require("events");
var emitter = new events.EventEmitter();

var userName = "userName";
var pass = "password";

emitter.on("myEvent",function(uid,passwd){

	console.log(uid, passwd);
});

emitter.emit("myEvent",userName,pass);
