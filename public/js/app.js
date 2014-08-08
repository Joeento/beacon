var beaconApp = angular.module('beaconApp', ['ngRoute', 'beaconControllers', 'beaconServices']);

beaconApp.config(['$routeProvider',
  function($routeProvider) {
    $routeProvider.
      when('/search', {
        templateUrl: 'views/search.html',
        controller: 'SongSearchCtrl'
      }).
      when('/', {
        templateUrl: 'views/home.html',
        controller: ''
      }).
      otherwise({
        redirectTo: '/'
      });
  }]);