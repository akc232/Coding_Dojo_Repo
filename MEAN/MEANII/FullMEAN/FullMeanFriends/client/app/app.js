var app = angular.module('friendsApp', ['ngRoute'])
app.config(function($routeProvider){
   $routeProvider
   .when('/friends/',{
      templateUrl: 'partials/_index.html',
      controller: 'friendsController'
   })
   .when('/friends/newFriend',{
      templateUrl:'partials/_create.html',
      controller: 'friendsController'
   })
   .when('/friends/:id',{
      templateUrl:'partials/_show.html',
      controller: 'friendsController'
   })
   .when('/friends/:id/edit',{
      templateUrl:'partials/_edit.html',
      controller: 'friendsController'
   })
   .otherwise({
      redirectTo:'/friends/'
   })
});
