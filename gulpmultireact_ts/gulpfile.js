/**
 * Generate 2 Browserify Bundles that can be used in the same page
 */

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

function printError(err) {
  gutil.log( gutil.colors.red.bgBlue(err.name), err.message);
  this.emit('end'); // This is the command that stop gulp from exiting.
}

var bify_components_options = {
          entries: [ 'src/page1.tsx', 'src/page2.tsx' ],
          debug: true
        };

var bify_components = browserify(bify_components_options);
bify_components.plugin('tsify', { jsx: 'react' })
bify_components.plugin('factor-bundle', { outputs: [ 'dist/page1.js', 'dist/page2.js' ] })

var wify_components;

if ( argv.verbose ) {
  bify_components.on('file', function (file, id, parent) {
    console.log( 'Component bundling >>', gutil.colors.blue.bgYellow(id));
  });
}
var pipeType = argv.production ? 'production' : 'development';

function wifyComponentsUpdate() {
  console.log('A component was changed. Re-bundle into components.js ...')
  return wify_components.bundle() 
        .on( 'error', printError )
        .pipe( source('components.js'))
        .pipe( buffer() )
        .pipe( gulpif( !argv.production, sourcemaps.init({loadMaps: true}) ) )
        .pipe( gulpif(argv.production, uglify()))
        .pipe( gulpif( !argv.production, sourcemaps.write('./') ) )
        .pipe( print(function (fp) { return "[watchify] >> ["+pipeType+"] >> " + fp; }) )
        .pipe( gulp.dest('./dist') );
}


// Tasks -----------------------------------------------------

gulp.task('components', function () {
  return bify_components.bundle()
        .on( 'error', printError )
        .pipe( source('components.js'))
        .pipe( buffer() )
        .pipe( gulpif( !argv.production, sourcemaps.init({loadMaps: true}) ) )
        .pipe( gulpif(argv.production, uglify()))
        .pipe( gulpif( !argv.production, sourcemaps.write('./') ) )
        .pipe( print(function (fp) { return "[watchify] >> ["+pipeType+"] >> " + fp; }) )
        .pipe( gulp.dest('./dist') );
});


gulp.task('components-watch', function() {
  wify_components = watchify(bify_components);
  wify_components.on('update', wifyupdate); 
  return wifyComponentsUpdate();
} );

gulp.task( 'watch', ['browserify-watch'] );

gulp.task( 'default', ['components' ]);
