// run `node index.js` in the terminal

console.log(`Hello Node.js v${process.versions.node}!`);
//const file = require('./file.js');                      // '../' - previous folder
const path = require('path');
const os = require('os');
const fs = require('fs');
const events = require('events');

//
//console.log(file.txt1);
//console.log(file.log1('Kirill'));

// PATH
console.log(path.parse(__filename).base);

// OS
console.log(os.platform());
console.log(os.hostname());
console.log(os.release());
console.log(os.userInfo());

// FS - continue from here (48m)
console.log(fs.readdirSync('../')); // sync
fs.readdir('../', function (err, result) {
  // async
  err ? console.log(err) : console.log(result);
});

// EVENTyjgyj
