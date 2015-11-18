'use strict';

var app = angular.module('myApp');

//TODO:handle tab thrus and 
app.directive("clickTab", function () {
	return {
		 link: function(scope, element) { 
	        	element.bind('click', function () {
	        		debugger;
	                element.toggleClass("open");
	            });
		 }
	}

});

app.directive("band", function () {
	return {
		restrict: 'E',
		transclude: true,
		template:'<div class="band container-fluid">' +
				'<div ng-transclude></div> </div>',
		replace: true
	}
	
});

app.directive("carouselClick", function () {
	return {
		link: function(scope, element) { 
        	element.bind('click', function () {
        		debugger;
        		scope.interval = -1;
                //element.toggleClass("open");
            });
		}
	}
});
//
//<picture>
//<source media="(min-width: 40em)"
//  srcset="big.jpg 1x, big-hd.jpg 2x">
//<source 
//  srcset="small.jpg 1x, small-hd.jpg 2x">
//<img src="fallback.jpg" alt="">
//</picture>
//<img src="small.jpg"
//    srcset="large.jpg 1024w, medium.jpg 640w, small.jpg 320w"
//    sizes="(min-width: 36em) 33.3vw, 100vw"
//    alt="A rad wolf">
//data-ng-src="{{slide.image}}" alt="{{slide.altTag}}" width="{{slide.width}}" height="{{slide.height}}">
//app.directive("pictureFill", function () {
//	return {
//		restrict: 'E',
//		transclude: true,
//		template:'<img data-ng-src="{{image.smSrc}}"' +
//				'srcset="{{image.lgSrc}} 1024w, {{image.mSrc}} 640w, {{image.smSrc}} 320w"' +
//				'alt="{{image.altTag}}">'
//				'<div ng-transclude></div> </div>',
//		replace: true
//	}
//	
//});