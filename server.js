// Dependencies
const express = require("express");
const sequelize = require('./Develop/config/connection');



// Express configuration
//Tells node that we are creating an 'express' server
const app = express();

// Sets an initial port.
const PORT = process.env.PORT || 3000;

// Sets up the Express app to handle data parsing
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static("Develop/public"));

// ROUTES
require('./routes/apiRoutes')(app);
require('./routes/htmlRoutes')(app);


app.listen(PORT, function() {
    console.log(`App listening on PORT: ${PORT}`);
});
