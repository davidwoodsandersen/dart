const gulp = require('gulp');
const path = require('path');
const babelify = require('babelify');
const browserify = require('browserify');
const uglify = require('gulp-uglify');
const rename = require('gulp-rename');
const replace = require('gulp-replace');
const concat = require('gulp-concat');
const jsdoc = require('gulp-jsdoc-to-markdown');
const jest = require('gulp-jest');
const eslint = require('gulp-eslint');
const buffer = require('vinyl-buffer');
const source = require('vinyl-source-stream');
const config = require('./package.json');

gulp.task('default', function() {
	var outputPath = path.resolve(__dirname, config.vars.outputPath);
	var fileName = config.vars.fileName;
	var bundler = browserify('src/index.js');

	bundler.transform(babelify);

	bundler.bundle()
		.on('error', function(err) { console.log(err); })
		.pipe(source('index.js'))
		.pipe(buffer())
		.pipe(uglify())
		.pipe(replace('$GLOBAL_OBJECT$', () => config.vars.globalVarName))
		.pipe(rename({
			basename: fileName,
			extname: '.js'
		}))
		.pipe(gulp.dest(outputPath));

		console.log(`${fileName}.js created at ${outputPath}`);
});

gulp.task('docs', function() {
	gulp.src(['./src/*.js', './src/**/*.js'])
		.pipe(concat('api.md'))
		.pipe(jsdoc())
		.pipe(gulp.dest('./docs'));
});

gulp.task('test', function() {
	var jestConfig = {
		collectCoverage: true,
		collectCoverageFrom: [
			'<rootDir>/src/*.js',
			'<rootDir>/src/**/*.js',
		],
		coverageDirectory: 'coverage',
		coverageReporters: ['json'],
		preprocessorIgnorePatterns: [
			'<rootDir>/lib/',
			'<rootDir>/node_modules/',
		],
		testResultsProcessor: 'jest-junit',
		automock: false,
		testURL: 'http://localhost/',
		reporters: ['default', '<rootDir>/tests/reporter.js']
	};

	gulp.src('./tests').pipe(jest.default(jestConfig));
});

gulp.task('lint', function() {
	gulp.src(['./src/*.js', './src/**/*.js'])
		.pipe(eslint())
		.pipe(eslint.format())
		.pipe(eslint.failAfterError());
});

gulp.task('watch', function() {
	gulp.watch(['./src/*.js', './src/**/*.js'], ['test', 'docs', 'default']);
});
