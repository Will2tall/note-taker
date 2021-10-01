const fs = require('fs');
const path = require('path');


function createNote(body, noteArray) {
    const note = body;

    noteArray.push(note);
    fs.writeFileSync(path.join(__dirname, '../db/notes.json'),
    JSON.stringify({ notes: noteArray }, null, 2));

    return note;
}

function deleteNote(id, noteArray) {
    const result = noteArray.filter(note => note.id === id)[0];
    return result;
}

module.exports = {createNote, deleteNote};