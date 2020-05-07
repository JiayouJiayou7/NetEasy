//引入koa和koa-router
let Koa = require('koa');
let KoaRouter = require('koa-router');

//生成应用
const app = new Koa();
const router = new KoaRouter();


let indexData = require('./datas');
router.get('/getIndex', (ctx, next) => {
  ctx.body = {
    code: 0,
    data: indexData
  };
});

let cateNavData = require('./datas/cateNavDatas.json');
router.get('/getCateNavData', (ctx, next) => {
  ctx.body = {
    code: 0,
    data: cateNavData
  };
});

let cateListData = require('./datas/cateLists.json');
router.get('/getCateListData', (ctx, next) => {
  ctx.body = {
    code: 0,
    data: cateListData
  };
});

//安装路由器，声明使用中间件
app
  .use(router.routes())
  .use(router.allowedMethods());



app.listen('8088', () => {
  console.log('服务器地址: http://localhost:8088');
})
