const router = require('express').Router();
const { notes } = require('../../db/notes.json')
const { createNote, deleteNote } = require('../../lib/notes')

router.get('/notes', (req, res) => {
    let results = notes;

    res.json(results);
});

router.post('/notes', (req, res) => {
    req.body.id = notes.length.toString();

    const note = createNote(req.body, notes)
    res.json(note);
    
});

router.delete('/notes/:id', (req, res) => {
    const badnote = deleteNote(req.params.id, notes);

    res.json(badnote);
})

module.exports = router;