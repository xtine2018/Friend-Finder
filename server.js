
var express = require('express');
var path = require('path');


var app = express();
var PORT = process.env.PORT || 8000;

app.use(express.static(path.join(__dirname, './app/public')));
// app.use('/', express.static('public/public'));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

require(path.join(__dirname, './app/routing/apiRoutes'))(app);
require(path.join(__dirname, './app/routing/htmlRoutes'))(app);


app.listen(PORT, function() {
  console.log('App is listening on PORT: ' + PORT);
});