const gulp = require('gulp');
const babelify = require('babelify');
const browserify = require('browserify');
const uglify = require('gulp-uglify');
const rename = require('gulp-rename');
const replace = require('gulp-replace');
const concat = require('gulp-concat');
const jsdoc = require('gulp-jsdoc-to-markdown');
const buffer = require('vinyl-buffer');
const source = require('vinyl-source-stream');
const config = require('./package.json');

gulp.task('default', function() {
	var bundler = browserify('src/index.js');

	bundler.transform(babelify);

	bundler.bundle()
		.on('error', function(err) { console.log(err); })
		.pipe(source('index.js'))
		.pipe(buffer())
		.pipe(uglify())
		.pipe(replace('$GLOBAL_OBJECT$', () => config.vars.globalVarName))
		.pipe(rename({
			basename: config.vars.fileName,
			extname: '.js'
		}))
		.pipe(gulp.dest('./lib'));
});

gulp.task('docs', function() {
	gulp.src(['./src/*.js', './src/**/*.js'])
		.pipe(concat('api.md'))
		.pipe(jsdoc())
		.pipe(gulp.dest('./docs'));
});
