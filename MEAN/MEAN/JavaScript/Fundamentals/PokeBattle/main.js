var input = document.getElementById('player');
var submit = document.getElementById('submit');
var arena = document.getElementById('arena');
var fight = document.getElementById('fight');

var game = {
  players: [],
  addPlayer: function(){}
};
function playerConstructor(name){
  player = {};
  player.name = name;
  player.hand = [];
  player.addCard = function(card){
     player.hand.push(card);
  };
  return player;
};

submit.onclick = newPlayer;

function newPlayer(e){
if(!input.value.trim()){
 return alert("Please enter a player name")
}
else{
   console.log("click");
 var construct = playerConstructor(input.value)
 game.players.push(construct)
 arena.innerHTML += "<div class = 'player' id = " + construct.name + "><h3>" + construct.name + "</h3></div>"
 // console.log(game.players)
}
};


fight.onclick = pokemonFight;
var i = 0;

function pokemonFight(e){
   console.log("battle!");
   var pokeId = Math.floor((Math.random() * 151) + 1);
   console.log(pokeId);
   $.ajax({
      url: 'http://pokeapi.co/api/v2/pokemon/'+pokeId+'/',
      dataType: 'json',
      success: function(pokemon){
         console.log('success');
         var card = {};
         card.name = pokemon.name;
         card.attack = pokemon.base_experience;
         card.image = "<img src= 'http://pokeapi.co/media/img/" + pokeId + ".png'>";
         console.log(i);
         var player = document.getElementById(game.players[i].name);
         player.innerHTML += "<div class = 'card'><div class = 'image'>" + card.image + "<div class = 'card_info'> <h4>" + card.name + "</h4><br> <p>Attack: " + card.attack + "</p> </div> </div>";
         i++;
         




      }
   });

};




// ---------------------------------
//
// document.addEventListener('DOMContentLoaded', function(){
//    var input = document.getElementById('player');
//    var submit = document.getElementById('submit');
//    var game = {
//      players: [],
//      addPlayer: function(){}
//    };
//    function playerConstructor(name){
//      player = {};
//      player.name = name;
//       player.hand = [];
//      player.addCard = function(card){
//       player.hand.push(card);
//      };
//      return player;
//    };
//    submit.onlick = function add(){
//       console.log("added player");
//    }
// });
