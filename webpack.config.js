/**
 * Created by yang on 2016/4/4.
 */
'use strict';

const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const ngAnnotatePlugin = require('ng-annotate-webpack-plugin');

module.exports = {
    entry: {
        app: './app/js/main.js',
        about: './app/js/about.js'
    },
    output: {
        path: './build',
        filename: 'js/[name]_[chunkhash:8].js'
    },
    //resolve: {
    //    extensions: ['', '.js', '.jsx']
    //},
    module: {
        loaders: [
            {
                test: /\.js$/,
                loader: 'ng-annotate!babel?presets[]=es2015',
                //query: {
                //    presets: ['es2015']
                //},
                exclude: /node_modules/
            },
            //{
            //    test: /\.js$/,
            //    loader: 'ng-annotate',
            //    exclude: /node_modules/
            //},
            //{
            //    test: /\.less/,
            //    loader: 'style!css!less'
            //},
            {
                test: /\.less/,
                loader: ExtractTextPlugin.extract('style', 'css!less')
            },
            //{
            //    test: /\.css$/,
            //    loader: 'style!css'
            //},
            {
                test: /\.css$/,
                loader: ExtractTextPlugin.extract('style', 'css')
            },
            {
                test: /\.(png|jpg|jpeg|gif)/,
                loader: 'file?name=img/[name]_[hash:8].[ext]'
            },
            {
                test: /\.(svg|woff|woff2|ttf|eot)/,
                loader: 'file?name=font/[name]_[hash:8].[ext]'
            },
            {
                test: /\.html$/,
                loader: 'html'
            }
        ]
    },
    plugins: [
        new webpack.optimize.DedupePlugin(),
        new webpack.optimize.CommonsChunkPlugin({
            name: 'commons',
            //chunks: ['index', 'about'],
            minChunks: 2
        }),
        new HtmlWebpackPlugin({
            filename: 'index.html',
            template: 'app/pages/index.html',
            inject: 'body',
            chunks: ['commons', 'app']
        }),
        new HtmlWebpackPlugin({
            filename: 'about.html',
            template: 'app/pages/about.html',
            inject: 'body',
            chunks: ['commons', 'about']
        }),
        new ExtractTextPlugin('[name]_[hash:8].css'),
        //new ngAnnotatePlugin({
        //    add: true
        //}),
        new webpack.optimize.UglifyJsPlugin()
        //new webpack.optimize.UglifyJsPlugin({
        //    mangle: {
        //        except: ['$scope','$resource','$filter','$log','$uibModalInstance','$uibModal']
        //    }
        //})
    ]
};