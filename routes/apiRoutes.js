const router = require('express').Router();
let notes = require('../db/db.json');

// get all notes
router.get('/notes', (req, res) => {
    res.json(notes);
});

// add a note 
router.post('/notes', (req, res) => {
});

// delete a note
router.delete('/notes/:id', (req, res) => {
    const id = req.params.id;
});

module.exports = router;