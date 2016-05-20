/**
 * Created by yang on 2016/4/4.
 */
'use strict';

const gulp = require('gulp');
const webpack = require('webpack');
const WebpackDevServer = require("webpack-dev-server");
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

gulp.task('dev', () => {
    var config = require('./webpack.config.dev.js');
    let server = new WebpackDevServer(webpack(config), {
        //contentBase: 'http://localhost/',
        //contentBase: './build/',
        //publicPath: './build/',
        //publicPath: 'http://localhost/',
        //historyApiFallback: true,
        hot: true,
        lazy: false,
        proxy: {
            '*': 'http://192.168.0.21'
        }
    });
    server.listen('80', 'localhost', (err) => {
        if (err) {
            console.error('dev:', err);
            return;
        }
        console.log('webpack dev server start');
    });
});

gulp.task('default', ['webpack']);