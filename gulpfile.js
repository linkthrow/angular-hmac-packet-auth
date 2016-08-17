var gulp  = require('gulp');
var gutil = require('gulp-util');

var concat = require('gulp-concat');
var cleanCss = require('gulp-clean-css');
var uglify = require('gulp-uglify');
var sass   = require('gulp-sass');
var rename = require('gulp-rename');

gulp.task('build-js', function() {
  return gulp.src('src/js/**/*.js')
    .pipe(concat('angular-plyr.min.js'))
    .pipe(uglify())
    .pipe(gulp.dest('dist'));
});

gulp.task('build-css', function() {
  return gulp.src('src/styles/**/*.scss')
    .pipe(sass())
    .pipe(concat('angular-plyr.min.css'))
    .pipe(cleanCss())
    .pipe(gulp.dest('dist'));
});

gulp.task('production', ['build-js', 'build-css']);
gulp.task('default', ['production']);
