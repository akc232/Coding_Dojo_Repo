$(document).ready(function(){
   $('div.ninja img').hover(
      function(){
      $(this).fadeIn('div.suit img');
   }, function(){
      $(this).fadeOut('div.ninja img');
   })
});
