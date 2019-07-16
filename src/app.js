const validator = require('validator')
const chalk = require('chalk')
const notes = require('./notes.js');
const fs = require('fs');
const yargs = require('yargs');

// Customize yargs version
yargs.version('1.1.0')

// CUstomizing commands
yargs.command({
    command: 'add',
    describe: 'Add a new note.',
    builder: {
        title: {
            describe: 'Note title',
            demandOption: true,
            type: 'string'
        }, 
        body: {
            describe: 'Note body',
            demandOption: true,
            type: 'string'
        }
    },
    handler: function (argv) {
        console.log('Title:', argv.title);
        console.log('Body:', argv.body);
    }
});

yargs.command({
    command: 'remove',
    describe: 'Remove a note.',
    handler: function (argv) {
        console.log('Removing a note.');
    }
});

yargs.command({
    command: 'list',
    describe: 'List all notes.',
    handler: function (argv) {
        console.log('List all notes.');
    }
});

yargs.command({
    command: 'read',
    describe: 'Read a note.',
    handler: function (argv) {
        console.log('Read a note.');
    }
});

yargs.parse()