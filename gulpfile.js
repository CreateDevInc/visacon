const gulp = require('gulp');
const pug = require('gulp-pug');
 
gulp.task('views', function buildHTML() {
  return gulp.src('./app/src/pug/*.pug')
  .pipe(pug())
  .pipe(gulp.dest('./app/dist'));
});