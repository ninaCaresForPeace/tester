'use strict';

// Declare app level module which depends on views, and components
angular.module('myApp', [
  'ngRoute',
  'myApp.view1',
  'myApp.view2',
  'myApp.globalNav',
  'myApp.version'
]).
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
}]);
