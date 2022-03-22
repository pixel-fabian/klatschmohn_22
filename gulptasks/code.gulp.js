let gulp = require('gulp');

//copy HTML
gulp.task('html', function (callback) {
  return gulp.src(['src/**/*.html']).pipe(gulp.dest('dist/'));
  callback();
});

//copy PHP
gulp.task('php', function (callback) {
  return gulp.src(['src/**/*.php']).pipe(gulp.dest('dist/'));
  callback();
});
