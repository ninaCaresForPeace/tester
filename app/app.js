/* !app.js */
'use strict';
(function() {
	// Declare app level module which depends on views, and components
	var myApp = angular.module('myApp', [
	  'ngRoute',
	  'sn.skrollr',
	  'ngAnimate',
	  'ui.bootstrap',
	  'myApp.version'
	]).config(["snSkrollrProvider", function(snSkrollrProvider) {
	  snSkrollrProvider.config = { smoothScrolling: true,};
	  console.log("after config");
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
		when("/globalNav", {
			templateUrl: "Navigation/bandedNavTemplate.html",
			controller: 'bandedNavControl',
			json: 'json/globalNav.json'

		}).
		otherwise({redirectTo: '/homePage'})
	}]);
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
