const Koa = require('koa')
const app = new Koa()

  // 计算时间间隔
app.use(async (ctx, next) =>{
  const start = Date.now();
  await next()
  const end = Date.now()
  const diff = end - start
  // 将处理时间塞到响应头里 writeHead Content-type
  ctx.set('X-Response-Time', `${diff}ms`)
  console.log(`spend${diff}ms`)
})

// response
app.use(async (ctx) => {
  ctx.body = 'hello koa'
})
app.listen(3001)