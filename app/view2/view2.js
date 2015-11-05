'use strict';

angular.module('myApp.view2', ['ngRoute','ngAnimate','ui.bootstrap'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/view2', {
    templateUrl: 'view2/view2.html',
    controller: 'CarouselDemoCtrl'//'View2Ctrl'
  });
}])

.controller('CarouselDemoCtrl', function ($scope) {
	  $scope.myInterval = 5000;
	  $scope.noWrapSlides = false;
	  var slides = $scope.slides = [];
	  $scope.addSlide = function() {
	    var newWidth = 600 + slides.length + 1;
	    slides.push({
	      image: '//placekitten.com/' + newWidth + '/300',
	      text: ['More','Extra','Lots of','Surplus'][slides.length % 4] + ' ' +
	        ['Cats', 'Kittys', 'Felines', 'Cutes'][slides.length % 4]
	    });
	  };
	  for (var i=0; i<4; i++) {
	    $scope.addSlide();
	  }
	});

//.controller('View2Ctrl', [function() {
//
//}]);
