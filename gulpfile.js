var	gulp	= require('gulp'),
	gutil 	= require('gulp-util'),
	sass 	= require('gulp-sass'),
	concat	= require('gulp-concat'),
	connect	= require('gulp-connect');
 
gulp.task('sass', function () {
	gulp.src('./scss/*.scss')
	    .pipe(sass({errLogToConsole: true}))
	    .pipe(gulp.dest('./css/tmp/'))
});
 
gulp.task('concat', function(){
	gulp.src('./css/tmp/*.css')
		.pipe(concat('style.css'))
		.pipe(gulp.dest('./css/'));
});
 
gulp.task('reload', function (){
	gulp.src('./index.html') //optimize!
		.pipe(connect.reload());
});
 
gulp.task('webserver', function (){
	connect.server({
		livereload: true
	});
});
 
gulp.task('watch', function(){
	gulp.watch('./scss/*.scss', ['sass', 'concat', 'reload']);
	gulp.watch('./index.html', ['reload']);
});
 
gulp.task('default', ['sass', 'concat', 'webserver', 'watch']);