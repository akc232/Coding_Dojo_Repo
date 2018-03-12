angular.module('wallApp', ['ngRoute', 'ngCookies'])
.config(['$routeProvider', function($routeProvider){
   $routeProvider
   .when('/', {
      templateUrl: 'partials/_index.html'
   })
   .when('/userPage', {
      templateUrl: 'partials/logReg.html'
   })
   .when('/wall', {
      templateUrl: 'partials/wall.html'
   })
   .otherwise({
      redirectTo: '/'
   })
}]);
