console.log('Loading Factory!');
app.factory('friendsFactory', ['$http', function($http){
   var factory = {}
   factory.friends = [
      {first: 'Andrew', last: 'Chang'},
      {first: 'Bill', last: 'Bobbins'},
   ];
   factory.friend = {};

   factory.getFriends = function(callback){
      if(factory.friends){
         callback(factory.friends)
      }
      $http.get('/friends')
      .then(function(response){
         factory.friends = response.data;
         callback(factory.friends)
      })
      .catch(console.log)
   };
   factory.getFriend = function( id, callback){
      var friend = factory.friends.find(function(friend){
         return friend._id === id
      });
      if (friend){
         return callback(friend)
      }
      $http.get('/friends/'+ id)
      .then(function(response){
         factory.friends.push(response.data)
         callback(response.data)
      })
      .catch(function(response){
         console.log(response);
      })
   };
   factory.createFriend = function(friend, callback){
      $http.post('/friends/', friend)
      .then(function(response){
         factory.friends.push(response.data)
         console.log(response.data);
         callback()
      })
   };
   factory.updateFriend = function(oldFriend, callback){
      $http.patch('/friends/'+oldFriend._id, oldFriend)
      .then(function(response){
         var friend = factory.friends.find((friend) => oldFriend._id === friend._id)
         if (friend){
            factory.friends.splice(factory.friends.indexOf(friend), 1, response.data)
         }
         callback()
         console.log(response.data);
      })
   };
   factory.deleteFriend = function(id, callback){
      $http.delete('/friends/'+ id)
      .then(function(response){
         var friend = factory.friends.find(friend => friend._id === id)
         factory.friends.splice(factory.friends.indexOf(friend), 1)
         callback()
      })
      .catch(console.log);
   }



   //just need to finish edit page and then finished
   return factory
}])
