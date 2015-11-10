
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
angular.module('myApp')//.globalNav')
	.controller('bandedNavControl',[ '$scope', '$http', function ($scope, $http) {

		$scope.data = [];
		$http.defaults.headers.common['Accept'] = 'application/json';
		  $http.defaults.headers.common['Content-Type'] = 'application/json';
		var res = $http.get("./json/globalNav.json");
		//debugger;
		res.then(function(results) {
			//success;
			debugger;
			console.log("Success: " + results.status +" Data: " + results);
			
			$scope.data = results.data;
			console.log("Success: "+  $scope.data.menu[0].title )
		}, function(results) {
			//error
			debugger;
			console.log("Error: " +results.data + "; " + results.data);
		});
		debugger;
//		var response = $http.get('./json/globalNav.json');
//		response.success
//		$http.get('./json/globalNav.json').success(function (data){
//			debugger;
//			$scope.data = data;
//		});

//		$http.get("/json/globalNav.json")
//			.then(function(results) {
//				//success;
//				debugger;
//				console.log("Success: " + results.status);
//				$scope.data = results.data;
//			}, function(results) {
//				//error
//				debugger;
//				console.log("Error: " +results.data + "; " + results.status);
//			});
		//$scope.data = appData.data;
		debugger;
		
//		  $scope.myInterval = 5000;
//		  $scope.noWrapSlides = false;
//		  var slides = $scope.slides = [];
//		  $scope.addSlide = function(img, txt) {
//		    var newWidth = 600 + slides.length + 1;
//		    slides.push({
//		      image: img,
//		      text: txt
//		    });
//		  };
//		  
//		  for (var i=0; i<4; i++) {
//			  var img;
//			  var text;
//			  switch(i) {
//			  case 0:
//			        img = './images/careforpeace.png';
//			        text = '';
//			        break;
//			    case 1:
//			        img = './images/girlswithfacepaint.png';
//			        text = "Thanaka: Myanmar's fragrant, versatile cosmetic";
//			        break;
//			    case 2:
//			        img = './images/happyboys.png';
//			        text = 'Young buddhist monks';
//			        break;
//			    case 3:
//			        img = './images/newClinic.png';
//			        text = "Making it happen!";
//			        break;
//			   
//			}
//		    $scope.addSlide(img, text);
		//  }
		}]);

