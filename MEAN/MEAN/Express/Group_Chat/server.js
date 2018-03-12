//-- Have the NodeJS server render views/index.ejs that has the HTML content for the client whenever the client requests "/"
//-- In the client codes, have a javascript code that asks the user for their name. Store the user input in a variable called name
// --Have the client EMIT to the server an event called "got_a_new_user" and pass 'name' to the server.
// --Have the server LISTEN for an event called "got_a_new_user". When this event gets triggered, have the server BROADCAST an event called 'new_user' to the client with the name of the new user attached to the event.
// --Have the client LISTEN for an event called 'new_user' and when this event gets triggered, have jQuery render a new box with the new user's name.
// --Wait... But this does not detect when a user disconnects from the socketIO connection. To do this, we need to have the server LISTEN for an event called 'disconnect' and when this event gets triggered, broadcast an event called 'disconnect_user' to all clients.
// --We need to have the client LISTEN for an event called 'disconnect_user' and remove any HTML box associated with this user

const express = require("express");
const path = require("path");
const app = express();
const bodyParser = require("body-parser");
const session = require("express-session")
const port = 8000;

app.use(bodyParser.urlencoded({ extended:true }));
app.use(express.static(path.join(__dirname, "./static")));
app.use(session({secret:"Chat"}));

app.set('views', path.join(__dirname, './views'));
app.set('view engine', 'ejs');

app.get('/', (request, response)=>{
   request.session.name = request.body.text
   response.render("index");

})


const server = app.listen(port, ()=>{
   console.log(`listening on port ${port}`);
})

var route = require('./routes/route.js')(app, server);
