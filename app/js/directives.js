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
			    				thisElement.children.click();
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
			 
			templateUrl: './templates/bandedNavTemplate.html'
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
	app.directive('onFinishRender', function ($timeout, $window) {
	    return {
	        restrict: 'A',
	        link: function (scope, element, attr) {
	        	var w = angular.element($window);
	        	
	            if (scope.$last === true) {
	            	var p = element.parent("pf-src");
	            	//debugger;
	            	if( element.parent().find("img").attr("src") === "") {
	            		console.log("NO IMG...CALLING RESIZE");
	            		 $timeout(picturefill);
	            		
	            	}
//	                $timeout(function () {
//	                    scope.$emit('ngRepeatFinished');
//	                });
	            }
	        }
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
