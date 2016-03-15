var gulp = require('gulp');
var postcss = require('gulp-postcss');
var csswring = require('csswring');
var precss = require('precss');
var autoprefixer = require('autoprefixer-core');

gulp.task('styles', function(){
	var processors = [
		precss(),
		autoprefixer({browsers:['last 2 version']}),
		csswring
	];

	return gulp.src('main.css')
				.pipe(postcss(processors))
				.pipe(gulp.dest('./css'));
});

gulp.task('watch:styles', function(){
	gulp.watch('*.css',['styles']);
});
