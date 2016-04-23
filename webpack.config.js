/**
 * Created by yang on 2016/4/4.
 */
var webpack = require('webpack');
var HtmlWebpackPlugin = require('html-webpack-plugin');
var ExtractTextPlugin = require('extract-text-webpack-plugin');
var ngAnnotatePlugin = require('ng-annotate-webpack-plugin');

module.exports = {
    entry: {
        app: './app/js/main.js'
    },
    output: {
        path: './build',
        filename: '[name]_[chunkhash].js'
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
                test: /\.(png|jpg|jpeg|gif|svg|woff|woff2|ttf|eot)/,
                loader: 'file'
            },
            {
                test: /\.html$/,
                loader: 'html'
            }
        ]
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: './app/pages/index.html',
            inject: 'body'
        }),
        new ExtractTextPlugin('[name]_[hash].css'),
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