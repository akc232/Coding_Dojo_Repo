angular.module('wallApp')
  .service('UserService', ['$http', function($http) {
    this.login = function(user) {
      return $http.post('/auth/login', user);
    };

    this.register = function(user) {
      return $http.post('/auth/register', user)
    };
  }]);

  angular.module('wallApp')
    .service('AuthService', ['$http', '$cookies',
      function($http, $cookies) {
        this.isAuthed = function() {
          var expired = $cookies.get('expiration');
          var id = $cookies.get('userID');
          var session = $cookies.get('ninjasCookie');

          return expired && id && session && expired > Date.now();
        };

        this.currentUserId = function() {
          return $cookies.get('userID');
        };

        this.logout = function() {
          return $http.delete('/auth/logout/');
        };
      }
    ])
