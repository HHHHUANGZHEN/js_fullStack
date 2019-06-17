const Koa = require('koa')

// 应用的实例 可以生成很多个
const app = new Koa();
const admin = new Koa()
//  res req,  ctx 封装了 req res
app.use(async (ctx, next) =>{
  console.log(1);
  // koa 没有回应 自己处理 -> not found
  await next()  // 交给下一个中间件
  console.log(2)
})
app.use(async (ctx, next) => {
  await next()
  console.log(4)
})
app.use(async (ctx) => {
  console.log(3)
  ctx.body = `hello koa`
})
app.listen(3000, () => {
  console.log('server is running 3000')
})
admin.listen(4000, () =>{
  // console.log('server is running 4000')
})