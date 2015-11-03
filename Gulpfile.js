var gulp 		= require('gulp');
var sass 		= require('gulp-sass');
var concatCss 	= require('gulp-concat-css');

//Compile sass files
//gulp.task('sass', function () {
////	console.log('testing: ' +  gulp.src('app/sass/style.scss'));
//    gulp.src('app/sass/style.scss')
//        .pipe(sass().on('error', sass.logError))
//        .pipe(gulp.dest('app/css'));
//  //  console.log('ending: ' +  gulp.dest('app/css/'));
//});
gulp.task('styles', function() {
	//debugger;
    gulp.src('app/sass/**/*.scss')
        .pipe(sass().on('error', sass.logError))
        //.pipe(gulp.dest('.'));
       .pipe(gulp.dest('app/css/'));
});

//Watch task
gulp.task('watchStyles',function() {
    gulp.watch('app/sass/**/*.scss',['styles']);
});

gulp.task('concat', function () {
	//gulp.watch('app/sass/**/*.scss',['styles']);
	return gulp.src('app/css/**/*.css')
		.pipe(concatCss('styles/bundle.css'))
		.pips(gulp.dest('out/'));
});

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