var gulp = require('gulp');
var sftp = require('gulp-sftp');
var GulpSSH = require('gulp-ssh');
var shell = require('gulp-shell')
var del = require('del'); //删除本地发布代码
var server = require('./server')[process.env.NODE_ENV];

var gulpSSH = new GulpSSH({
    ignoreErrors: false,
    sshConfig: server
});

gulp.task('upload', function () {
    return gulp.src('dist/**')
        .pipe(sftp(server));
});

// 删除本地发布代码
gulp.task('deletelocal', function () {
    del(['dist/**', '!dist/index.html']).then(paths => {
        console.log('Deleted files and folders:\n', paths.join('\n'));
    });   
});
 
