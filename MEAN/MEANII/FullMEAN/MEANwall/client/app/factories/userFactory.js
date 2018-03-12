angular.module('wallApp')
.factory('userFactory', ['$http', function($http){
   var factory ={};
   factory.users = {}

   factory.login = function(user, callback){
      $http.post('/auth/login', user)
      .then(function(user){
         callback(user)
      })
      .catch(function(error){
         console.log(error);
         callback()
      })
   }
   factory.register = function(newUser, callback){
      $http.post('/auth/register/', newUser)
      .then(function(){
         callback()
      })
      .catch(function(error){
         console.log(error);
      })
   }
   return factory
}])
