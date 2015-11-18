'use strict';
(function() {
	var app = angular.module('myApp');

	app.controller('CarouselControl', ['$scope', '$route', 'getJsonService', function ($scope, $route, getJsonService) {
		var jsonFile = $route.current.$$route.json;
		debugger;
		getJsonService.retrieveJson(jsonFile).then(function(response){ 
			debugger;
			$scope.carousel = response.data.carousel;
			$scope.interval = 5000;
			$scope.noWrapSlides = false;
		});

	}])//;

})();

