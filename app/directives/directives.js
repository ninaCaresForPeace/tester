/* !directives.js */
'use strict';
(function() {
	var app = angular.module('myApp');

	//TODO: Handle click functionality with enter key
	//TODO: Handle inserting the text for the dropdown
	app.directive("clickTab", function () {
		return {
			
			 link: function(scope, element ) { 
				
		        	element.bind('click', function () {
		        		debugger;
		                element.toggleClass("open"); 
		            });
			 }
		}

	});

	app.directive("clickNav", function () {
			function link(scope, element, attrs) {
				scope.page = "home";
			    
				
				element.bind('click', function (scope) {
			    	var newActiveTab = element.text().trim();
			    	var $li = element.parent().parent().parent().parent().find("li");
			    	$li.removeClass("active");
			    	for (var i in $li) {
			    		var num = Number(i);
			    		var stop = isNaN(num);
			    		if(!stop){
			    			var thisElement = $li[num];
			    			var tabName = thisElement.innerText.trim();
			    			if(tabName === newActiveTab) {
			    				var currentValue = thisElement.attributes.class.nodeValue;
			    				thisElement.className = "active " + currentValue;
			    			}
			    		}	
			    	}

	            });
			}

			return {
			    link: link
			  };

	});
	
	app.directive("globalNavTabs", function () {
		return {
			restrict: 'EA',
			transclude: true,
			scope: {},
		    controller: ['$scope', '$route', '$window','getJsonService', function($scope, $route, $window, getJsonService) {
		    	var jsonFile = './json/globalNav.json';
		    	getJsonService.retrieveJson(jsonFile).then(function(response){ 
		    		$scope.tabs = response.data.menu;
		    		$scope.dTabs = response.data.menu;
		    		$scope.logo = response.data.logo;
		    		$scope.currentPage = location.href.substring(location.href.lastIndexOf("/")+1);
		    		
		    		switch($scope.currentPage) {
		    	    case 'home':
		    	        	$scope.setActive = 0;
		    	        break;
		    	    case 'ourMission':
		    	    		$scope.setActive = 1;
		    	        break;
		    	    case 'achievements':
	    	    			$scope.setActive = 2;
	    	        break;
		    	    case 'whoWeAre':
	    	    			$scope.setActive = 3;
	    	        break;
		    	    case 'now':
	    	    			$scope.setActive = 4;
	    	        break;
		    	    case 'myanmar':
	    	    			$scope.setActive = 5;
	    	        break;
		    	    case 'contact':
	    	    			$scope.setActive = 6;
	    	        break;
		    	    case 'donate':
	    	    			$scope.setActive = 7;
	    	        break;
		    	    default:
		    	    		$scope.setActive = 0;
		    		}
		    	});
		    	
		    }],
			 
			templateUrl: './Navigation/bandedNavTemplate.html'
		};
	});

	app.directive("footerSection", function () {
		return {
			restrict: 'EA',
			transclude: true,
			scope: {},
		    controller: ['$rootScope','$scope', '$route', 'getJsonService', function($rootScope,$scope, $route, getJsonService) {
		    	var jsonFile = './json/footer.json';// $route.current.$$route.json;
		    	getJsonService.retrieveJson(jsonFile).then(function(response){ 
		    		
		    		$scope.info = response.data;    		
		    		
		    	});
		    }],
			
			templateUrl: './templates/footer.html'
		};
	});
	app.directive("band", function () {
		return {
			restrict: 'E',
			transclude: true,
			template:'<div class="band container-fluid" ng-transclude>',
			replace: true
		}
		
	});

	//sn-skrollr data-6500="left:65%;bottom[inverted]:100%;" data-9500="bottom:0%;
	app.directive("topBand", function () {
		return {
			restrict: 'E',
			transclude: true,
			template:'<div class="top-band container-fluid">' +
					'<div class="box-overlay"></div>' +
					'<div class="box-text">{{topBand.overlay}}</div>' +
					'<div ng-transclude></div> </div>',
			replace: true
		}
		
	});
	app.directive("careCarousel", function () {
		return {
			restrict: 'E',
			transclude: true,
			templateUrl: './templates/carousel.html'
		}
	});
	app.directive("topicGrid", function () {
		return {
			restrict: 'E',
			transclude: true,
			templateUrl: './templates/topicGrid.html'
		}
	});
	app.directive("midComponent", function () {
		return {
			restrict: 'E',
			templateUrl: './templates/midComponent.html'
		}
	});
	app.directive("teamGridComponent", function () {
		return {
			restrict: 'E',
			templateUrl: './templates/teamGridComponent.html'
		}
	});
	app.directive("teamMemberComponent", function () {
		return {
			restrict: 'E',
			templateUrl: './templates/teamMemberComponent.html'
		}
	});
	app.directive("rightBlockModule", function() {
		return {
			restrict: 'E',
			templateUrl: './templates/rightBlockModule.html'
		}
	});
	app.directive("ourFriends", function () {
		return {
			restrict: 'E',
			templateUrl: './templates/ourFriends.html'
		}
	});
	app.directive("carouselClick", function () {
		return {
			link: function(scope, element) { 
	        	element.bind('click', function () {
	        		scope.interval = -1;
	            });
			}
		}
	});

	app.directive("bgImage", function () {
		return {
			restrict: 'E',
			transclude: true,
			templateUrl: './templates/bgImage.html'
			
		}
	});
	
})();


//COMMENTED OUT 2/27
//var app = angular.module('myApp');
//
////TODO: Handle click functionality with enter key
////TODO: Handle inserting the text for the dropdown
//app.directive("clickTab", function () {
//	return {
//		
//		 link: function(scope, element ) { 
//			
//	        	element.bind('click', function () {
//	        		debugger;
//	                element.toggleClass("open"); 
//	            });
//		 }
//	}
//
//});
//
//app.directive("clickNav", function () {
//	//return {
//		function link(scope, element, attrs) {
//			scope.page = "home";
//		    
//			
//			element.bind('click', function (scope) {
//		    	var newActiveTab = element.text().trim();
//		    	var $li = element.parent().parent().parent().parent().find("li");
//		    	$li.removeClass("active");
//		    	for (var i in $li) {
//		    		var num = Number(i);
//		    		var stop = isNaN(num);
//		    		if(!stop){
//		    			var thisElement = $li[num];
//		    			var tabName = thisElement.innerText.trim();
//		    			if(tabName === newActiveTab) {
//		    				var currentValue = thisElement.attributes.class.nodeValue;
//		    				thisElement.className = "active " + currentValue;
//		    			}
//		    		}	
//		    	}
//
//            });
//		}
////		 link: function(scope, element, attrs) { 
////			 var $e = element;
////			 var $s = scope;
////			 var $a = attrs;
////	        	element.bind('click', function () {
////	        		debugger;
////
////	            });
////		 }
//	//}
//		return {
//		    link: link
//		  };
//
//});
///*app.directive("setActive", function () {
//	return {
//		
//		 link: function(scope, element ) { 
//			var currentPage = location.href.substring(location.href.lastIndexOf("/")+1);
//			var e = element;
//			debugger;
//		    	scope.$on('$viewContentLoaded', function(event) {
//			    	  console.log("content loaded");
//			    	  debugger;
//			    	  console.log($("#loginForm"));   // breakpoint here 
//			    	});
//
//		 }
//	}
//
//});
//*/
//app.directive("globalNavTabs", function () {
//	return {
//		restrict: 'EA',
//		transclude: true,
//		scope: {},
//	    controller: ['$scope', '$route', '$window','getJsonService', function($scope, $route, $window, getJsonService) {
//	    	var jsonFile = './json/globalNav.json';// $route.current.$$route.json;
//	    	getJsonService.retrieveJson(jsonFile).then(function(response){ 
//	    		$scope.tabs = response.data.menu;//[0].title;
//	    		$scope.dTabs = response.data.menu;
//	    		$scope.logo = response.data.logo;
//	    		$scope.currentPage = location.href.substring(location.href.lastIndexOf("/")+1);
//	    		
//	    		switch($scope.currentPage) {
//	    	    case 'home':
//	    	        	$scope.setActive = 0;
//	    	        break;
//	    	    case 'ourMission':
//	    	    		$scope.setActive = 1;
//	    	        break;
//	    	    case 'achievements':
//    	    			$scope.setActive = 2;
//    	        break;
//	    	    case 'whoWeAre':
//    	    			$scope.setActive = 3;
//    	        break;
//	    	    case 'now':
//    	    			$scope.setActive = 4;
//    	        break;
//	    	    case 'myanmar':
//    	    			$scope.setActive = 5;
//    	        break;
//	    	    case 'contact':
//    	    			$scope.setActive = 6;
//    	        break;
//	    	    case 'donate':
//    	    			$scope.setActive = 7;
//    	        break;
//	    	    default:
//	    	    		$scope.setActive = 0;
//	    		}
//	    	});
////	    	$window.onload = function(e) {
////	    		  debugger;//your magic here
////	    		}
////	    	$scope.currentPage = location.href.substring(location.href.lastIndexOf("/")+1);
////	    	$scope.$on('$viewContentLoaded', function(event) {
////		    	  console.log("content loaded");
////		    	  debugger;
////		    	  console.log($("#loginForm"));   // breakpoint here 
////		    	});
//	    	
//	    }],
//		 
//		templateUrl: './Navigation/bandedNavTemplate.html'
//	};
//});
//
//app.directive("footerSection", function () {
//	return {
//		restrict: 'EA',
//		transclude: true,
//		scope: {},
//	    controller: ['$rootScope','$scope', '$route', 'getJsonService', function($rootScope,$scope, $route, getJsonService) {
//	    	var jsonFile = './json/footer.json';// $route.current.$$route.json;
//	    	getJsonService.retrieveJson(jsonFile).then(function(response){ 
//	    		
//	    		$scope.info = response.data;    		
//	    		
//	    	});
//	    }],
//		
//		templateUrl: './templates/footer.html'
//	//	replace: true
//	};
//});
//app.directive("band", function () {
//	return {
//		restrict: 'E',
//		transclude: true,
//		template:'<div class="band container-fluid" ng-transclude>',// +
//				//'<div ng-transclude></div> </div>',
//		replace: true
//	}
//	
//});
//
//
//
//
////sn-skrollr data-6500="left:65%;bottom[inverted]:100%;" data-9500="bottom:0%;
//app.directive("topBand", function () {
//	return {
//		restrict: 'E',
//		transclude: true,
//		template:'<div class="top-band container-fluid">' +
//				'<div class="box-overlay"></div>' +
//				'<div class="box-text">{{topBand.overlay}}</div>' +
//				'<div ng-transclude></div> </div>',
//		/*controller: 'ourMissionController',*/
//		replace: true
//	}
//	
//});
//app.directive("careCarousel", function () {
//	return {
//		restrict: 'E',
//		transclude: true,
//		templateUrl: './templates/carousel.html'/*,
//		controller: ['$scope', 'getJsonService', function($scope, getJsonService) {
//			var jsonFile = './json/carousel.json';
//			getJsonService.retrieveJson(jsonFile).then(function(response){ 
//				$scope.carousel = response.data.carousel;
//				$scope.interval = 5000;
//				$scope.noWrapSlides = false;
//			});
//	    }]*/
//	}
//});
//app.directive("topicGrid", function () {
//	return {
//		restrict: 'E',
//		transclude: true,
//		templateUrl: './templates/topicGrid.html' /*,
//		controller: ['$scope', 'getJsonService',  function($scope, getJsonService) {
//			var jsonFile = './json/topicGrid.json';
//			getJsonService.retrieveJson(jsonFile).then(function(response){ 
//				$scope.left = response.data.topicGrid.leftBlock;
//				$scope.grid = response.data.topicGrid.rightBlock;
//				
//			});
//			console.log("after topicgrid");
//	    }]*/
//		
//	}
//});
//app.directive("midComponent", function () {
//	return {
//		restrict: 'E',
//		templateUrl: './templates/midComponent.html'
//	}
//});
//app.directive("teamGridComponent", function () {
//	return {
//		restrict: 'E',
//		templateUrl: './templates/teamGridComponent.html'
//	}
//});
//app.directive("carouselClick", function () {
//	return {
//		link: function(scope, element) { 
//        	element.bind('click', function () {
//        		scope.interval = -1;
//                //element.toggleClass("open");
//            });
//		}
//	}
//});
////app.directive("ourMission", function () {
////	return {
////		restrict: 'E',
////		transclude: true,
////		template:'<div class="ourMission" ng-transclude> </div>',
////		controller: 'ourMissionController'/*,
////		controller: ['$scope', 'getJsonService',  function($scope, getJsonService) {
////			var jsonFile = './json/mission.json';
////			debugger;
////			getJsonService.retrieveJson(jsonFile).then(function(response){ 
////				$scope.bgImage = response.data.bgImage;
////				//debugger;
////			});
////			this.getOptions = function() {
////				//debugger;
////			        return $scope.bgImage;
////			};
////	    }]*/
////		
////	}
////});
////app.controller("ourMissionController", ["$scope", "$route", "getJsonService", function ($scope, $route, getJsonService) {
////	var jsonFile = $route.current.$$route.json;
////	getJsonService.retrieveJson(jsonFile).then(function(response){ 
////		$scope.bgImage = response.data.bgImage;
//////		$scope.dTabs = response.data.menu;
//////		$scope.logo = response.data.logo;
////	});
////}]);
//app.directive("bgImage", function () {
//	return {
//		restrict: 'E',
//		//require: '^ourMission',
//		transclude: true,
//		//scope: false, //use parent scope
//		templateUrl: './templates/bgImage.html',
//		link: function(scope, element/*, ourMissionCtrl*/ ) { 
//			//debugger;
//			//scope.bgImage = ourMissionCtrl.bgImage;
//        	//scope.bgImage = ourMissionCtrl.getOptions();
//         }
//	//	controller: 'ourMissionController'
////		controller: ['$scope', 'getJsonService', function($scope, getJsonService) {
////			var jsonFile = './json/bgImage.json';
////			getJsonService.retrieveJson(jsonFile).then(function(response){ 
////				debugger;
////				$scope.bgImage = response.data.bgImage;
////				
////			});
////		}]
//	}
//});
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