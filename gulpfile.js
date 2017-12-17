const del = require('del');
const gulp = require('gulp');
const options = require('./webpack.config.js');
const webpack = require('webpack-stream');
const source = 'src/';
const dest = 'static/';

gulp.task('js', function(done) {
    const path = source + '**/*.js';
    del([dest]);
    gulp.src(path)
        .pipe(webpack(options, require('webpack')))
        .pipe(gulp.dest(dest))
        .on('end', done);
});

gulp.task('watch_build', function(done) {
    const path = source + '**/*.js';
    del([dest]);
    options.watch = true;
    gulp.src(path)
        .pipe(webpack(options, require('webpack')))
        .pipe(gulp.dest(dest))
        .on('end', done);
});

gulp.task('default', ['js']);
gulp.task('watch', ['watch_build']);