const gulp = require('gulp');
const babelify = require('babelify');
const browserify = require('browserify');
const uglify = require('gulp-uglify');
const rename = require('gulp-rename');
const buffer = require('vinyl-buffer');
const source = require('vinyl-source-stream');

gulp.task('default', function() {
	var bundler = browserify('src/index.js');
	bundler.transform(babelify);

	bundler.bundle()
		.on('error', function(err) { console.log(err); })
		.pipe(source('index.js'))
		.pipe(buffer())
		.pipe(uglify())
		.pipe(rename({
			basename: 'dart',
			extname: '.js'
		}))
		.pipe(gulp.dest('./lib'));
});