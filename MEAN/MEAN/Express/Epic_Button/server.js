var express = require("express")
var path = require("path")
var app = express();
var bodyParser = require("body-parser")

app.use(bodyParser.urlencoded({ extended: true }));

app.use(express.static(path.join(__dirname, "./static")));

app.set('views', path.join(__dirname, './views'));

app.set('view engine', 'ejs');

var route = require("./routes/route.js")(app)

var server = app.listen(8000, function(){
   console.log("listening on port 8000");
});


var io = require('socket.io').listen(server);
io.sockets.on('connection', function(socket){
   console.log("WE ARE USING SOCKETS");
   var count=0;
   socket.on("button_clicked", function(data){
      count+=1;
      io.emit('server_response', {response:count});
      console.log(data.action);
   })

   socket.on("reset_count", function(data){
      count =0;
      io.emit("reset_response", {response:count})
      console.log(data.action);
   });


});
