$(document).ready(function(){  //pictures wont load

   var link= "";
   for ( var i = 1; i<152; i++){
      link+= "<img class="+i+ " src=http://pokeapi.co/media/img/" +i+ ".png>";
   }
   $('#pics').append(link)
   // appends pictures to page.

   $('#pics').on('click', 'img', function(){
      var poke_id= $(this).attr("class");
      // console.log(pokemon);

      //gets the id number for API.
      $.get("http://pokeapi.co/api/v2/pokemon/"+poke_id+"/", function(response){


         var type="";
         for( var i=0;i<response.types.length;i++){
         type+= '<li>'+response.types[i].type.name+'</li>';
      }

         var info={
            name: response.name,
            height: response.height,
            weight: response.weight,
         }
         var poke= "";
         poke+= "<div>";
         poke+= "<h2>"+info.name+"</h1>";
         poke+= "<h3>"+type+"</h2>";
         poke+= "<h3>"+info.height+"</h2>";
         poke+= "<h3>"+info.weight+"</h2>";
         poke+= "</div>";

            $('.pokedex').append(poke); //appends info to pokedex


      },'json');
      })

console.log('hi');
   });

 //.document bracket
