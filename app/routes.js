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
		when("/home", {
			templateUrl: "Views/home.html"
			//controller: 'bandedNavControl',
			//json: 'json/globalNav.json'

		}).
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
		when("/globalNav", {
			templateUrl: "Navigation/bandedNavTemplate.html",
			controller: 'bandedNavControl',
			json: 'json/globalNav.json'

		}).
		when("/view2", {
			templateUrl: "view2/view2.html",
			controller: 'CarouselDemoCtrl'
		}).
		when("/c7bh", {
			templateUrl: "Views/c7bh.html"/*,
			controller: 'CarouselControl',
			json: 'json/carousel.json'*/
			
		}).
		when("/c7bhTest", {
			templateUrl: "view1/c7bhTest.html"/*,
			controller: 'CarouselControl',
			json: 'json/carousel.json'*/
			
		}).
		otherwise({redirectTo: '/globalNav'})
		//otherwise({redirectTo: '/view1'})
}]);
