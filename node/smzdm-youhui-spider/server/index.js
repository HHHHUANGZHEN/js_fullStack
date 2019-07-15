const Koa = require('koa');
const app = new Koa();
const koaStatic = require('koa-static');
const path = require('path');
const router = require('koa-router')();
// res.set
app.use(async (ctx, next) => {
  // 允许哪个域名请求 *
  ctx.set('Access-Control-Allow-Origin', '*');
  // 服务器支持的头部 x-custom
  ctx.set('Access-Control-Allow-Headers', 'x-custom,content-type');
  // 支持的方法
  ctx.set('Access-Control-Allow-Methods', '*');
  // 允许 携带 cookie
  // 设置为 允许的时候 Access-Control-Allow-Origin 需要是一个具体的域名
  // 不能是 *
  ctx.set('Access-Control-Allow-Credentials', true);

  await next();
})
router.get('/api/post', async function (ctx) {
  // ctx.cookies.set(
  //   'cid', 
  //   'ddddd',    //可替换为token
  //   {
  //     domain: 'localhost',  // 写cookie所在的域名
  //     path: '/',       // 写cookie所在的路径
  //     maxAge: 10 * 60 * 1000, // cookie有效时长
  //     expires: new Date('2017-02-15'),  // cookie失效时间
  //     httpOnly: false,  // 是否只用于http请求中获取
  //     overwrite: false  // 是否允许重写
  //   }
  // )

  console.log('cookie', ctx.cookies.get('name'));
  ctx.body = [
    { title: 'node.js 入门到精通', createTime: '2018-12-12' },
    { title: 'php 入门到精通', createTime: '2018-11-11' },
  ]
});
 router.get('/api/user',async(ctx) =>{
   const callback = ctx.request.query.callback;
   const user ={
     name:'abc',
     age:18,
   }
   ctx.body=`${callback}(${JSON.stringify(user)})`
 })
app
  .use(router.routes())
  .use(router.allowedMethods());
app.listen(8080, () => {
  console.log('server is running 8080');
});
