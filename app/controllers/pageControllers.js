
var app = angular.module('myApp');

app.controller("ourMissionController", ["$scope", "$route", "getJsonService", function ($scope, $route, getJsonService) {
	var jsonFile = $route.current.$$route.json;
	debugger;
	getJsonService.retrieveJson(jsonFile).then(function(response){ 
		var data = response.data;
		$scope.bgImage = data.bgImage;
		$scope.topBand = data.topBand;
		
		var midComponent = data.midComponent;
		$scope.infoSection = midComponent.infoSection;
		$scope.video = midComponent.video;
		var rightBlock = midComponent.rightBlock;
		$scope.top = rightBlock.top;
		$scope.links = rightBlock.links;
		
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
//}]);"midComponent": {
