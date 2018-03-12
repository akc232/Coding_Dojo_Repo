angular.module('app')
.controller('loginController', ['$scope','$location','usersFactory', function($scope, $location, usersFactory){

  $scope.register = function(){

    usersFactory.register($scope.registration, function(data){
      if (data.data.errors){
        $scope.errors = data.data.errors;
      }
      else{
        $scope.user = data.data;
        $location.path('/users')
      }
    }, function(err){
      console.log("I am an error",err);
    })
  }
  $scope.login = function(){
    usersFactory.login(
      $scope.userLogin,
      function(data){
        if (data.data.errors){
          $scope.errors = data.data.errors;
        }
        else{
          $scope.user = data.data;
        }
      },
      function(err){
        console.log("I am an error",err);
      });
  }
}]);
