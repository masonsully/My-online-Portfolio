'use strict';
 
var gulp = require('gulp');
var sass = require('gulp-sass');

var SCSS_SRC = './src/scss';
var SCSS_DEST = './src/css';
 
sass.compiler = require('node-sass');
 
gulp.task('sass', function () {
  return gulp.src('./sass/**/*.scss')
    .pipe(sass().on('error', sass.logError))
    .pipe(gulp.dest('./css'));
});
 
gulp.task('sass:watch', function () {
  gulp.watch('./sass/**/*.scss', ['sass']);
});

gulp.task('default', [watch_SCSS]);