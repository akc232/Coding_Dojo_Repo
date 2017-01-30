$(document).ready(function(){
   $('form').submit(function() {
      var location= $('input').val();
      var link='http://api.openweathermap.org/data/2.5/weather?q='+location+'&appid=9fd4f8284c6bd421889b49e97b1a5ae5'
      $.get(link, function(res) {
         console.log(res);

         var post={
         name: res.name,
         temp: res.main.temp
      }
      var info="";
      info+= "<div>";
      info+= "<h1>"+post.name+"</h1>";
      info+= "<h2>"+Math.floor((post.temp-273.15)*(9/5)+32)+"</h2>";
;
      info+= "</div>";

      $('#weather').append(info)
      }, 'json');
      // don't forget to return false so the page doesn't refresh
      return false;
   });
   console.log('test');
});
