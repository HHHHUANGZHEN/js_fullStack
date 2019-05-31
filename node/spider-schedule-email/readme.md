- x.find() 查找x元素下面的内容
  $('.box).find('p');
- replace(/\s/g, "")  把空白字符替换为空字符(去除无用的空白字符)
  \s 空白字符

## 
promise.all([promise组成的数组])
返回一个promise -> 所有promise resolve的时候,它才resolve
resolve时候的值 就是 [所有promise] resolve 组成的数组

## 模板引擎
发漂亮邮件 需要发送html
html 不是静态的 需要数据填充
{{ name }}
{ name } 变量编译进去
模板引擎 同理 编译成html

MVC
jsp 
node 模板引擎 承载页面 (view)
ejs jade
<%= %> 变量
<% %> js执行