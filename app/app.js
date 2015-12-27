'use strict';

// Declare app level module which depends on views, and components
angular.module('myApp', [
  'ngRoute',
  'sn.skrollr',
  'myApp.view1',
  'myApp.view2',
  //'myApp.globalNav',
  'myApp.version'
]).config(["snSkrollrProvider", function(snSkrollrProvider) {
	debugger;
  snSkrollrProvider.config = { smoothScrolling: true,};
  console.log("after config");
}]);

// 2. initialise skrollr at runtime
var myApp = angular.module('myApp');
myApp.run(["snSkrollr", function(snSkrollr) {
	debugger;
  snSkrollr.init();
  console.log("in init ");
}]);
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
