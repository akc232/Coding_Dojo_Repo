$(document).ready(function(){
   $('button').on('click', function(){
      $.get("https://api.github.com/users/akc232", displayName)
   })

   function displayName(data) {
      var name = data.name
      $('#name').html(name)
      console.log(data.name);
   }
   return displayName
});
