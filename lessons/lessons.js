const validator = require('validator')
const chalk = require('chalk')
const add = require('./utils.js');
const notes = require('./notes.js');
const fs = require('fs');

// Example with file management
fs.writeFileSync('notes.txt', 'This file was created by node.js.\n');
fs.appendFileSync('notes.txt', 'Appended text.');


// Example for local modules
console.log(add(1, 4));
console.log(notes());


// Example for npm modules
console.log(validator.isEmail('aagmail.coaa'));
console.log(validator.isURL('www.google.com'));


// Challenge using chalk module
console.log(chalk.green.bold('Success!'));

// Global package installation
//  npm i <package_name> -g


// Getting input from users
console.log(process.argv)

const command = process.argv[2];
if (command === 'add'){
    console.log('Adding note!');
} else if (command === 'remove'){
    console.log('Removing note!');
}
