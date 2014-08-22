var beaconControllers = angular.module('beaconControllers', []);


beaconControllers.controller('SongSearchCtrl', ['$scope', '$rootScope', 'Song', function($scope, $rootScope, Song) {
	
	$scope.getSongList = function() {
		if ($scope.query.length > 3) {
			Song.query({q:$scope.query}, function(songs) {
				$scope.songs = songs;
			});
		}
	}
	$scope.request = function(href) {
		var songId = href.replace("spotify:track:","");
		console.log(songId)
	}
}]);

beaconControllers.controller('SetBarCtrl', ['$scope', '$rootScope', '$location', 'Estab', function($scope, $rootScope, $location, Estab) {
	$scope.status = 'Enter your bar\'s PIN!';
	$scope.pinValid = true;
	var estab;
	$scope.getBarByPin = function() {
		if ($scope.pin.length > 3) {
			Estab.query({pin:$scope.pin}, function(data){
				if (data.name) {
					$scope.status = 'You\'re at ' + data.name;
					estab = data;
					$scope.pinValid = false;
				} else {
					$scope.status = 'Could not find a bar with that PIN.'
					$scope.pinValid = true;
				}				
			});			
		} else {
			$scope.status = 'Enter your bar\'s PIN!';
			$scope.pinValid = true;
		}
	}
	$scope.setBar = function() {
		$rootScope.estab = estab;
		$location.path('/search');
		$location.replace();
		

	}
}]);