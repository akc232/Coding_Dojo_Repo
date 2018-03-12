
var express = require("express");
var path = require("path");
var app = express();
var bodyParser = require('body-parser');

// imports my required modules and defines app as the express function

app.use(bodyParser.urlencoded({ extended: true })); // allows the input informations to be recieved.

app.use(express.static(path.join(__dirname, "./static"))); // serves static files such as style.css

app.set('views', path.join(__dirname, './views')); // renders my .ejs files to the server
app.set('view engine', 'ejs');

var route = require("./routes/index.js")(app) // imports my routing file.

app.listen(8000, function() {
 console.log("listening on port 8000");
});
// server set on port 8000
