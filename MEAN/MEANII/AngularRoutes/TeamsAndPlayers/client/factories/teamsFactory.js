app.factory('TeamFactory', function(){
   var teams = [
      {team:"Seahawks"},
      {team:"Bears"},
      {team:"49ers"}
   ];

   var factory = {};

   factory.getTeams = function(callback){
      callback(teams);
   }
   factory.addTeam = function(team){
      teams.push(team);
   }
   factory.deleteTeam = function(team){
      var id = teams.indexOf(team);
      teams.splice(id,1);
   }

   return factory
})
