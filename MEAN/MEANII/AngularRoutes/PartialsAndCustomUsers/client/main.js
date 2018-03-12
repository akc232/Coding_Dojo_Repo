var app = angular.module('userApp', ['ngRoute']);

app.config(function($routeProvider){
   $routeProvider
   .when('/users', {
      templateUrl: 'static/partials/usersList.html',
      controller: 'UsersListController'
   })
   .when('/customize', {
      templateUrl: 'static/partials/customizeUser.html',
      controller: 'CustomizeUsersController'
   })
   .otherwise({
      redirectTo: "/"
   })
});

app.factory('usersFactory', function(){
   var users = [
      {first: 'Andrew', last: 'Chang', language:'Java Script'},
      {first: 'John', last: 'Doe', language:'Java Script'},
      {first: 'Bill', last: 'Bob', language:'Python'},
      {first: 'Mike', last: 'Thompson', language:'Ruby'},
   ]
   var factory = {};
   factory.mainPage = function(callback){
      callback(users);
   };
   factory.addUser = function(user){
      users.push(user);
   }
   factory.deleteUser = function(user){
      var person = users.indexOf(user);
      users.splice(person,1);

   }
   return factory;

});

app.controller('UsersListController', ['$scope', 'usersFactory', function($scope, usersFactory){
   $scope.users = [];
   usersFactory.mainPage(function(data){
      $scope.users = data;
   })
}])

app.controller('CustomizeUsersController', ['$scope', 'usersFactory', function($scope, usersFactory){
   $scope.users = [];
   console.log($scope.users);
   usersFactory.mainPage(function(data){
      $scope.users = data;
   })
   $scope.addUser= function(){
      console.log('adding a user');
      usersFactory.addUser($scope.user);
      $scope.user = {};
   }
   $scope.deleteUser= function(user){
      usersFactory.deleteUser(user)
   }
}])
