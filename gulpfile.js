var gulp = require('gulp');
var sass = require('gulp-sass');
var postcss = require('gulp-postcss');
var csswring = require('csswring');
var autoprefixer = require('autoprefixer-core');

gulp.task('styles', function(){
	var processors = [
		autoprefixer({browsers:['last 2 version']}),
		csswring
	];

	return gulp.src('*.scss')
				.pipe(sass())
				.pipe(postcss(processors))
				.pipe(gulp.dest('./css'));
});

gulp.task('watch:styles', function(){
	gulp.watch('*.scss',['styles']);
});
