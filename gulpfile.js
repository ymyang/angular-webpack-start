/**
 * Created by yang on 2016/4/4.
 */
'use strict';

const gulp = require('gulp');
const webpack = require('webpack');
const jetpack = require('fs-jetpack');

gulp.task('clean', () => {
    jetpack.dir('./build', { empty: true });
});

gulp.task('webpack', () => {
    let config = require('./webpack.config.js');
    webpack(config, (err, stats) => {
        if (err) {
            console.error('webpack', err);
            return;
        }
        console.log('webpack ok');
    });
});

gulp.task('default', ['webpack']);