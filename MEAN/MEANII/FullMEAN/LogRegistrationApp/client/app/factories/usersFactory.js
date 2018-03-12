angular.module('logRegApp')
.factory('usersFactory', ['$http', function($http){
   var factory ={};
   factory.users = [];
   
   factory.getUsers = function(callback){
      $http.get('/users')
      .then(function(response){
         factory.users = response.data;
         callback(factory.users);
      })
      .catch(console.log)
   };

   factory.register = function(newUser, callback){
      $http.post('/users/register/', newUser)
      .then(function(){
         // console.log('this is the new user', response);
         callback()
      })
      .catch(function(error){
         console.log('and error occured registering, please try again', error);
         callback()
      })
   }
   factory.login = function(user, callback){
      // console.log(user);
      $http.post('/users/login/', user)
      .then(function(user){
         callback(user)
      })
      .catch(function(error){
         console.log("there is an ERRRRROOORRRR");
         console.log(" An error occured try relogging in", error);
         callback()
      })
   }
   return factory
}]);

console.log('Factories loaded');
