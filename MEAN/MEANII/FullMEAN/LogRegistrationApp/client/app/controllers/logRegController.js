angular.module('logRegApp')
.controller('logRegController', ['$scope','$http', '$location', 'userService','usersFactory', function($scope, $http, $location, userService, usersFactory){
   // make errors using scope or some way that it passess it to the front end...
    $scope.messages = [];
    $scope.regMessages = [];



   $scope.login = function(user){
      userService.login(user)
      .then(function(response){
         if (response === true){
            // console.log("hello");
         }else{
            $location.path('/users')
         }
      })
      .catch(function(error){
         $scope.messages.push(error.data)
         // $scope.getMessages = function(messages){
         //    usersFactory.getMessages(messages)
         // }
         $scope.user ={}
         console.log(error);
         console.log($scope.messages);
      })
      console.log(user);
   }
   $scope.register = function(user){
      userService.register(user)
      .then(function(response){
         $location.path('/users')
      })
      .catch(function(error){
         $scope.regMessages.push(error.data)
         $scope.user = {}
         console.log(error.data);
      })
   }
}])
