"use strict";
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var gulp = require('gulp');
var concat = require('gulp-concat');
var cleanCSS = require('gulp-clean-css');
var uglify = require('gulp-uglify');
var autoprefixer = require('gulp-autoprefixer');
var pugCompiler = require('gulp-pug');
var sass = require('gulp-sass');
var imagemin = require('gulp-imagemin');
var through = require('through2');
var rename = require('gulp-rename');
var sourceMap = require('gulp-sourcemaps');
var eslint = require('gulp-eslint');
var browserSync = require('browser-sync').create();
var webpackStream = require('webpack-stream');
var webpackConfig = require('./webpack.config.js');
var webpack = require('webpack');
sass.compiler = require('node-sass');
var SRC_PATH = 'resources/app', DIST_PATH = 'public';
function scss() {
    return gulp.src(SRC_PATH + "/scss/pages/**/*.page.scss", {
        allowEmpty: true
    })
        .pipe(sourceMap.init())
        .pipe(sass().on('error', sass.logError))
        .pipe(autoprefixer())
        .pipe(cleanCSS())
        .pipe(rename(function (path) { return ({
        basename: path.basename,
        dirname: './',
        extname: '.css'
    }); }))
        .pipe(concat('bundle.css'))
        .pipe(sourceMap.write())
        .pipe(gulp.dest(DIST_PATH + "/css"))
        .pipe(browserSync.stream());
}
function js(mode) {
    return function javascript() {
        return gulp.src(SRC_PATH + "/js/main.tsx", {
            allowEmpty: true
        })
            .pipe(eslint())
            .pipe(eslint.formatEach('compact', process.stderr))
            .pipe(eslint.failAfterError())
            .pipe(webpackStream(__assign(__assign({}, webpackConfig), { mode: mode, devtool: 'source-map' }), webpack)).on('error', function (err) {
            console.error('WEBPACK ERROR', err);
            this.emit('end');
        })
            .pipe(sourceMap.init({ loadMaps: true }))
            .pipe(through.obj(function (file, enc, cb) {
            var isSourceMap = /\.map$/.test(file.path);
            if (!isSourceMap) {
                this.push(file);
            }
            cb();
        }))
            .pipe(concat('bundle.js'))
            .pipe(sourceMap.write('.'))
            .pipe(gulp.dest(DIST_PATH + "/js"))
            .pipe(browserSync.stream());
    };
}
function image() {
    return gulp.src(SRC_PATH + "/image/**/*.*")
        .pipe(imagemin())
        .pipe(gulp.dest(DIST_PATH + "/image/"))
        .pipe(browserSync.stream());
}
function pug() {
    return gulp.src(SRC_PATH + "/pug/**/*.page.pug", {
        allowEmpty: true
    })
        .pipe(pugCompiler({ pretty: true }))
        .pipe(rename(function (path) { return ({
        basename: path.basename.slice(0, path.basename.lastIndexOf('.')),
        dirname: path.dirname.split('\\').slice(0, -1).join('\\'),
        extname: '.html'
    }); }))
        .pipe(gulp.dest("" + DIST_PATH))
        .pipe(browserSync.stream());
}
function watch() {
    browserSync.init({
        proxy: '127.0.0.1:8000'
    });
    gulp.watch(SRC_PATH + "/pug/**/*.page.pug", pug).on('change', browserSync.reload);
    gulp.watch(SRC_PATH + "/scss/**/*.scss", scss);
    gulp.watch(SRC_PATH + "/js/**/*.tsx", js('development'));
    gulp.watch(SRC_PATH + "/js/**/*.ts", js('development'));
}
function build() {
    return gulp.parallel(pug, scss, js('production'), image);
}
gulp.task('scss', scss);
gulp.task('html', pug);
gulp.task('js', js('production'));
gulp.task('image', image);
gulp.task('watch', watch);
gulp.task('build', build());
gulp.task('default', build());
//# sourceMappingURL=gulpfile.js.map