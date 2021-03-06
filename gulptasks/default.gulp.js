let gulp = require('gulp'),
  clean = require('gulp-clean');

// clean dist directory
gulp.task('clean', () => {
  return gulp.src('dist/*', { read: false }).pipe(clean());
});

// default task, run for development
gulp.task(
  'default',
  gulp.series(
    ['html', 'php', 'styles', 'webpack', 'assets', 'watch'],
    () => {},
  ),
);

// build for production
gulp.task(
  'build',
  gulp.series(
    ['html', 'php', 'styles', 'webpack-prod', 'assets'],
    (callback) => {
      callback();
    },
  ),
);
