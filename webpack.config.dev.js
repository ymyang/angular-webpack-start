/**
 * Created by yang on 2016/4/4.
 */
var webpack = require('webpack');
var HtmlWebpackPlugin = require('html-webpack-plugin');
var ExtractTextPlugin = require('extract-text-webpack-plugin');

module.exports = {
    entry: [
        'webpack/hot/dev-server',
        'webpack-dev-server/client?http://localhost:81',
        './app/js/main.js'
    ],
    output: {
        path: __dirname + '/build',
        //publicPath: 'http://localhost:81/',
        filename: '[name].js'
    },
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
            filename: 'index.html',
            template: './app/pages/index.html',
            inject: 'body',
            //chunks: ['commons', 'app']
        }),
        new ExtractTextPlugin('[name]_[hash].css'),
        new webpack.HotModuleReplacementPlugin()
    ],
    //devtool: 'inline-source-map'
    //devServer: {
    //    contentBase: './build'
    //}
};