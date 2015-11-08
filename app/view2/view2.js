'use strict';

angular.module('myApp.view2', ['ngRoute','ngAnimate','ui.bootstrap'])

//.config(['$routeProvider', function($routeProvider) {
//  $routeProvider.when('/view2', {
//    templateUrl: 'view2/view2.html',
//    controller: 'CarouselDemoCtrl'//'View2Ctrl'
//  });
//}])

.controller('CarouselDemoCtrl', function ($scope) {
	  $scope.myInterval = 5000;
	  $scope.noWrapSlides = false;
	  var slides = $scope.slides = [];
	  $scope.addSlide = function(img, txt) {
	    var newWidth = 600 + slides.length + 1;
	    slides.push({
	      image: img,
	      text: txt
	    });
	  };
	  
	  for (var i=0; i<4; i++) {
		  var img;
		  var text;
		  switch(i) {
		  case 0:
		        img = './images/careforpeace.png';
		        text = '';
		        break;
		    case 1:
		        img = './images/girlswithfacepaint.png';
		        text = "Thanaka: Myanmar's fragrant, versatile cosmetic";
		        break;
		    case 2:
		        img = './images/happyboys.png';
		        text = 'Young buddhist monks';
		        break;
		    case 3:
		        img = './images/newClinic.png';
		        text = "Making it happen!";
		        break;
		   
		}
	    $scope.addSlide(img, text);
	  }
	});

//.controller('View2Ctrl', [function() {
//
//}]);
