/* eslint-disable fun-call-spacing,indent */
/**
 * Created by long-mac on 2017/4/5.
 */

const indexController = {
    index() {
        return async(ctx, next) => {
            await ctx.render('index/pages/index.html', {
                page_title: 'DOTA传奇',
                list: [
                    { title: '中国IG战队获得2017DOTA2亚洲邀请赛冠军。' },
                    { title: '中国dota2竞技水平世界第一。' },
                    { title: 'newbee战队这次没能进入决赛。' },
                    { title: '欧洲站队实力不可小觑。' },
                    { title: '韩国DOTA2就是个渣。' },
                    { title: '我自豪，我骄傲！' },
                ],
                sorts: [
                    { sortname: '最新赛讯' },
                    { sortname: 'DOTA神器' },
                    { sortname: '找妹子' },
                    { sortname: '视频集锦' },
                ],
            });
            // ctx.body = 'This is a koa2 test!';
        };
    },
};
export default indexController;

