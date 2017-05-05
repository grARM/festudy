var gulp = require('gulp');
var jslint = require('gulp-jslint');
var Files = require('./files.json');

gulp.task('jslint', function () {
    return gulp.src(Files.src)
            .pipe(jslint())
            .pipe(jslint.reporter( 'default' ));
});
gulp.task('default',['jslint']); 

var watcher = gulp.watch(Files.src, ['jslint']);
watcher.on('change', function(event) {
  console.log('File ' + event.path + ' was ' + event.type + ', running tasks...');
});