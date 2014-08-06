var beaconControllers = angular.module('beaconControllers', []);


beaconControllers.controller('SongSearchCtrl', ['$scope', 'Song', function($scope, Song) {
	$scope.getSongList = function() {
		if ($scope.query.length > 3) {
			$scope.songs = Song.query({q:$scope.query});
		}
	}
}]);
