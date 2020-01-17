const os = require('os');
const path = require('path');
const EventEmitter = require('events');
const fs = require('fs');
const Logger = require('./logger');
const logger = new Logger();
function sayHello(name) {
  console.log('Hello ' + name);
}

sayHello('Staf');
logger.on('messageLogged', (arg) => {
  console.log('Listener called', arg);
});
logger.log('That is my name!!');
var pathObj = path.parse(__filename);
console.log(pathObj);
var osarch = os.arch();
var osmem = os.totalmem();
var osfmem = os.freemem();
logger.log('The OS Architecture is: ' + osarch);
logger.log('The total memory is: ' + osmem);
logger.log('The free memory is: ' + osfmem);
fs.readdir('./', function(err, files) {
  if (err) console.log('ERROR has Occured!!', err);
  else console.log('The Files Present are:', files);
})
