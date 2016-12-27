var gulp = require('gulp'),


  coffee = require('gulp-coffee'),
  uglify = require('gulp-uglify'),
  rename = require('gulp-rename'),
  less = require('gulp-less'),
  csso = require('gulp-csso');



gulp.task('js', function () {
  return gulp.src('./templates/coffee/*.coffee')
    .pipe(coffee({
      bare: false
    }))
    .pipe(gulp.dest('./templates/js/'))
    .pipe(rename(function(path){
      path.basename += '.min';
      return path;
   }))
    .pipe(uglify())
    .pipe(gulp.dest('templates/js/'));
});



gulp.task('css', function () {
  return gulp.src('./templates/less/*.less')
    .pipe(less())
    .pipe(gulp.dest('templates/css/'))
    .pipe(rename(function(path){
      path.basename += '.min';
      return path;
   }))
    .pipe(csso())
    .pipe(gulp.dest('templates/css/'));
});

gulp.task('default', ['js', 'css']);
