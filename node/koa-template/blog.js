const Koa = require('koa')
const views = require('koa-views')
const path = require('path')
const app = new Koa()
// ejs提供了转html 的中间件
// 模板引擎的位置
app.use(
  views(
    path.join(__dirname, './view'), {
      extension: 'ejs'
    }
  )
)
const user = {
  name: 'AJie',
  post: [
    {id: 0, title: '流动的SVG线条'},
    {id: 1, title: 'Vue.js系列'}
  ]
}
const posts = [
  {
    id: 0,
    content: '用SVG + CSS实现'
  },
  {
    id: 1,
    content: '<strong>react表示不服</strong>'
  }
]
app.use(async (ctx) =>{
  // req res
  //  /user用户的主页
  // req.url  解析出请求的地址
  if(ctx.path === '/user') {
    // user ejs
    await ctx.render('user', {
      user
    })
  } else if (ctx.path === '/post') {
    // get 请求的查询参数 ?name=a&age=b {name: age: }
    const { id } = ctx.query;
    const post = posts.find(item => item.id == id);
    await ctx.render('post', {post})
  } 
  else {
    ctx.body = '无法处理该路径' + ctx.request.url
  }
})

// .listen 就是原生http.listen
app.listen(8080, () => {
  console.log('server is running 8080')
})