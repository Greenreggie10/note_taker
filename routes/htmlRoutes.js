const router = require('express').Router();
const path = require('path');

router.get('/notes',(req, res) => {
    // `res.sendFile` is Express' way of sending a file
    // `__dirname` is a variable that always returns the directory that your server is running in
    res.sendFile(path.join(__dirname, '../public/notes.html'));
});

router.get('/', (req, res) => {
    // `res.sendFile` is Express' way of sending a file
    // `__dirname` is a variable that always returns the directory that your server is running in
    res.sendFile(path.join(__dirname, '../public/index.html'));
});
  

module.exports = router;