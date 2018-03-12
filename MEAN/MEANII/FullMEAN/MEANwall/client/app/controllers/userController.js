angular.module('wallApp')
.controller('userController', ['$scope', '$location',
'userFactory', function($scope, $location, userFactory){
   $scope.login = function(user){
      userFactory.login(user, function(){
         $location.path('/wall')
      })
   },
   $scope.register = function(user){
      userFactory.register(user, function(){
         $location.path('/wall')
      })
   }
}])
