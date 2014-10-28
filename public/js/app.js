var beaconApp = angular.module('beaconApp', ['ngRoute', 'ngCookies', 'beaconControllers', 'beaconServices']);

beaconApp.config(['$routeProvider',
  function($routeProvider) {
    $routeProvider.
      when('/', {
        templateUrl: 'views/home.html',
        controller: 'SetBarCtrl'
      }).
      when('/search', {
        templateUrl: 'views/search.html',
        controller: 'SongSearchCtrl'
      }).
      when('/queue', {
        templateUrl: 'views/queue.html',
        controller: 'QueueCtrl'
      }).
      otherwise({
        redirectTo: '/'
      });
  }]);