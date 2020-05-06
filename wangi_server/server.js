let Koa = require('koa')
let KoaRouter = require('koa-router');


const app = new Koa();
const router = new KoaRouter();


let indexData =  require('./datas/index.json');
router.get('/getIndexData', (ctx, next) => {
	ctx.body = {
		code: 0,
		data: indexData
	};
});

// 主页导航页面数据
let indexCateList = require('./datas/indexCateList.json')
router.get('/getindexCateList', (ctx, next) => {
	// 生成的H5应用存在跨域问题，通过CORS设置跨域配置
	ctx.set('Access-Control-Allow-Origin', '*')
	ctx.body = indexCateList;
});
let cateNavDatas = require('./datas/cateNavDatas.json')
router.get('/getcateNavDatas',(ctx,next)=>{
  ctx.body = {
    code:0,
    data:cateNavDatas
  }
})
let cateLists = require('./datas/cateLists.json')
router.get('/getcateLists',(ctx,next)=>{
  ctx.body = {
    code:0,
    data:cateLists
  }
})
app.use(router.routes())
app.use(router.allowedMethods())
app.listen(8088,()=>{
  console.log('服务器地址：http://localhost:8088');
})

























app
  .use(router.routes())
  .use(router.allowedMethods())



app.listen('3001', () => {
  console.log('服务器地址: http://localhost:3001');
})
