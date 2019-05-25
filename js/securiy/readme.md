前端安全

表单
form -> onsubmit -> url
POST data: {email:'hz@163.com', password: '123456'}

后端 登录过程 sql 查找的过程
sql 语法报错 服务器出错

用户的输入不可信任
password' 导致sql的提前结束或多了一个'  500错误 -> 后端编码解码

盗取账号

select * from users 
  where email = 'user@email.com' and password = 'password%27'

escape("password'")
"password%27"
unescape("password%27")
"password'"