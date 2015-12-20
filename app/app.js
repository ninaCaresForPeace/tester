'use strict';

// Declare app level module which depends on views, and components
angular.module('myApp', ['sn.skrollr',
  'ngRoute',
  'myApp.view1',
  'myApp.view2',
  //'myApp.globalNav',
  'myApp.version'
]) //;

//var myApp = angular.module("myApp", ["sn.skrollr"]);
.config(["snSkrollrProvider", function(snSkrollrProvider) {
  snSkrollrProvider.config = {smoothScrolling: true};
}]);

/*.


// 1. configure skrollr in your app config
var myApp = angular.module("myApp", ["sn.skrollr"]);
myApp.config(["snSkrollrProvider", function(snSkrollrProvider) {
  snSkrollrProvider.config = { smoothScrolling: true, ... };
}]);

// 2. initialise skrollr at runtime
myApp.run(["snSkrollr", function(snSkrollr) {
  snSkrollr.init();
}])


config(['$routeProvider', function($routeProvider) {
	debugger;
  //$routeProvider.otherwise({redirectTo: '/view1'});
	$routeProvider.
		when("/globalNav", {
//			templateUrl: "bandedNavTemplate.html",
//			controller: 'bandedNavControl'
			templateUrl: "Navigation/bandedNavTemplate.html",
			controller: 'Navigation/bandedNavControl',
			appData: 'json/globalNav.json'
		}).
		when("/view2", {
			templateUrl: "view2/view2.html",
			controller: 'CarouselDemoCtrl'
		}).
		when("/view1", {
			templateUrl: "view1/view1.html",
			controller: 'View1Ctrl'
		}).
		otherwise({redirectTo: '/view1'})
}]);*/
