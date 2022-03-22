let gulp = require('gulp');

//copy HTML
gulp.task('html', () => {
  return gulp.src(['src/**/*.html']).pipe(gulp.dest('dist/'));
});

//copy PHP
gulp.task('php', () => {
  return gulp.src(['src/**/*.php']).pipe(gulp.dest('dist/'));
});
