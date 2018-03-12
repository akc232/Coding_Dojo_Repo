const myAppModule = angular.module('app', []);

myAppModule.controller('divController', function($scope){
   $scope.myName = 'Andrew Chang';
   $scope.myFavoriteLanguage = 'JavaScript and Python';
   $scope.myFavoriteJSLibrary = 'AngularJS';
});
