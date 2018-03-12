angular.module('logRegApp')
.service('userService', ['$http', function($http){
   this.login = function(user){
      return $http.post('/users/login', user)
   }
   this.register = function(user){
      return $http.post('/users/register', user)
   }
}])
