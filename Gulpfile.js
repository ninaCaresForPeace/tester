/* !Gulpfile.js */ 
'use strict';
(function() {
	var gulp 		= require('gulp');
	var sass 		= require('gulp-sass');
	var concatCss 	= require('gulp-concat-css');
	var uglify 		= require('gulp-uglify');
	var rename 		= require('gulp-rename');
	var concat 		= require('gulp-concat');
	var streamqueue  = require('streamqueue');
	//var template = require('gulp-template-compile');
	//var obfuscate 	= require('gulp-obfuscate');
	var jsDest = 'app/dist/scripts';
	
	//concatenate js scripts to one file, rename file to min and then
	//further reduce size by removing whitespace and cpmments
	//TODO: ADD IN THE GULP-CONCAT AND DOUBLE CHECK TO SEE IF THESE FILES HAVE 
	//HAD THE VARIABLES CHANGED TO UN-MEANINGFUL VAR NAMES...THEN COMBINE THESE WITH
	//THE THIRD PART JAVASCRIPT FILES
	//Watch task - combines and reduces JS files to one and reduces size to aid in performance
	gulp.task('scripts', function() {
		//return gulp.src(jsFiles)
		return streamqueue({ objectMode: true },
				gulp.src('app/js/angular-animate.js'),
				gulp.src('app/bower_components/angular-route/angular-route.js'),
				gulp.src('app/javascripts/ui-bootstrap-tpls-0.14.3.js'),
				
		        gulp.src('app/js/routes.js'),
		        gulp.src('app/js/appFactories.js'),
		        gulp.src('app/js/pageControllers.js'),
		        gulp.src('app/js/bandedNavController.js'),
		        gulp.src('app/js/directives.js'),
		        
		        gulp.src('app/components/version/version.js'),
		        gulp.src('app/components/version/version-directive.js'),
		        gulp.src('app/components/version/interpolate-filter.js'),

		        gulp.src('app/bower_components/angular-skrollr/dist/angular-skrollr.js'),
		        //gulp.src('bower_components/angular-skrollr/dist/angular-skrollr.js'),
		        gulp.src('app/bower_components/picturefill/picturefill.js'),
		        gulp.src('app/bower_components/angular-picturefill/angular-picturefill.js')
		    )
		.pipe(concat('scripts.js'))
		.pipe(gulp.dest(jsDest))
		.pipe(rename('scripts.min.js'))
		.pipe(uglify({mangle: true}))
		.pipe(gulp.dest(jsDest));
		
	});
//	gulp.task('templates', function () {
//		gulp.src('app/templates/**/*.html')
//			.pipe(template())
//			.pipe(concat('templates.js'))
//			.pipe(gulp.dest('dist/html/'));
//	});

	//Watch task - check for changes in scss files
	gulp.task('styles', function() {
		gulp.src('app/styles/**/*.scss')
	        .pipe(sass().on('error', sass.logError))
	      // .pipe(gulp.dest('app/css/'));app/dist/scripts
	        .pipe(gulp.dest('app/dist/css/'));
	});

	//Watch task - check for changes in scss files continuously
	gulp.task('watchStyles',function() {
	    gulp.watch('app/sass/**/*.scss',['styles']);
	});
	//Concatenate CSS and send to one file
	gulp.task('concat', function () {
		return gulp.src('app/css/**/*.css')
			.pipe(concatCss('styles/bundle.css'))
			.pips(gulp.dest('out/'));
	});
})();




//(function() {
//	var gulp 		= require('gulp');
//	var sass 		= require('gulp-sass');
//	var concatCss 	= require('gulp-concat-css');
//
//	//Watch task - check for changes in scss files
//	gulp.task('styles', function() {
//		gulp.src('app/styles/**/*.scss')
//	        .pipe(sass().on('error', sass.logError))
//	       .pipe(gulp.dest('app/css/'));
//	});
//
//	//Watch task - check for changes in scss files continuously
//	gulp.task('watchStyles',function() {
//	    gulp.watch('app/sass/**/*.scss',['styles']);
//	});
//	//Concatenate CSS and send to one file
//	gulp.task('concat', function () {
//		return gulp.src('app/css/**/*.css')
//			.pipe(concatCss('styles/bundle.css'))
//			.pips(gulp.dest('out/'));
//	});
//})();


//BELOW COMMENTED OUT 2/26
//var gulp 		= require('gulp');
//var sass 		= require('gulp-sass');
//var concatCss 	= require('gulp-concat-css');
//
////Compile sass files
////gulp.task('sass', function () {
//////	console.log('testing: ' +  gulp.src('app/sass/style.scss'));
////    gulp.src('app/sass/style.scss')
////        .pipe(sass().on('error', sass.logError))
////        .pipe(gulp.dest('app/css'));
////  //  console.log('ending: ' +  gulp.dest('app/css/'));
////});
//gulp.task('styles', function() {
//	//debugger;
//   // gulp.src('app/sass/**/*.scss')  //11/4
//	gulp.src('app/styles/**/*.scss')
//        .pipe(sass().on('error', sass.logError))
//        //.pipe(gulp.dest('.'));
//       .pipe(gulp.dest('app/css/'));
//});
//
////Watch task
//gulp.task('watchStyles',function() {
//    gulp.watch('app/sass/**/*.scss',['styles']);
//});
//
//gulp.task('concat', function () {
//	//gulp.watch('app/sass/**/*.scss',['styles']);
//	return gulp.src('app/css/**/*.css')
//		.pipe(concatCss('styles/bundle.css'))
//		.pips(gulp.dest('out/'));
//});

//
//var gulp = require('gulp');
//var sass = require('gulp-sass');
//
//gulp.task('styles', function() {
//    gulp.src('sass/**/*.scss')
//        .pipe(sass().on('error', sass.logError))
//        .pipe(gulp.dest('./css/'));
//});
//
////Watch task
//gulp.task('default',function() {
//    gulp.watch('sass/**/*.scss',['styles']);
//});