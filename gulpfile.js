var gulp          = require('gulp');
var sass          = require('gulp-sass');
var rework        = require('gulp-rework');
var pseudoclasses = require('rework-pseudo-classes');
var jade          = require('gulp-jade');
var tap           = require('gulp-tap');
var serve         = require('gulp-serve');


gulp.task('css', function(){
	return gulp.src('./tests/style.scss')
		.pipe(sass())
		.pipe(rework(pseudoclasses({preserveBeforeAfter: true})))
		.pipe(gulp.dest('./tests/'));
});

gulp.task('html', function(){
	return gulp.src('./tests/index.jade')
		.pipe(jade())
		.pipe(gulp.dest('./tests/'));
});

gulp.task('serve', serve('./tests/'));

gulp.task('default', ['css', 'html', 'serve'], function(){
	gulp.watch('./tests/style.scss', ['css']);
	gulp.watch('./tests/index.jade', ['html']);
});