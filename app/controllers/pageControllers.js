
var app = angular.module('myApp');

app.controller("ourMissionController", ["$scope", "$route", "getJsonService", function ($scope, $route, getJsonService) {
	var jsonFile = $route.current.$$route.json;
	debugger;
	getJsonService.retrieveJson(jsonFile).then(function(response){ 
		$scope.bgImage = response.data.bgImage;
		$scope.topBand = response.data.topBand;
		debugger;
//		$scope.dTabs = response.data.menu;
//		$scope.logo = response.data.logo;
	});
}]);
//
//angular.module('myApp') 
//.controller('bandedNavControl',['$scope', '$route', 'getJsonService', function ( $scope, $route, getJsonService) {
//		var jsonFile = $route.current.$$route.json;
//		getJsonService.retrieveJson(jsonFile).then(function(response){ 
//			$scope.tabs = response.data.menu;//[0].title;
//			$scope.dTabs = response.data.menu;
//			$scope.logo = response.data.logo;
//		});
//
//}]);