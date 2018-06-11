const pug = require('gulp-pug');
const gulp = require('gulp');
const clean = require('gulp-clean');
const surge = require('surge');

const output = process.env['CRYOMETRIX_BUILD'] === 'prod' ? 'build' : 'dist';
 
gulp.task('pug', function buildHTML() {
  return gulp.src('./app/src/pug/**/*.pug')
  .pipe(pug())
  .pipe(gulp.dest(`./app/${output}`));
});

gulp.task('assets', function moveImagesFolder() {
  return gulp.src('./app/src/assets/**/*').pipe(gulp.dest(`./app/${output}`));
});

gulp.task('default', ['pug', 'assets']);
