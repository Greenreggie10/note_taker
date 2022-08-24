const router = require('express').Router();
let notes = require('../db/db.json');
const fs = require('fs');
const path = require('path');
// load uuid for unique IDs
const { v4: uuidv4 } = require('uuid');

// get all notes
router.get('/notes', (req, res) => {
    res.json(notes);
});



// add a note 
router.post('/notes', (req, res) => {
    if (req.body) {
        const newNote = req.body;
        newNote.id = uuidv4();
        notes.push(newNote);
        fs.writeFileSync('db/db.json', JSON.stringify(notes), (err) => {
            if (err) {
                console.error(err);
            } else {
                console.log('added new note to db.json');
                // return new note to client
                res.json(newNote);
            };
        });
        return res.json(notes);
    };
    return res.status(500);
});


// delete a note
router.delete('/notes/:id', (req, res) => {
    const id = req.params.id;

    // notes -> [{}, {}, {}, {}, {}, {}, {}, {},]
    const newNotes = notes.filter((note) => note.id !== id);
    notes = newNotes

    fs.writeFileSync('db/db.json', JSON.stringify(newNotes), (err) => {
        if (err) {
            console.error(err);
        } else {
            console.log('added new note to db.json');
            // return new note to client
            res.json(newNote);
        };
    });
    return res.json({ ok: true });

});

module.exports = router;