'use strict';

angular.module('myApp') 
.controller('bandedNavControl',['$scope', '$route', 'getJsonService', function ( $scope, $route, getJsonService) {
		var jsonFile = $route.current.$$route.json;
		getJsonService.retrieveJson(jsonFile).then(function(response){ 
			$scope.tabs = response.data.menu;//[0].title;
			$scope.dTabs = response.data.menu;
			$scope.logo = response.data.logo;
		});

}]);
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



