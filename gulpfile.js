/**
 * Created by yang on 2016/4/4.
 */
'use strict';

const gulp = require('gulp');
const webpack = require('webpack');

gulp.task('webpack', function() {
    var config = require('./webpack.config.js');
    webpack(config, function(err, stats) {
        if (err) {
            console.error('webpack', err);
            return;
        }
        console.log('webpack ok');
    });
});

gulp.task('default', ['webpack']);