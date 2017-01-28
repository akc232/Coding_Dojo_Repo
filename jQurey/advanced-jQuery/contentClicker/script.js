$(document).ready(function() {
   $('button').on("click", function(page){       //cant get info reset in text are for values
      page.preventDefault()

      var fn= $('.first').val();
      var lst= $('.last').val();
      var bio= $('.content').val();

      var info= " "
      info+= "<div>"
      info+= "<h1>"+fn+ " " +lst+"</h1>"
      info+= "<h2>"+bio+"</h2>"
      info+= "</div>"

      $('#users').append(info)
      $('h2').hide()
      })
      $('#users').on('click', 'h1', function(){
         $(this).siblings().toggle('slow')
   })
console.log("test");
});
