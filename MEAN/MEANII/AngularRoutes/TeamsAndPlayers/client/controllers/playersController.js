app.controller('playerController', ['$scope', 'PlayerFactory', function($scope, PlayerFactory){
   $scope.players = [];
   PlayerFactory.getPlayers(function(data){
      $scope.players = data;
   })
   $scope.addPlayer = function(player){
      PlayerFactory.addPlayer($scope.player);
      $scope.player = {};
   }
   $scope.deletePlayer = function(player){
      PlayerFactory.deletePlayer(player)
   }

}])
