var app = angular.module('myApp',['ngRoute'])

app.factory('PlayerFactory', function(){
   var players = [
      {name:"Speros", team:"Seahawks"},
      {name:"Jimmy", team:""},
      {name:"Jay", team:"Bears"},
      {name:"Bill", team:""},
      {name:"Kris", team:"49ers"}
   ];

   var factory = {};

   factory.getPlayers = function(callback){
      callback(players);
   }
   factory.addPlayer = function(player){
      player.team = "";
      players.push(player);
   }
   factory.deletePlayer = function(player){
      var id = players.indexOf(player);
      players.splice(id,1);
   }
   factory.addPlayerToTeam = function(data){
      // console.log(data.team);
      players[data.index].team = data.team

      //will display selection option twice and will over write other select option. Need to fix.
   }
   factory.deletePlayerFromTeam = function(data){

   }
   return factory
})
//FINISH BUILDING FACTORIES
