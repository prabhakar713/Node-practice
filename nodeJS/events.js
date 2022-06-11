var events = require("events");
var eventemitter = new events.EventEmitter();
eventemitter.on("mycustomevent", fun1);
function fun1(arg1, arg2) 
{
  console.log("event filed");
  var sum = arg1 + arg2;
  console.log("sum is: " + sum);
}

console.log("eventlistner added");

setTimeout(fun2, 2000);
function fun2()
 {
  eventemitter.emit("mycustomevent", 10, 20);
}
