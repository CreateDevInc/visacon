const pug = require('gulp-pug');
const gulp = require('gulp');
const clean = require('gulp-clean');
 
gulp.task('pug', function buildHTML() {
  return gulp.src('./app/src/pug/*.pug')
  .pipe(pug())
  .pipe(gulp.dest('./app/dist'));
});

// gulp.task('clean-images', function cleanImages() {
//   return gulp.src('./app/dist/images/*', { read: false }).pipe(clean());
// });

gulp.task('images', function moveImagesFolder() {
  return gulp.src('./app/src/images/**/*').pipe(gulp.dest('./app/dist/images'));
});

gulp.task('default', ['pug', 'images']);