'use strict';

// Declare app level module which depends on views, and components
angular.module('myApp').//,['ngRoute','getJsonService'
//  'ngRoute',
//  'myApp.view1',
//  'myApp.view2',
//  'myApp.globalNav',
//  'myApp.version'
//]).
config(['$routeProvider', function($routeProvider) {
//config(['$routeProvider', 'getJsonService', function($routeProvider,getJsonService) {
	$routeProvider.
		when("/globalNav", {
			templateUrl: "Navigation/bandedNavTemplate.html",
			controller: 'bandedNavControl',
			json: 'json/globalNav.json'
//			resolve: {
//				'jsons': function(getJsonService) {
//					return getJsonService.retrieveJson('json/globalNav.json');
//				}
//						//'json/globalNav.json'
//			}
		}).
		when("/view2", {
			templateUrl: "view2/view2.html",
			controller: 'CarouselDemoCtrl'
		}).
		when("/view1", {
			templateUrl: "view1/view1.html",
			controller: 'View1Ctrl'
		}).
		otherwise({redirectTo: '/globalNav'})
		//otherwise({redirectTo: '/view1'})
}]);
