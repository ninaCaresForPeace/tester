
	'use strict';

	//angular.module('myApp.globalNav', ['ngRoute'/*,'ngAnimate'*/',ui.bootstrap'])
/*	angular.module('myApp.globalNav', ['ngRoute','ngAnimate','ui.bootstrap'])/*.
	config(['$routeProvider', function($routeProvider) {
	  $routeProvider.when('/globalNav', {
	    templateUrl: 'Navigation/bandedNavTemplate.html',
	    controller: 'bandedNavControl'
	 //   appData: './json/globalNav.json'
	  });
	}])*/
angular.module('myApp') 
.controller('bandedNavControl',['$scope', '$route', 'getJsonService', function ( $scope, $route, getJsonService) {
	//.controller('bandedNavControl',['$scope', '$route', '$element', 'getJsonService', function ( $scope, $route, $element, getJsonService) {
		//debugger;
		var jsonFile = $route.current.$$route.json;
		getJsonService.retrieveJson(jsonFile).then(function(response){ 
			$scope.tabs = response.data.menu;//[0].title;
			$scope.dTabs = response.data.menu;
//			debugger;
//			$scope.counter = 1;
//			debugger;
////			$scope.clickTab = function () {
////				//var elem = $element;
////				debugger;
////			}
//			function addTabs() {
//				debugger
//			}
//			$scope.addTab = function(){
//				 $scope.counter++;
//				 debugger;
//		         $scope.tabs.push({id:$scope.counter,content:'Any Content'});     
//				
//			}
//
//			$scope.deleteTab = function() {
//				
//			}
		});
			//jsons;
//		getJsonService.retrieveJson(jsonFile).then(function(response){ 
//            $scope.data = response;
//		});
		//$scope.data = [];
		
//		var tabData = $http.get(jsonFile)
//			.then(function(results) {
//			//success;
//			console.log("Success: " + results.status +" Data: " + results);
//			//$scope.data = results.data;
//			console.log("Success: "+  $scope.data.menu[0].title )
//			return results.data;
//			}, function(results) {
//			//error
//			console.log("Error: " +results.data + "; " + results.data);
//		});


		}])
		
		.directive("clickTab", function () {
			return {
				 link: function(scope, element) { 
			        	element.bind('click', function () {
			        		debugger;
			                element.toggleClass("open");
			            });
				 }
			}
       
        });
//        return {
//            restrict: "AE", 
//            link: link, 
//            controller:function($scope,$element){
//                $scope.name2 = 'this is second name';
//                var barGridSection = $element.find('#barGridSection'); //helps to find the child element.
//        }
//        };
   // })


