// import NW = require("nw.js");
import NwBuilder = require('nw-builder');
import gulp = require('gulp');
import gutil = require('gulp-util');

gulp.task('nw', function () {
    var nw = new NwBuilder({
        version: '0.14.7', //使用nw.js的版本 0.14.7 for xp win32
        files: './app/**',//nw应用项目目录
        platforms: ['osx64','win32', 'win64'], //要打包生成的平台 'osx64',win32', 'win64', 
        cacheDir: './cache',//nw.js的平台sdk
        buildDir: './build'//生成编译后的可执行文件目录
    });

    // Log stuff you want
    nw.on('log', function (msg) {
        gutil.log('nw-builder', msg);
    });

    // Build returns a promise, return it so the task isn't called in parallel
    return nw.build().then(function () {
        gutil.log("nw-builder", "DONE!!!");
    }).catch(function (err) {
        gutil.log('nw-builder', err);
    });
});

gulp.task('default', ['nw']);