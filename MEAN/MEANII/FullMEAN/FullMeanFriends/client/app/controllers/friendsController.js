angular.module('friendsApp')
.controller('friendsController',
['$scope', '$location', '$routeParams','friendsFactory', function($scope, $location, $routeParams, friendsFactory){
   $scope.friends = [];
   $scope.friend = {};

   $scope.getFriends = function(){
      friendsFactory.getFriends(function(data){
         $scope.friends = data;
         // console.log($scope.friends, 'this is scope');
      })
   };

   $scope.getFriend = function(){
      friendsFactory.getFriend($routeParams.id, function(friend){
         $scope.friend = friend
      })
   }
   $scope.createFriend = function(){
      friendsFactory.createFriend($scope.friend, function(){
         $scope.friend = {};
         $location.url('/friends/')
      })
   }
   $scope.updateFriend = function(friend){
      friendsFactory.updateFriend(friend, function(){
         $location.path('friends/')
      })
   }
   $scope.deleteFriend = function(id){
      friendsFactory.deleteFriend(id, function(){
         console.log('deleted friend from list');
      })
   }
}])
console.log('Loading Controller');
