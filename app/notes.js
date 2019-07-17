const fs = require('fs');
const chalk = require('chalk');


const getNotes = function getNotes(){
    return 'Your notes...'
}


const addNote = function (title, body) {
    const notes = loadNotes();
    const duplicatedNotes = notes.filter(function (note) {
        return note.title === title;
    });

    if (duplicatedNotes.length === 0){
        notes.push({
            title: title,
            body: body
        })
        saveNotes(notes);
        console.log(chalk.green('New note added.'));
    } else {
        console.log(chalk.red('Note title taken!'));
    }
}


const removeNote = function (title) {
    const notes = loadNotes();
    const newNotes = [];
    notes.filter(function (note) {
        if (note.title != title){
            newNotes.push(note);
        } else if (note.title === title) {
            console.log(chalk.green('Note removed!'));
        }
    })

    if (notes.length === newNotes.length) console.log(chalk.red('No note found.'));

    saveNotes(newNotes);
}


const saveNotes = function (notes) {
    const notesJSON = JSON.stringify(notes);
    fs.writeFileSync('notes.json', notesJSON);
}


const loadNotes = function () {
    try {
        const dataBuffer =  fs.readFileSync('notes.json');
        const dataJSON = dataBuffer.toString();
        return JSON.parse(dataJSON);
    } catch (error) {
        return [];
    }
}

module.exports = {
    getNotes: getNotes,
    addNote: addNote,
    removeNote: removeNote
}