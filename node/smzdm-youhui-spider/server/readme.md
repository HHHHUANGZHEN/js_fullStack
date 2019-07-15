## 跨域
浏览器的安全策列

协议 域名 端口 有一个不一致的时候就存在跨域
## cors

cross origin resource share

1. 一个标准， 规定了一些 http 的 首部字段， 让服务器允许那些网站可以访问
2. 规定，如果是得简单请求，浏览器会先发一个预检请求，从服务器知道是否允许跨域 返回的内容作为js 执行，js
getuser({
  name
})

## jsonp 原理

1.script标签 可以跨域 
加载进来的内容会被当作 js 执行
3.后端 先获取 前端发出的 callback 在 callback 里面 插入自己想要
4. 前端拿到返回的内容
5.预先定义好一个函数
缺点只能请求
6.写一个 promise 风格的json函数

json(url,param = {}).then(res =>{
  console.log(res)
})