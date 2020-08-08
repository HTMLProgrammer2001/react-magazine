//Gulp modules
const gulp = require('gulp');
const concat = require('gulp-concat');
const cleanCSS = require('gulp-clean-css');
const uglify = require('gulp-uglify');
const autoprefixer = require('gulp-autoprefixer');
const pugCompiler = require('gulp-pug');
const sass = require('gulp-sass');
const imagemin = require('gulp-imagemin');
const rename = require('gulp-rename');
const sourceMap = require('gulp-sourcemaps');
const eslint = require('gulp-eslint');

const ts = require('gulp-typescript');
const tsProject = ts.createProject(require('./tsconfig.json'));

const browserSync = require('browser-sync').create();

//Webpack configuration
const webpackStream = require('webpack-stream');
const webpackConfig = require('./webpack.config.js');
const webpack = require('webpack');

//Set ruby compiler to use
sass.compiler = require('node-sass');

//Paths
const SRC_PATH = 'resources/app',
	DIST_PATH = 'public';


function scss(){
	//SCSS styles

	return gulp.src([
		`${SRC_PATH}/scss/pages/**/*.page.scss`,
		'node_modules/react-toastify/scss/main.scss'
	], {
		allowEmpty: true
	})
		//Create source map
		.pipe(sourceMap.init())
		.pipe(sass().on('error', sass.logError))

		//Postcss
		.pipe(autoprefixer())
		.pipe(cleanCSS())

		//Rename files
		.pipe(rename((path) => ({
			basename: path.basename,
			dirname: './',
			extname: '.css'
		})))

		//Save
		.pipe(concat('bundle.css'))
		.pipe(sourceMap.write())
		.pipe(gulp.dest(`${DIST_PATH}/css`))

		//Reload
		.pipe(browserSync.stream());
}

function javascript(){
	return gulp.src(`${SRC_PATH}/js/**/*.t*`)

		//Linters
		// .pipe(eslint())
		// .pipe(eslint.formatEach('compact', process.stderr))

		// //Create source maps
		// .pipe(sourceMap.init())

		//Typescript
		.pipe(tsProject()).js
		.on('error', function(err){
			console.log('Typescript error', err);
			this.emit('end');
		})
		// .pipe(sourceMap.write('.'))

		//Save
		.pipe(gulp.dest(`${SRC_PATH}/es5`));
}

function webpackTask(){
	return gulp
		.src(`${SRC_PATH}/es5/main.js`)
		.pipe(webpackStream({
			...webpackConfig,
			devtool: 'none',
			mode: 'production'
		}, webpack))
		.on('error', function (err) {
			console.error('WEBPACK ERROR', err);
			this.emit('end');
		})
		.pipe(uglify())
		.pipe(gulp.dest(`${DIST_PATH}/js/`))
		.pipe(browserSync.stream());
}

function image() {
	return gulp.src(`${SRC_PATH}/image/**/*.*`)
		//Minify
		.pipe(imagemin())
		.pipe(gulp.dest(`${DIST_PATH}/image/`))
		.pipe(browserSync.stream());
}

function pug() {
	return gulp.src(`${SRC_PATH}/pug/**/*.page.pug`, {
		allowEmpty: true
	})
		.pipe(pugCompiler({pretty: true}))
		.pipe(rename((path) => ({
			basename: path.basename.slice(0, path.basename.lastIndexOf('.')),
			dirname: path.dirname.split('\\').slice(0, -1).join('\\'),
			extname: '.html'
		})))
		.pipe(gulp.dest(`${DIST_PATH}`))
		.pipe(browserSync.stream());
}

function watch(){
	browserSync.init({
		proxy: '127.0.0.1:8000'
	});

	gulp.watch(`${SRC_PATH}/pug/**/*.page.pug`, pug).on('change', browserSync.reload);
	gulp.watch(`${SRC_PATH}/scss/**/*.scss`, scss);
	gulp.watch(`${SRC_PATH}/js/**/*.tsx`, {
		events: 'change',
		ignoreInitial: false,
		queue: false
	}, gulp.series(javascript, webpackTask));
	gulp.watch(`${SRC_PATH}/js/**/*.ts`, {
		events: 'change',
		ignoreInitial: false,
		queue: false
	}, gulp.series(javascript, webpackTask));
}

function build(){
	return gulp.parallel(
		pug, scss, gulp.series(javascript, webpackTask), image
	);
}

gulp.task('scss', scss);
gulp.task('html', pug);
gulp.task('js', gulp.series(javascript, webpackTask));
gulp.task('image', image);
gulp.task('watch', watch);
gulp.task('build', build());
gulp.task('default', build());
