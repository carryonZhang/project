'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _keys = require('babel-runtime/core-js/object/keys');

var _keys2 = _interopRequireDefault(_keys);

var _indexController = require('./indexController');

var _indexController2 = _interopRequireDefault(_indexController);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

console.log('indexController', _indexController2.default); /**
                                                            * Created by long-mac on 2017/4/5.
                                                            */

// const index = require('./indexController');

console.log('indexController中的属性', (0, _keys2.default)(_indexController2.default));

var controllerInit = {
    getAllrouters: function getAllrouters(app, router) {
        app.use(router(function (_) {
            _.get('/', _indexController2.default.index());
            _.get('/index', _indexController2.default.index());
            _.get('/index.html', _indexController2.default.index());
            _.get('/index/index', _indexController2.default.index());
            // _.get('/home', index.home());
        }));
    }
};
exports.default = controllerInit;