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



