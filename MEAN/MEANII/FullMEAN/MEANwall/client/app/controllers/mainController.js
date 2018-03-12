angular.module('wallApp')
.controller('mainController', ['$scope', '$location', 'AuthService', 'UserService',
  function($scope, $location, auth, userService){
    $scope.isAuthed = auth.isAuthed();


   //  if (auth.isAuthed()) {
   //    return $location.path('/wall');
   //  }

    $scope.login = function(user){
      userService.login(user)
        .then(function(response) {
          $location.path('/wall');
        })
        .catch(console.log);
    };

    $scope.register = function(user){
      userService.register(user)
        .then(function(response) {
          $location.path('/wall');
        })
        .catch(console.log);
    };
    $scope.logout = function(user){
      userService.logout(user)
      $location.path('/')
   }
}])
