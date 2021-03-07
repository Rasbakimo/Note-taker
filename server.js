
// npm packages for functionality
const fs = require('fs');
const path = require('path');
const express = require('express');

//  creating an "express" server
const app = express();
const PORT = process.env.PORT || 3000;

// Sets up the Express app to handle data parsing
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static(__dirname));

// ROUTER
require('./routes/htmlRoutes')(app);


// LISTENER

app.listen(PORT, () => {
  console.log(`App listening on PORT: ${PORT}`);
});
