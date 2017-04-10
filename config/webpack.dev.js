/**
 * Created by long-mac on 2017/4/9.
 */
/**
 *@Description 开发环境Webpack配置项
 */
var path = require('path');
var conf = require('./webpack.conf');
var webpack = require('webpack');
var HtmlWebpackPlugin = require('html-webpack-plugin');
var ExtractTextPlugin = require("extract-text-webpack-plugin");
var options = {
    // devtools: {
    //     dev: 'dev'
    // },
    output: {
        path: path.join(__dirname, '../build'),
        publicPath: '/',
        filename: 'assets/scripts/[name].bundle.js'
    },
    plugins: [
        new webpack.ProvidePlugin({
            Vue: 'vue'
        }),
        new webpack.DefinePlugin({
            'process.env': {
                NODE_ENV: '"dev"'
            }
        }),
        new webpack.optimize.CommonsChunkPlugin({
            name: 'vendor',
            filename: 'assets/scripts/[name].bundle.js',
            minChunks: Infinity
        }),
        new HtmlWebpackPlugin({
            template: './web/views/index/pages/index.html',
            filename: './views/index/pages/index.html',
            inject: false,
            // chunks: [vendor, index]
            chunks: ['vendor']
        }),
        new HtmlWebpackPlugin({
            template: './web/views/error/pages/404.html',
            filename: './views/error/pages/404.html',
            inject: false
        }),
        new HtmlWebpackPlugin({
            template: './web/views/error/pages/500.html',
            filename: './views/error/pages/500.html',
            inject: false
        }),
        // new HtmlWebpackPlugin({
        //     template: './web/views/index/pages/index.js',
        //     filename: './views/index/pages/index.html',
        //     inject: false,
        //     chunks: ['vendor', 'common', 'index-index']
        // }),
        new ExtractTextPlugin("assets/styles/[name].css"),
    ]
}
var _options = Object.assign(options, conf.dev)
module.exports = _options;