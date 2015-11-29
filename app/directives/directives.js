'use strict';

var app = angular.module('myApp');

//TODO: Handle click functionality with enter key
//TODO: Handle inserting the text for the dropdown
app.directive("clickTab", function () {
	return {
		 link: function(scope, element, attrs) { 
	        	element.bind('click', function () {
	        		debugger;
	                element.toggleClass("open");
	                var a = attrs;
	                
	            });
		 }
	}

});
//.controller('bandedNavControl',['$scope', '$route', 'getJsonService', function ( $scope, $route, getJsonService) {
//	var jsonFile = $route.current.$$route.json;
//	getJsonService.retrieveJson(jsonFile).then(function(response){ 
//		$scope.tabs = response.data.menu;//[0].title;
//		$scope.dTabs = response.data.menu;
//		$scope.logo = response.data.logo;
//	});

app.directive("globalNavTabs", function () {
	return {
		restrict: 'EA',
		transclude: true,
		scope: {},
	    controller: ['$scope', '$route', 'getJsonService', function($scope, $route, getJsonService) {
	    	var jsonFile = './json/globalNav.json';// $route.current.$$route.json;
	    	getJsonService.retrieveJson(jsonFile).then(function(response){ 
	    		$scope.tabs = response.data.menu;//[0].title;
	    		$scope.dTabs = response.data.menu;
	    		$scope.logo = response.data.logo;
	    	});
	    }],
		
		templateUrl: './Navigation/bandedNavTemplate.html'
	//	replace: true
	};
});
app.directive("band", function () {
	return {
		restrict: 'E',
		transclude: true,
		template:'<div class="band container" ng-transclude>',// +
				//'<div ng-transclude></div> </div>',
		replace: true
	}
	
});

app.directive("careCarousel", function () {
	return {
		restrict: 'E',
		transclude: true,
		templateUrl: './templates/carousel.html',
		controller: ['$scope', 'getJsonService', function($scope, getJsonService) {
			var jsonFile = './json/carousel.json';
			getJsonService.retrieveJson(jsonFile).then(function(response){ 
				$scope.carousel = response.data.carousel;
				$scope.interval = 5000;
				$scope.noWrapSlides = false;
			});
	    }]/*,
		replace: true*/
	}
});
app.directive("topicGrid", function () {
	return {
		restrict: 'E',
		transclude: true,
		templateUrl: './templates/topicGrid.html',
		controller: ['$scope', 'getJsonService', function($scope, getJsonService) {
			var jsonFile = './json/topicGrid.json';
			getJsonService.retrieveJson(jsonFile).then(function(response){ 
				$scope.content = response.data.topicGrid.leftBlock;
				$scope.grid = response.data.topicGrid.rightBlock;
			});
	    }]/*,
		replace: true*/
	}
});
app.directive("carouselClick", function () {
	return {
		link: function(scope, element) { 
        	element.bind('click', function () {
        		debugger;
        		scope.interval = -1;
                //element.toggleClass("open");
            });
		}
	}
});
//
//<picture>
//<source media="(min-width: 40em)"
//  srcset="big.jpg 1x, big-hd.jpg 2x">
//<source 
//  srcset="small.jpg 1x, small-hd.jpg 2x">
//<img src="fallback.jpg" alt="">
//</picture>
//<img src="small.jpg"
//    srcset="large.jpg 1024w, medium.jpg 640w, small.jpg 320w"
//    sizes="(min-width: 36em) 33.3vw, 100vw"
//    alt="A rad wolf">
//data-ng-src="{{slide.image}}" alt="{{slide.altTag}}" width="{{slide.width}}" height="{{slide.height}}">
//app.directive("pictureFill", function () {
//	return {
//		restrict: 'E',
//		transclude: true,
//		template:'<img data-ng-src="{{image.smSrc}}"' +
//				'srcset="{{image.lgSrc}} 1024w, {{image.mSrc}} 640w, {{image.smSrc}} 320w"' +
//				'alt="{{image.altTag}}">'
//				'<div ng-transclude></div> </div>',
//		replace: true
//	}
//	
//});