var app = angular.module('app', ['ngRoute'])
app.config(function($routeProvider){
   $routeProvider
   .when('/users', {
      templateUrl: 'partials/_users.html'
   })
   .when('/login', {
      templateUrl: 'partials/_index.html'
   })
   .otherwise({
      redirectTo:'/'
   })
})
