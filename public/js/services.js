var beaconServices = angular.module('beaconServices', ['ngResource']);

beaconServices.factory('Song', ['$resource',
  function($resource){
    return $resource('http://ws.spotify.com/search/1/track.json', {}, {
      query: {method:'GET', params:{q:'foo'}}
    });
  }]);