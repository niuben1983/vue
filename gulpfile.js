/**
 * Created by Tim on 8/22/16.
 */

'use strict';

var yargs = require('yargs');

var gulp = require('gulp');
var gutil = require('gulp-util');

var webpack = require('webpack');
var WebpackDevServer = require('webpack-dev-server');

gulp.task('webpack', function (callback) {

    var cfg = require('./webpack.config');
    webpack(cfg, function (err, stats) {
        if (err) {
            throw new gutil.PluginError("webpack", err);
        }

        callback();
    });
});

gulp.task('copyfiles', function () {

    var files = [
        '!lib/**',
        '!node_modules/**',
        '!./dist/**',
        './**/*.html',
        './**/*.vue',
        //'./**/*.map',
        //'./**/*.css',
        //'./**/*.png',
        //'./**/*.jpg',
        //'./**/*.gif',
    ];
    return gulp.src(files)
        .pipe(gulp.dest('./dist'));
});

gulp.task("webpack-dev-server", function(callback) {
    var cfg = require('./webpack.config');

    var compiler = webpack(cfg);

        new WebpackDevServer(compiler).listen(8081, "localhost", function(err) {

        if(err) {
            throw new gutil.PluginError("webpack-dev-server", err);
        }

        gutil.log("[webpack-dev-server]", "http://localhost:8081/");
        // keep the server alive or continue?
        // callback();
    });
});

gulp.task('default', ['webpack', 'copyfiles'],function () {
});


gulp.task('server', ['webpack-dev-server'], function () {
});