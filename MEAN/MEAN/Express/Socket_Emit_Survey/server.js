
var express = require("express");
var path = require("path");
var app = express();
var bodyParser = require('body-parser');


app.use(bodyParser.urlencoded({ extended: true })); // allows the input informations to be recieved.

app.use(express.static(path.join(__dirname, "./static"))); // serves static files such as style.css

app.set('views', path.join(__dirname, './views')); // renders my .ejs files to the server
app.set('view engine', 'ejs');

var route = require("./routes/index.js")(app) // imports my routing file.
var server = app.listen(8000, function() {
 console.log("listening on port 8000");
});
// server set on port 8000


var num = function(){
   return Math.floor(Math.random()*1000)+1;
};
// random number function

var io = require('socket.io').listen(server);
io.sockets.on('connection', function (socket) {
  console.log("WE ARE USING SOCKETS!");
  // console.log(socket.id);

  socket.on("button_clicked", function (data){
      console.log('Someone clicked a button!  Reason: ' + data.name);
      // console.log(data.name);

      socket.emit('server_response', {response:"You emitted the following information to the server. {"+data.name+'}'});// emits the data entered in the form

      socket.emit('random_number', {number:"Users random number assigned is:"+num()}) // emits the random number
  })
})
