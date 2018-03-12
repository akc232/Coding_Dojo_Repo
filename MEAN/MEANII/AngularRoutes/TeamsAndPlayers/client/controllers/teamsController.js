app.controller('teamsController', ['$scope', 'TeamFactory', function($scope, TeamFactory){
   $scope.teams = [];
   TeamFactory.getTeams(function(data){
      $scope.teams = data;
   })
   $scope.addTeam = function(team){
      TeamFactory.addTeam($scope.team);
      $scope.team = {};
   }
   $scope.deleteTeam = function(team){
      TeamFactory.deleteTeam(team)
   }

}])
