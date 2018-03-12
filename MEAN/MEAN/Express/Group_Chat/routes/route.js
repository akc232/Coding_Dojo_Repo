const users = [];
const messages = [];
// need conditionals to check for double users!


module.exports = function Route(app,server){
const io = require('socket.io').listen(server);

   io.sockets.on('connection', function (socket){
      console.log("WE ARE USING SOCKETS!");
      socket.on("load_page", function(data){
         users.push(data.user);
         console.log(users, "users");
         socket.emit("load_messages", {current_user: data.user, message: messages});
   });
   socket.on("new_message", function(data){
     messages.push({name: data.user, message: data.message});
     io.emit("post_new_message", {new_message: data.message, user: data.user})
  });

   });

   app.get('/', (request, response)=>{
      response.render("index");

   });
};
