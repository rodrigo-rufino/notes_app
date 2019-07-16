const add = require('./utils.js');
const notes = require('./notes.js')
const fs = require('fs');

//fs.writeFileSync('notes.txt', 'This file was created by node.js.\n');
//fs.appendFileSync('notes.txt', 'Appended text.');

console.log(add(1, 4));
console.log(notes());
