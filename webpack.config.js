/**
 * Created by long-mac on 2017/4/9.
 */
var DevWebpack = require('./config/webpack.dev');
// var ProdWebpack = require('./config/webpack.prod');
switch (process.env.NODE_ENV) {
    case 'dev':
        module.exports = DevWebpack;
        break;
    case 'prod':
        module.exports = ProdWebpack;
        break;
    default:
        module.exports = DevWebpack;
}