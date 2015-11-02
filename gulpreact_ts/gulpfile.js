var argv = require('yargs').argv;
var gulp = require('gulp');
var gulpif = require('gulp-if');
var source = require('vinyl-source-stream');
var buffer = require('vinyl-buffer');
var print = require('gulp-print');
var gutil = require('gulp-util');

var sourcemaps = require('gulp-sourcemaps');
var browserify = require('browserify');
var watchify = require('watchify');
var uglify = require('gulp-uglify');

var bify_options = {
          entries: 'src/main.tsx',
          debug: true
        };

var bify = browserify(bify_options);
bify.plugin('tsify', { jsx: 'react' })
var wify;

var pipeType = argv.production ? 'production' : 'development';

function wifyupdate() {
  return wify.bundle() 
        .pipe( source('reactapp.js'))
        .pipe( buffer() )
        .pipe( gulpif( !argv.production, sourcemaps.init({loadMaps: true}) ) )
        .pipe( gulpif(argv.production, uglify()))
        .pipe( gulpif( !argv.production, sourcemaps.write('./') ) )
        .pipe( print(function (fp) { return "[watchify] >> ["+pipeType+"] >> " + fp; }) )
        .pipe( gulp.dest('./dist') );
}



// Tasks -----------------------------------------------------

gulp.task('browserify', function () {
  return bify.bundle()
        .pipe( source('reactapp.js'))
        .pipe( buffer() )
        .pipe( gulpif( !argv.production, sourcemaps.init({loadMaps: true}) ) )
        .pipe( gulpif(argv.production, uglify()))
        .pipe( gulpif( !argv.production, sourcemaps.write('./') ) )
        .pipe( print(function (fp) { return "[watchify] >> ["+pipeType+"] >> " + fp; }) )
        .pipe( gulp.dest('./dist') );
});

gulp.task('browserify-watch', function() {
  wify = watchify(bify);
  wify.on('update', wifyupdate); 
  return wifyupdate();
} );

gulp.task( 'watch', ['browserify-watch'] );

gulp.task( 'default', ['browserify']);
