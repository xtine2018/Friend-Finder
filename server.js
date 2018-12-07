// Dependencies
var express = require('express');
var path = require('path');

// Configure the Express application
var app = express();
var PORT = process.env.PORT || 8000;

// Expose the public directory to access CSS files
app.use(express.static(path.join(__dirname, './app/public')));

// Add middleware to parse incoming request bodies
app.use(express.json());
app.use(express.urlencoded({ extended: true })); //security feature for server

// Application routes
//switchboard to routes
//unnessary if its small app and routing between files isn't necessary
require(path.join(__dirname, './app/routing/apiRoutes'))(app);
require(path.join(__dirname, './app/routing/htmlRoutes'))(app);

// Start listening on PORT
app.listen(PORT, function() {
  console.log('App is listening on PORT: ' + PORT);
});