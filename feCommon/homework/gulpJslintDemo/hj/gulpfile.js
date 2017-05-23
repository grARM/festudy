var gulp = require('gulp');
var jslint = require('gulp-jslint');
var Files = require('./files.json');
// var path = require('path');
var through = require('through2');
var fs = require('fs');

gulp.task('jslint', function () {
    return gulp.src(Files.src)
        .pipe(jslint())
        .pipe(
            // 将已经检查的文件名写入checkdFiles字段
            through.obj(function (file, enc, cb) {
                var path = file.path.slice(file.path.lastIndexOf("/"));
                if (Files.checkedFiles.indexOf(path) < 0) {
                    Files.checkedFiles.push(path);
                }
                fs.writeFile('files.json', JSON.stringify(Files), function (err) {
                    if (err) {
                        throw err;
                    }
                });
                this.push(file);
                cb && cb();
            })
        )
        .pipe(jslint.reporter('stylish'));
});

var watcher = gulp.watch(Files.src, ['jslint']);
watcher.on('change', function (event) {
    console.log('File ' + event.path + ' was ' + event.type + ', running tasks...');
});

gulp.task('default', ['jslint']);
