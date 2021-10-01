const fs = require('fs');
const path = require('path');

function getNotes(){
    
}

function createNote(body, noteArray) {
    const note = body;

    noteArray.push(note);
    fs.writeFileSync(path.join(__dirname, '../db/notes.json'),
    JSON.stringify({ notes: noteArray }, null, 2));

    return note;
}

function delNote(id, noteArray) {
    const result = noteArray.filter(note => note.id !== id);
    console.log(result);
    fs.writeFileSync(path.join(__dirname, '../db/notes.json'),
    JSON.stringify({ notes: result }, null, 2));
    
    return result;
}

module.exports = {createNote, delNote, getNotes};