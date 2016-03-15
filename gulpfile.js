var gulp = require('gulp');
var postcss = require('gulp-postcss');
var sourcemaps = require('gulp-sourcemaps');

var gulpJade = require('gulp-jade');

var filter = require('./src/data/filter.js');
var list = require('./src/data/list.js');
gulp.task('html', function() {
  return gulp.src('./src/jade/index.jade')
    .pipe(gulpJade({
      locals: {
        categories: filter,
        listItems: list
      }
    }))
    .pipe(gulp.dest('./dist/'));
});

gulp.task('css', function() {

  return gulp.src('src/style/index.css')
    .pipe(sourcemaps.init())
    .pipe(postcss([require('autoprefixer'), require('precss'),require('postcss-mixins')]))
    //.pipe(postcss([ autoprefixer({ browsers: ['last 2 versions'] }) ]))
    .pipe(sourcemaps.write('.'))
    .pipe(gulp.dest('dist/css/'));
});

gulp.task('js', function(){
  return gulp.src('src/js/*.js')
  .pipe(gulp.dest('dist/js/'));
});

gulp.task('watch', function() {
  gulp.watch('src/style/*.css', ['css']);
  gulp.watch('src/jade/*.jade', ['html']);
  gulp.watch('src/js/*.js', ['js']);
});

gulp.task('default', ['css', 'html', 'js', 'watch']);
