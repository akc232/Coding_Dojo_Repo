angular.module('logRegApp')
.controller('usersController', ['$scope','$location','$routeParams','usersFactory', function($scope, $location, $routeParams, usersFactory){
   $scope.users = [];

   $scope.getUsers = function(){
      usersFactory.getUsers(function(data){
         // console.log(data);
         $scope.users = data
         // console.log($scope.users);
      })
   };
}]);

console.log('Users controller loaded!');
