// Import express package
const express = require('express');

// Require the JSON file and assign it to a variable called `termData`
const PORT = process.env.PORT ||3001;

// Initialize our app variable by setting it to the value of express()
const app = express();

app.listen(PORT, () =>
  console.log(`Example app listening at http://localhost:${PORT}`)
);
