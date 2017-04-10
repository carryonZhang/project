'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _regenerator = require('babel-runtime/regenerator');

var _regenerator2 = _interopRequireDefault(_regenerator);

var _asyncToGenerator2 = require('babel-runtime/helpers/asyncToGenerator');

var _asyncToGenerator3 = _interopRequireDefault(_asyncToGenerator2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/* eslint-disable fun-call-spacing,indent */
/**
 * Created by long-mac on 2017/4/5.
 */

var indexController = {
    index: function index() {
        var _this = this;

        return function () {
            var _ref = (0, _asyncToGenerator3.default)(_regenerator2.default.mark(function _callee(ctx, next) {
                return _regenerator2.default.wrap(function _callee$(_context) {
                    while (1) {
                        switch (_context.prev = _context.next) {
                            case 0:
                                _context.next = 2;
                                return ctx.render('index/pages/index.html', {
                                    page_title: 'DOTA传奇',
                                    list: [{ title: '中国IG战队获得2017DOTA2亚洲邀请赛冠军。' }, { title: '中国dota2竞技水平世界第一。' }, { title: 'newbee战队这次没能进入决赛。' }, { title: '欧洲站队实力不可小觑。' }, { title: '韩国DOTA2就是个渣。' }, { title: '我自豪，我骄傲！' }],
                                    sorts: [{ sortname: '最新赛讯' }, { sortname: 'DOTA神器' }, { sortname: '找妹子' }, { sortname: '视频集锦' }]
                                });

                            case 2:
                            case 'end':
                                return _context.stop();
                        }
                    }
                }, _callee, _this);
            }));

            return function (_x, _x2) {
                return _ref.apply(this, arguments);
            };
        }();
    }
};
exports.default = indexController;