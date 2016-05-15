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
			var items = response.data.topicGrid.rightBlock.items;
			
			$scope.grid = [];
			for(var i = 0; i < 6; i++) {
				$scope.grid.push(items[i]);
				
			}
//			$scope.grid = [];
//			for (var prop in items) {
//			    var value = items[prop];
//			    if (typeof value === 'object') {
//			    	$scope.grid.push(toArray(value));
//			    } else {
//			    	$scope.grid.push(value);
//			    }
//			  }
			
			
		});
	}]);
//	app.controller("homeController", ["$scope", "$route", "getJsonService", function ($scope, $route, getJsonService) {
//		var jsonFile = $route.current.$$route.json;
//		getJsonService.retrieveJson(jsonFile).then(function(response){ 
//			var data = response.data;
//			$scope.topBand = data.topBand;
//			$scope.carousel = response.data.carousel;
//			$scope.interval = 5000;
//			$scope.noWrapSlides = false;
//			
//			$scope.left = response.data.topicGrid.leftBlock;
//			$scope.grid = response.data.topicGrid.rightBlock;
//			
//		});
//	}]);
	//ourMissionController
	app.controller("ourMissionController", ["$scope", "$route", "getJsonService", function ($scope, $route, getJsonService) {
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
			var batchSize = 3;
			var gMSize = gridMembers.length;
			$scope.batches = [];
			var array = [];
			for(var i = 0; i < gMSize; i++) {
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
			$scope.image = midComponent.image;
			var rightBlock = data.rightBlock;
			$scope.top = rightBlock.top;
			$scope.links = rightBlock.links;
			$scope.care = rightBlock.care;
		});
	}]);
	//contactUsController
	app.controller("contactUsController", ["$scope", "$http", "$route", "getJsonService", function($scope, $http, $route, getJsonService) {
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
			$scope.directions = data.directions;
			$scope.alternate = data.alternate;
			$scope.company = data.company;
			$scope.street = data.street;
			$scope.cityState = data.cityState;
			$scope.tempDirections = data.tempDirections;
			
			/*$scope.sendMail = function () {
				data = ({
					name : this.name,
					email: this.email,
					message: this.message
				});
				$http({
				  method: 'POST',
				  url: '/contactForm',
				  data: data
					  
				}).then(function successCallback(response) {
				    // this callback will be called asynchronously
				    // when the response is available
					console.log("Success in submission");
				  }, function errorCallback(response) {
				    // called asynchronously if an error occurs
				    // or server returns response with an error status.
					  console.log("there was an error in submission");
				  });
			}
		      $scope.name = '';
		      $scope.email = '';*/
		     
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
			

			$scope.info = data.info;
			$scope.message = data.donateOptions.message;
			$scope.options = data.donateOptions.options;
			
//			var options = data.donateOptions.options;
//			var batchSize = 4;
//			var oSize = options.length;
//			$scope.batches = [];
//			var array = [];
//			for(var i = 0; i < oSize; i++) {
//				if(array.length === 4) {
//					$scope.batches.push(array);
//					array = [];
//					array.push(options[i]);
//					if(i === (oSize-1)){
//						$scope.batches.push(array);
//					}
//				}else {
//					array.push(options[i]);
//					if(i === (oSize-1)){
//						$scope.batches.push(array);
//					}
//				}
//			}
			var alternate = data.alternateOption;
			$scope.alternateMessage = alternate.alternateMessage;
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
	//blogController
	app.controller("blogController", ["$scope", "$route", "$window", "getJsonService", function($scope, $route, $window, getJsonService) {
		var jsonFile = $route.current.$$route.json;
		getJsonService.retrieveJson(jsonFile).then(function(response){

			var data = response.data;
			
			var images = data.images;
			
			$scope.TopTitle = data.blogTopMessage;
			$scope.images = [];			
			$scope.allPosts = data.posts;
			var numPosts = $scope.allPosts.length;
			$scope.totalItems = numPosts;
			  
			$scope.currentPage = 1;
			$scope.numPerPage = 2;
			
			$scope.pages = [];
			for(var p = 0; p < numPosts; p += 2){
				var posts = [];
				posts.push($scope.allPosts[p]);
				posts.push($scope.allPosts[p+1]);
				$scope.pages.push(posts);
				
			}
			$scope.posts = $scope.pages[0];

			
			$scope.pageChanged = function() {
				$scope.currentPage = this.currentPage;
			};
			$scope.$watch('currentPage', function() {
			    $scope.posts = $scope.pages[$scope.currentPage-1];
			    $window.scrollTo(0, 0);
			  });
  			$scope.maxSize = 3;
			var rightBlock = data.rightBlock;
			$scope.top = rightBlock.top;
			$scope.links = rightBlock.links;
			$scope.care = rightBlock.care;
		});
	}]);
})();

