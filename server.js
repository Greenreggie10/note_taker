// Import express package
const express = require('express');
const apiRoutes = require("./routes/apiRoutes")
const htmlRoutes = require("./routes/htmlRoutes")

// Require the JSON file and assign it to a variable called `termData`
const PORT = process.env.PORT ||3001;

// Initialize our app variable by setting it to the value of express()
const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static('public'));

//localhost:3001/api/

app.use('/api', apiRoutes);
app.use('/', htmlRoutes);


app.listen(PORT, () =>
  console.log(`Example app listening at http://localhost:${PORT}`)
);

