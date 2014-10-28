var beaconControllers = angular.module('beaconControllers', []);


beaconControllers.controller('SongSearchCtrl', ['$scope', '$cookies', '$location', 'Song', 'Estab', function($scope, $cookies, $location, Song, Estab) {
	$scope.getSongList = function() {
		if ($scope.query.length > 3) {
			Song.query({q:$scope.query}, function(songs) {
				$scope.songs = songs;
			});
		}
	}
	$scope.request = function(href) {
		var songId = href.replace("spotify:track:","");
		Estab.request({pin: $cookies.estab.pin, song_id: songId}, function(data) {
			
			
		})
		
	}
}]);

beaconControllers.controller('SetBarCtrl', ['$scope', '$cookies', '$location', 'Estab', function($scope, $cookies, $location, Estab) {
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
		if (!$cookies.estab) {
			$cookies.estab
		}
		$cookies.estab.pin = estab.pin;
		$cookies.estab.name = estab.name;
		console.log("PIN:" + estab)
		$location.path('/search');
		$location.replace();
		

	}
}]);

