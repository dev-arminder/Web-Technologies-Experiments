const EventEmitter = require("events");
const eventEmitter = new EventEmitter();

eventEmitter.on("start", () => {
  console.log("Got Caught");
});

console.log("Timer Start");
setTimeout(() => {
  console.log("Start Event Emitted");
  eventEmitter.emit("start");
}, 5000);
