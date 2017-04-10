/**
 * Created by long-mac on 2017/4/5.
 */

const path = require('path');
const webpack = require('webpack');
const undersore = require('underscore');
const fs = require('fs');
const ExtractTextPlugin = require("extract-text-webpack-plugin");
const entryPath = './web/views';
// var widgetPath = './web/widget';
const uglifyJsPlugin = webpack.optimize.UglifyJsPlugin;

//生产环境&开发环境基础配置项
//js入口文件 entris
console.log(fs.readdirSync(entryPath));
var jsEntris = fs.readdirSync(entryPath).reduce(function(o, filename) {
    if (!/\./.test(filename)) {
        var _fd = entryPath + '/' + filename;
        fs.readdirSync(_fd).reduce(function(innero, ifilename) {
            (/.entry.js$/.test(ifilename)) && (o[ifilename.replace('.entry.js', '')] = './' + path.join(entryPath, filename, ifilename));
        });
    }
    console.log(o)
    return o;
}, {});

var jsVendors = {
    'vendor': ['vue'] //第三方库
};
var _entris = Object.assign(jsEntris, jsVendors),
    _module = {
        rules: [{
            test: /\.vue$/,
            loader: 'vue-loader'
        }, {
            test: /\.js$/,
            loader: 'babel-loader',
            exclude: /node_modules/
        }, {
            test: /\.css$/,
            use: ExtractTextPlugin.extract({
                fallback: "style-loader",
                use: "css-loader",
                // options: {
                //     modules: true,
                // }
            })
        }]
    },
    _resolve = {
        extensions: [".vue", ".js"]
    };
    // _babel = {
    //     presets: ['es2015', 'stage-0'],
    //     plugins: ['transform-vue-jsx', 'transform-runtime']
    // };
var _devLoaders = undersore.clone(_module.rules);
var _prodLoaders = undersore.clone(_module.rules);
_devLoaders.push({
    test: /\.(png|jpg|gif|eot|woff|woff2|ttf|svg)$/,
    loader: 'file-loader?name=assets/images/[name].[ext]'
});
_prodLoaders.push({
    test: /\.(png|jpg|gif|eot|woff|woff2|ttf|svg)$/,
    loader: 'file-loader?name=assets/images/[name].[hash:5].[ext]'
});
var webpackConfig = {
    dev: {
        entry: _entris,
        module: {
            loaders: _devLoaders
        },
        resolve: _resolve,
        // babel: _babel
    },
    prod: {
        entry: _entris,
        module: {
            loaders: _prodLoaders
        },
        resolve: _resolve,
        // babel: _babel
    }
};
module.exports = webpackConfig;

// module.exports = {
//     context: path.resolve(__dirname, './src'),
//     entry: {
//         app: './app.js',
//     },
//     // target: 'node',
//     // node: {
//     //     __filename: true,
//     //     __dirname: true,
//     // },
//     module: {
//         rules: [
//             {
//                 test: /\.js$/,
//                 exclude: /node_modules/,
//                 loader: 'babel-loader',
//                 // use: [{
//                 //     loader: 'babel-loader',
//                 //     options: { presets: ['es2015'] },
//                 // }],
//             },
//
//             // Loaders for other file types can go here
//         ],
//     },
//     output: {
//         path: path.resolve(__dirname, './build'),
//         filename: '[name].bundle.js',
//     },
//     resolve: {
//         modules: [path.resolve(__dirname, './src'), 'node_modules'],
//         // extensions: []
//         // alias: {
//         //
//         // },
//     },
//     // devtool: "cheap-eval-source-map",
//     plugins: [
//         new webpack.HotModuleReplacementPlugin(),
//     ],
// };
