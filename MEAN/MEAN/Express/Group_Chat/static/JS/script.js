$(document).ready(function (){
     var socket = io.connect();
     var current_user;
     var new_user = function(){
        var name = prompt("Please enter your FUll name")
        socket.emit("load_page", {user:name});
     }
     new_user()
      socket.on("load_messages", function(data){
      $("#error").html("") //resetting the error message
      console.log(data.current_user,"current");
      console.log(data.message, "messages");
      current_user = data.current_user;
      var message = data.message;
      var chat = "";

      for (var i = 0; i < message.length; i++){
        chat += "<p>" + message[i].name + ": " + message[i].message + "</p>";
      }

      $("#chat").append(chat);
   })

   $("#message_box").submit(function(){
      socket.emit("new_message", {message: $("#message").val(), user: current_user})
      $("#message_box")[0].reset();
      return false;
   })

   socket.on("post_new_message", function(data) {
      $("#chat").append("<p>" + data.user + ": " + data.new_message + "</p>");
   })
})
