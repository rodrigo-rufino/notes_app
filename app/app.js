const notes = require('./notes.js');
const yargs = require('yargs');

// Customize yargs version
yargs.version('1.1.0')

// Customizing commands
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
        notes.addNote(argv.title, argv.body);
    }
});

yargs.command({
    command: 'remove',
    describe: 'Remove a note.',
    builder: {
        title: {
            describe: 'Note title',
            demandOption: true,
            type: 'string'
        }
    },
    handler: function (argv) {
        notes.removeNote(argv.title);
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