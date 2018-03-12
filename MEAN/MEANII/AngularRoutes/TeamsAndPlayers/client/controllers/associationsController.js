app.controller('associationsContoller', ['$scope', 'PlayerFactory', 'TeamFactory', function ($scope, PlayerFactory, TeamFactory){
   $scope.players = [];
   $scope.teams = [];

   PlayerFactory.getPlayers(function(data){
      $scope.players = data;
   });

   TeamFactory.getTeams(function(data){
      $scope.teams = data;
   });

   $scope.addPlayerToTeam = function(player){
      PlayerFactory.addPlayerToTeam($scope.player)
      $scope.player = {}
   };
   PlayerFactory.deletePlayerFromTeam = function(player){
      //need to build controller to remove player from team.
   };
}]);
