/* !pageController.js */
'use strict';
(function() {
	var app = angular.module('myApp');
	//homeController
	app.controller("homeController", ["$scope", "$route", "getJsonService", function ($scope, $route, getJsonService) {
		var jsonFile = $route.current.$$route.json;
		getJsonService.retrieveJson(jsonFile).then(function(response){ 
			var data = response.data;
			$scope.topBand = data.topBand;
			$scope.carousel = response.data.carousel;
			$scope.interval = 5000;
			$scope.noWrapSlides = false;
			
			$scope.left = response.data.topicGrid.leftBlock;
			$scope.grid = response.data.topicGrid.rightBlock;
			
		});
	}]);
	//ourMissionController
	app.controller("ourMissionController", ["$scope", "$route", "getJsonService", function ($scope, $route, getJsonService) {
		var jsonFile = $route.current.$$route.json;
		getJsonService.retrieveJson(jsonFile).then(function(response){ 
			var data = response.data;
			//$scope.bgImage = data.bgImage;
			$scope.topBand = data.topBand;
			
			$scope.images = [];
			for(var i = 0; i < bgImage.images.length; i++) {
				if(i == 0){
					$scope.defImage = bgImage.images[i];
				}else {
					$scope.images.push(bgImage.images[i]);
				}
			}
			
			var midComponent = data.midComponent;
			$scope.infoSection = midComponent.infoSection;
			$scope.video = midComponent.video;
			var rightBlock = midComponent.rightBlock;
			$scope.top = rightBlock.top;
			$scope.links = rightBlock.links;
			$scope.care = rightBlock.care;

		});
	}]);
	//achievementsController
	app.controller("achievementsController", ["$scope", "$route", "getJsonService", function($scope, $route, getJsonService) {
		var jsonFile = $route.current.$$route.json;
		getJsonService.retrieveJson(jsonFile).then(function(response){ 
			var data = response.data;

			$scope.topBand = data.topBand;

			var bgImage = data.bgImage;
			
			$scope.images = [];
			for(var i = 0; i < bgImage.images.length; i++) {
				if(i == 0){
					$scope.defImage = bgImage.images[i];
				}else {
					$scope.images.push(bgImage.images[i]);
				}
			}
			
			var midComponent = data.midComponent;
			$scope.infoSection = midComponent.infoSection;
			$scope.video = midComponent.video;
			
			var rightBlock = data.rightBlock;
			
			$scope.top = rightBlock.top;
			$scope.links = rightBlock.links;
			$scope.care = rightBlock.care;
//			 return function (text) {
//		      if (text) {
//		          return text.slice(0, text.lastIndexOf('.')) || text;
//		        }
		});
	}]);
	//whoWeAreController
	app.controller("whoWeAreController", ["$scope", "$route", "getJsonService", function($scope, $route, getJsonService) {
		var jsonFile = $route.current.$$route.json;
		getJsonService.retrieveJson(jsonFile).then(function(response){ 
			var data = response.data;
			$scope.title = data.gridMembers.title;
			$scope.description = data.gridMembers.description;
			var gridMembers = data.gridMembers.memberArray; 
			//var batchSize = 4;
			var batchSize = 3;
			var gMSize = gridMembers.length;
			$scope.batches = [];
			var array = [];
			for(var i = 0; i < gMSize; i++) {
				//if(array.length === 4) {
				if(array.length === 3) {
					$scope.batches.push(array);
					array = [];
					array.push(gridMembers[i]);
					if(i === (gMSize-1)){
						$scope.batches.push(array);
					}
				}else {
					array.push(gridMembers[i]);
					if(i === (gMSize-1)){
						$scope.batches.push(array);
					}
				}
			}
			
			$scope.otherMembers = data.otherMembers.memberArray;
			$scope.otherMembersTitle = data.otherMembers.otherMembersTitle;
			$scope.friendsArray = data.friends.friendsArray;
			$scope.ourFriendsTitle = data.friends.ourFriendsTitle;
			
			$scope.top = data.gridMembers.rightBlock.top;
			$scope.links = data.gridMembers.rightBlock.links;
			$scope.care = data.gridMembers.rightBlock.care;
		});
	}]);
	//aboutMyanmarController
	app.controller("aboutMyanmarController", ["$scope", "$route", "getJsonService", function($scope, $route, getJsonService) {
		var jsonFile = $route.current.$$route.json;
		getJsonService.retrieveJson(jsonFile).then(function(response){ 
			var data = response.data;
			//$scope.bgImage = data.bgImage;
			$scope.topBand = data.topBand;
			
			$scope.images = [];
			for(var i = 0; i < bgImage.images.length; i++) {
				if(i == 0){
					$scope.defImage = bgImage.images[i];
				}else {
					$scope.images.push(bgImage.images[i]);
				}
			}
			
			var midComponent = data.midComponent;
			$scope.infoSection = midComponent.infoSection;
			$scope.video = midComponent.video;
			$scope.image = midComponent.image;
			var rightBlock = data.rightBlock;
			$scope.top = rightBlock.top;
			$scope.links = rightBlock.links;
			$scope.care = rightBlock.care;
		});
	}]);
	//donationController
	app.controller("donationController", ["$scope", "$route", "getJsonService", function($scope, $route, getJsonService) {
		var jsonFile = $route.current.$$route.json;
		getJsonService.retrieveJson(jsonFile).then(function(response){ 
			var data = response.data;
			//$scope.bgImage = data.bgImage;
			$scope.topBand = data.topBand;
		
			$scope.images = [];
			for(var i = 0; i < bgImage.images.length; i++) {
				if(i == 0){
					$scope.defImage = bgImage.images[i];
				}else {
					$scope.images.push(bgImage.images[i]);
				}
			}
			$scope.info = data.info;
			$scope.message = data.donateOptions.message;
			
			var options = data.donateOptions.options;
			var batchSize = 4;
			var oSize = options.length;
			$scope.batches = [];
			var array = [];
			for(var i = 0; i < oSize; i++) {
				if(array.length === 4) {
					$scope.batches.push(array);
					array = [];
					array.push(options[i]);
					if(i === (oSize-1)){
						$scope.batches.push(array);
					}
				}else {
					array.push(options[i]);
					if(i === (oSize-1)){
						$scope.batches.push(array);
					}
				}
			}
			var alternate = data.alternateOption;
			$scope.company = alternate.company;
			var streetNo = alternate.streetNo;
			var streetName = alternate.streetName;
			var city = alternate.city;
			var state = alternate.state;
			var zip = alternate.zip;
			$scope.street = streetNo + " " + streetName;
			$scope.locale = city + ", " + state + " " + zip;
			$scope.downloadMessage = alternate.downloadMessage;
			
			
			var rightBlock = data.rightBlock;
			$scope.top = rightBlock.top;
			$scope.links = rightBlock.links;
			$scope.care = rightBlock.care;
		});
	}]);
})();

///COMMENT OUT 2/27
//var app = angular.module('myApp');
//
//app.controller("homeController", ["$scope", "$route", "getJsonService", function ($scope, $route, getJsonService) {
//	var jsonFile = $route.current.$$route.json;
//	getJsonService.retrieveJson(jsonFile).then(function(response){ 
//		var data = response.data;
//		$scope.topBand = data.topBand;
//		$scope.carousel = response.data.carousel;
//		$scope.interval = 5000;
//		$scope.noWrapSlides = false;
//		
//		$scope.left = response.data.topicGrid.leftBlock;
//		$scope.grid = response.data.topicGrid.rightBlock;
//	});
//}]);
//app.controller("ourMissionController", ["$scope", "$route", "getJsonService", function ($scope, $route, getJsonService) {
//	var jsonFile = $route.current.$$route.json;
//	getJsonService.retrieveJson(jsonFile).then(function(response){ 
//		var data = response.data;
//		$scope.bgImage = data.bgImage;
//		$scope.topBand = data.topBand;
//		
//		var midComponent = data.midComponent;
//		$scope.infoSection = midComponent.infoSection;
//		$scope.video = midComponent.video;
//		var rightBlock = midComponent.rightBlock;
//		$scope.top = rightBlock.top;
//		$scope.links = rightBlock.links;
//		$scope.care = rightBlock.care;
//		
////		$scope.dTabs = response.data.menu;
////		$scope.logo = response.data.logo;
//	});
//}]);
//app.controller("achievementsController", ["$scope", "$route", "getJsonService", function($scope, $route, getJsonService) {
//	var jsonFile = $route.current.$$route.json;
//	getJsonService.retrieveJson(jsonFile).then(function(response){ 
//		var data = response.data;
//		$scope.bgImage = data.bgImage;
//		$scope.topBand = data.topBand;
//		
//		var midComponent = data.midComponent;
//		$scope.infoSection = midComponent.infoSection;
//		$scope.video = midComponent.video;
//		var rightBlock = midComponent.rightBlock;
//		$scope.top = rightBlock.top;
//		$scope.links = rightBlock.links;
//		$scope.care = rightBlock.care;
//	});
//}]);
////whoWeAreController
//app.controller("whoWeAreController", ["$scope", "$route", "getJsonService", function($scope, $route, getJsonService) {
//	var jsonFile = $route.current.$$route.json;
//	getJsonService.retrieveJson(jsonFile).then(function(response){ 
//		var data = response.data;
//		$scope.bgImage = data.bgImage;
//		$scope.topBand = data.topBand;
//		
//		var midComponent = data.midComponent;
//		$scope.infoSection = midComponent.infoSection;
//		$scope.video = midComponent.video;
//		var rightBlock = midComponent.rightBlock;
//		$scope.top = rightBlock.top;
//		$scope.links = rightBlock.links;
//		$scope.care = rightBlock.care;
//	});
//}]);
////about Myanmar
//app.controller("aboutMyanmarController", ["$scope", "$route", "getJsonService", function($scope, $route, getJsonService) {
//	var jsonFile = $route.current.$$route.json;
//	getJsonService.retrieveJson(jsonFile).then(function(response){ 
//		var data = response.data;
//		$scope.bgImage = data.bgImage;
//		$scope.topBand = data.topBand;
//		
//		var midComponent = data.midComponent;
//		$scope.infoSection = midComponent.infoSection;
//		$scope.video = midComponent.video;
//		$scope.image = midComponent.image;
//		var rightBlock = midComponent.rightBlock;
//		$scope.top = rightBlock.top;
//		$scope.links = rightBlock.links;
//		$scope.care = rightBlock.care;
//	});
//}]);





























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
