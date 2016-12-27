var gulp = require('gulp'),


  concat = require('gulp-concat'),
  coffee = require('gulp-coffee'),
  uglify = require('gulp-uglify'),
  rename = require('gulp-rename'),
  less = require('gulp-less'),
  csso = require('gulp-csso');




var path = 'src/coffee/';
var files = [
  path + 'mmg.coffee',
  path + 'Utility/style-detector.coffee',
  path + 'Data/models.coffee',
  path + 'Filter/canvas-filters.coffee',
  path + 'Utility/queue.coffee',
  path + 'Filter/canvas-filter.coffee',
  path + 'View/template.coffee',
  path + 'Utility/queue-singleton.coffee',
  path + 'Utility/queue-simple.coffee',
  path + 'Drawing/drawing-svg.coffee',
  path + 'Drawing/drawing.coffee',
  path + 'View/rows.coffee',
  path + 'View/row.coffee',
  path + 'View/image-view.coffee',
  path + 'Utility/parser.coffee',
  path + 'Utility/image-loader.coffee',
  path + 'View/view.coffee',
  path + 'Data/data-core.coffee',
  path + 'Grid/defaults-core.coffee',
  path + 'Lightbox/swipe.coffee',
  path + 'Lightbox/lightbox-swipe.coffee',
  path + 'Lightbox/lightbox-old.coffee',
  path + 'AJAX/ajax.coffee',
  path + 'Utility/natural-size.coffee',
  path + 'Data/model-builder.coffee',
  path + 'Lightbox/External.coffee',
  path + 'Grid/grid.coffee',
  path + 'gallery.coffee',
  path + 'Templates/simple.coffee'
];


gulp.task('js', function () {
  return gulp.src(files)
    .pipe(concat('bundle.coffee'))
    .pipe(gulp.dest('src/coffee/'))
    .pipe(coffee({
      bare: false
    }))
    .pipe(rename('moon-mega-grid.js'))
    .pipe(gulp.dest('src/js/'))
    .pipe(uglify())
    .pipe(rename('moon-mega-grid.min.js'))
    .pipe(gulp.dest('dest/js/'));
});



gulp.task('css', function () {
  return gulp.src(['src/less/mmg.less', 'src/less/mmg-class-colors.less'])
    .pipe(less())
    .pipe(gulp.dest('src/css/'))
    .pipe(csso())
    .pipe(gulp.dest('dest/css/'));
});

gulp.task('default', ['js', 'css']);
