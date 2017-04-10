/**
 * Created by long-mac on 2017/4/5.
 */

// const index = require('./indexController');
import index from './indexController';

console.log('indexController', index);
console.log('indexController中的属性', Object.keys(index))


const controllerInit = {
    getAllrouters: function getAllrouters(app, router) {
        app.use(router((_) => {
            _.get('/', index.index());
            _.get('/index', index.index());
            _.get('/index.html', index.index());
            _.get('/index/index', index.index());
            // _.get('/home', index.home());
        }));
    },
};
export default controllerInit;
