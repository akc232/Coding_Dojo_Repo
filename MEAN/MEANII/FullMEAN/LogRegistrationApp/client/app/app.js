angular.module('logRegApp', ['ngRoute', 'ngCookies'])
.config(['$routeProvider', function($routeProvider){
   $routeProvider
   .when('/', {
      templateUrl:'partials/_index.html'
   })
   .when('/users/', {
      templateUrl: 'partials/users/_index.html',
      controller: 'usersController'
   })
   .otherwise({
      redirectTo:'/'
   })
}]);
