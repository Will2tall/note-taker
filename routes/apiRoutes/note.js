const router = require('express').Router();
const { notes } = require('../../db/notes.json')
const { createNote, delNote, getNotes } = require('../../lib/notes')

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
    
    const dNote = delNote(req.params.id, notes);

    res.json(dNote);
})


module.exports = router;