/* !appFactories.js */
'use strict';
(function() {
	angular.module('myApp') 
	.factory('getJsonService', ['$http', '$q',function($http, $q){
        return {
            retrieveJson : function(pathName){
            	var d = $q.defer();
                $http.get(pathName).then(function(data){ //wrap it inside another promise using then
                            console.log("in the service: " + data)
                            d.resolve(data);
                  });
                return d.promise;
            }
        }
    }]);
	angular.module('myApp')
	.filter('trustUrl', ['$sce', function ($sce) {
		  return function(url) {
		    return $sce.trustAsResourceUrl(url);
		  };
		}]);
})();

/* !bandedNavController.js */
'use strict';
(function() {
	angular.module('myApp').controller('bandedNavControl',['$scope', '$route', 'getJsonService', function ( $scope, $route, getJsonService) {
		var jsonFile = $route.current.$$route.json;
		getJsonService.retrieveJson(jsonFile).then(function(response){ 
			$scope.tabs = response.data.menu;
			$scope.dTabs = response.data.menu;
			$scope.logo = response.data.logo;
		});

	}]);
})();
//Twitter:  I think it’s https://twitter.com/Care4peace
//
//	Facebook: https://www.facebook.com/CareForPeace/
//COMMENT OUT 2/27
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






//		
//.directive("clickTab", function () {
//			return {
//				 link: function(scope, element) { 
//			        	element.bind('click', function () {
//			        		debugger;
//			                element.toggleClass("open");
//			            });
//				 }
//			}
//       
//        });




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
			template:'<div class="band container" ng-transclude>',
			//template:'<div class="band container-fluid" ng-transclude>',
			replace: true
		}
		
	});

	//sn-skrollr data-6500="left:65%;bottom[inverted]:100%;" data-9500="bottom:0%;
	app.directive("topBand", function () {
		return {
			restrict: 'E',
			transclude: true,
			template:'<div class="top-band container">' +
			//template:'<div class="top-band container-fluid">' +
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
	app.directive("donateInfo", function () {
		return {
			restrict: 'E',
			templateUrl: './templates/donateInfo.html'
		}
	});
	app.directive("donateOptions", function () {
		return {
			restrict: 'E',
			templateUrl: './templates/donateOptions.html'
		}
	});
	app.directive("alternateOption", function () {
		return {
			restrict: 'E',
			templateUrl: './templates/alternateOption.html'
		}
	});
	app.directive("contactComponent", function () {
		return {
			restrict: 'E',
			templateUrl: './templates/contactComponent.html'
		}
	});
	app.directive("bgImage", function () {
		return {
			restrict: 'E',
			transclude: true,
			templateUrl: './templates/bgImage.html'
			
		}
	});
	app.directive("blogHeader", function () {
		return {
			restrict: 'E',
			transclude: true,
			templateUrl: './templates/blogHeader.html'
			
		}
	});
	app.directive("blogComponent", function () {
		return {
			restrict: 'E',
			transclude: true,
			templateUrl: './templates/blogComponent.html'
			
		}
	});
	app.directive("visualMedia", function () {
		return {
			restrict: 'E',
			transclude: true,
			templateUrl: './templates/visualMedia.html'
			
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
//		debugger;
//		//var SMTPConnection = require('smtp-connection');
//		var connection = new SMTPConnection(options);
//		var envelope = {
//			form: "nina.dr16@gmail.com",	
//			to: "nina.dr16@gmail.com"
//		}; 
//		var message = "testing";
//		connection.send(envelope, message,callback);
	}]);
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
//			//$scope.bgImage = data.bgImage;
//			$scope.topBand = data.topBand;
//			
//			$scope.images = [];
//			for(var i = 0; i < bgImage.images.length; i++) {
//				if(i == 0){
//					$scope.defImage = bgImage.images[i];
//				}else {
//					$scope.images.push(bgImage.images[i]);
//				}
//			}
			
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
			//$scope.bgImage = data.bgImage;
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
			
//			<form ng-submit="submit()">
//			  	<input type="text" ng-model="name" name="text" placeholder="Name"/>
//			  	<input type="email" ng-model="email" name="email" placeholder="Email"/>
//			  	<input type="text" ng-model="message" name="message" maxlength="500" placeholder="Message"/>
//			  	<input type="submit" id="submit" value="Send" />
//			</form>
			
			$scope.sendMail = function () {
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
		      $scope.email = '';
		     
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

/* !app.js */
'use strict';
(function() {
	// Declare app level module which depends on views, and components
	var myApp = angular.module('myApp', [
	  'ngRoute',
	  'sn.skrollr',
	  'ng.picturefill',
	  'ngAnimate',
	  'ui.bootstrap',
	  'myApp.version'
	]).config(["snSkrollrProvider", function(snSkrollrProvider) {
	  snSkrollrProvider.config = { smoothScrolling: true,};
	}]);

	//initialise skrollr at runtime
	myApp.run(["snSkrollr", function(snSkrollr) {
	  snSkrollr.init();
	  console.log("in init ");
	}]);

	myApp.config(['$routeProvider', function($routeProvider) {
	$routeProvider.
		when("/homePage", {
			templateUrl: "Views/homePage.html",
			json: 'json/home.json',
			controller: 'homeController'
		}).
		when("/ourMission", {
			templateUrl: "Views/mission.html",
			json: 'json/mission.json',
			controller: 'ourMissionController'
			
		}).
		when("/achievements", {
			templateUrl: "Views/achievements.html",
			json: 'json/achievements.json',
			controller: 'achievementsController'
			
		}).
		when("/whoWeAre", {
			templateUrl: "Views/whoWeAre.html",
			json: 'json/whoWeAre.json',
			controller: 'whoWeAreController'
			
		}).
		when("/myanmar", {
			templateUrl: "Views/myanmar.html",
			json: 'json/myanmar.json',
			controller: 'aboutMyanmarController'
			
		}).
		when("/donate", {
			templateUrl: "Views/donate.html",
			json: 'json/donate.json',
			controller: 'donationController'
			
		}).
		when("/contact", {
			templateUrl: "Views/contact.html",
			json: 'json/contact.json',
			controller: 'contactUsController'
			
		}).
		when("/blog", {
			templateUrl: "Views/blogNow.html",
			controller: 'blogController',
			json: 'json/blogNow.json'

		}).
		when("/globalNav", {
			templateUrl: "Navigation/bandedNavTemplate.html",
			controller: 'bandedNavControl',
			json: 'json/globalNav.json'

		}).
		otherwise({redirectTo: '/homePage'})
	}]);
	
	//

//	var smtpTransport = nodemailer.createTransport('SMTP', {
//		  service: 'Gmail',
//		  auth: {
//		    user: 'nina.dr16@gmail.com',
//		    pass: 'aquaM0)8.'
//		  }
//		});
//
//		var mailOptions = {
//		    from: 'pudra@mail.com',
//		    to: 'nina.dr16@gmail.com',
//		    subject: 'Hello world!',
//		    text: 'Plaintext message example.'
//		};
//
//		smtpTransport.sendMail(mailOptions, function(err) {
//			debugger;
//		  console.log('Message sent!');
//		});
})();


//COMMENTED OUT 2/26
//// Declare app level module which depends on views, and components
//var myApp = angular.module('myApp', [
//  'ngRoute',
//  'sn.skrollr',
//  'myApp.view1',
//  'myApp.view2',
//  //'myApp.globalNav',
//  'myApp.version'
//]).config(["snSkrollrProvider", function(snSkrollrProvider) {
//	//debugger;
//  snSkrollrProvider.config = { smoothScrolling: true,};
//  console.log("after config");
//}]);
//
//// 2. initialise skrollr at runtime
////////var myApp = angular.module('myApp');
//myApp.run(["snSkrollr", function(snSkrollr) {
//	//debugger;
//  snSkrollr.init();
//  console.log("in init ");
//}]);
//
/////////angular.module('myApp').//,['ngRoute','getJsonService'
////'ngRoute',
////'myApp.view1',
////'myApp.view2',
////'myApp.globalNav',
////'myApp.version'
////]).
//myApp.config(['$routeProvider', function($routeProvider) {
////config(['$routeProvider', 'getJsonService', function($routeProvider,getJsonService) {
//$routeProvider.
//	when("/home", {
//		templateUrl: "Views/home.html"
//		//controller: 'bandedNavControl',
//		//json: 'json/globalNav.json'
//
//	}).
//	when("/homePage", {
//		templateUrl: "Views/homePage.html",
//		json: 'json/home.json',
//		controller: 'homeController'
//		
//
//	}).
//	when("/ourMission", {
//		templateUrl: "Views/mission.html",
//		json: 'json/mission.json',
//		controller: 'ourMissionController'
//		
//	}).
//	when("/achievements", {
//		templateUrl: "Views/achievements.html",
//		json: 'json/achievements.json',
//		controller: 'achievementsController'
//		
//	}).
//	when("/whoWeAre", {
//		templateUrl: "Views/whoWeAre.html",
//		json: 'json/whoWeAre.json',
//		controller: 'whoWeAreController'
//		
//	}).
//	when("/myanmar", {
//		templateUrl: "Views/myanmar.html",
//		json: 'json/myanmar.json',
//		controller: 'aboutMyanmarController'
//		
//	}).
//	when("/globalNav", {
//		templateUrl: "Navigation/bandedNavTemplate.html",
//		controller: 'bandedNavControl',
//		json: 'json/globalNav.json'
//
//	}).
//	when("/view2", {
//		templateUrl: "view2/view2.html",
//		controller: 'CarouselDemoCtrl'
//	}).
//	when("/c7bh", {
//		templateUrl: "Views/c7bh.html"/*,
//		controller: 'CarouselControl',
//		json: 'json/carousel.json'*/
//		
//	}).
//	when("/c7bhTest", {
//		templateUrl: "view1/c7bhTest.html"/*,
//		controller: 'CarouselControl',
//		json: 'json/carousel.json'*/
//		
//	}).
//	otherwise({redirectTo: '/globalNav'})
//	//otherwise({redirectTo: '/view1'})
//}]);

//
//
//config(['$routeProvider', function($routeProvider) {
//	debugger;
//  //$routeProvider.otherwise({redirectTo: '/view1'});
//	$routeProvider.
//		when("/globalNav", {
////			templateUrl: "bandedNavTemplate.html",
////			controller: 'bandedNavControl'
//			templateUrl: "Navigation/bandedNavTemplate.html",
//			controller: 'Navigation/bandedNavControl',
//			appData: 'json/globalNav.json'
//		}).
//		when("/view2", {
//			templateUrl: "view2/view2.html",
//			controller: 'CarouselDemoCtrl'
//		}).
//		when("/view1", {
//			templateUrl: "view1/view1.html",
//			controller: 'View1Ctrl'
//		}).
//		otherwise({redirectTo: '/view1'})
//}]);*/








//'use strict';

// Declare app level module which depends on views, and components
//angular.module('myApp').//,['ngRoute','getJsonService'
////  'ngRoute',
////  'myApp.view1',
////  'myApp.view2',
////  'myApp.globalNav',
////  'myApp.version'
////]).
//config(['$routeProvider', function($routeProvider) {
////config(['$routeProvider', 'getJsonService', function($routeProvider,getJsonService) {
//	$routeProvider.
//		when("/home", {
//			templateUrl: "Views/home.html"
//			//controller: 'bandedNavControl',
//			//json: 'json/globalNav.json'
//
//		}).
//		when("/homePage", {
//			templateUrl: "Views/homePage.html",
//			json: 'json/home.json',
//			controller: 'homeController'
//			
//
//		}).
//		when("/ourMission", {
//			templateUrl: "Views/mission.html",
//			json: 'json/mission.json',
//			controller: 'ourMissionController'
//			
//		}).
//		when("/achievements", {
//			templateUrl: "Views/achievements.html",
//			json: 'json/achievements.json',
//			controller: 'achievementsController'
//			
//		}).
//		when("/whoWeAre", {
//			templateUrl: "Views/whoWeAre.html",
//			json: 'json/whoWeAre.json',
//			controller: 'whoWeAreController'
//			
//		}).
//		when("/myanmar", {
//			templateUrl: "Views/myanmar.html",
//			json: 'json/myanmar.json',
//			controller: 'aboutMyanmarController'
//			
//		}).
//		when("/globalNav", {
//			templateUrl: "Navigation/bandedNavTemplate.html",
//			controller: 'bandedNavControl',
//			json: 'json/globalNav.json'
//
//		}).
//		when("/view2", {
//			templateUrl: "view2/view2.html",
//			controller: 'CarouselDemoCtrl'
//		}).
//		when("/c7bh", {
//			templateUrl: "Views/c7bh.html"/*,
//			controller: 'CarouselControl',
//			json: 'json/carousel.json'*/
//			
//		}).
//		when("/c7bhTest", {
//			templateUrl: "view1/c7bhTest.html"/*,
//			controller: 'CarouselControl',
//			json: 'json/carousel.json'*/
//			
//		}).
//		otherwise({redirectTo: '/globalNav'})
//		//otherwise({redirectTo: '/view1'})
//}]);
