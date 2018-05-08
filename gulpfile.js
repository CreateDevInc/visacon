const pug = require('gulp-pug');
const gulp = require('gulp');
const clean = require('gulp-clean');
 
gulp.task('pug', function buildHTML() {
  return gulp.src('./app/src/pug/*.pug')
  .pipe(pug())
  .pipe(gulp.dest('./app/dist'));
});

gulp.task('assets', function moveImagesFolder() {
  return gulp.src('./app/src/assets/**/*').pipe(gulp.dest('./app/dist'));
});

gulp.task('default', ['pug', 'assets']);