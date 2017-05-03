var gulp = require('gulp');
var jslint = require('gulp-jslint');
 
gulp.task('default', function () {
    return gulp.src(['huxing.js'])
            .pipe(jslint())
            .pipe(jslint.reporter( 'default' ));
});