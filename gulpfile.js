var gulp  = require('gulp');

var concat = require('gulp-concat');
var uglify = require('gulp-uglify');
var rename = require('gulp-rename');

gulp.task('build-js', function() {
  return gulp.src('src/js/**/*.js')
    .pipe(concat('linkthrow-hmac-packet-auth.min.js'))
    .pipe(uglify())
    .pipe(gulp.dest('dist'));
});

gulp.task('production', ['build-js']);
gulp.task('default', ['production']);
