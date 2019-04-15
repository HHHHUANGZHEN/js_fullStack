node 让 js 来到了后端

服务器， Linux
文件处理操作 fs
连接数据库 db

没有DOM
文件读取 要花时间 文件定位(参数1)， 打开文件， 将文件内容读取到内存中 输出到命令行
文件越大 花的时间越多 js里异步

异步解决方案
1. callback
fs.readFile(path, 'utf8', function(err, data) {})

2. Promise
  分开， promise 是类 用于处理耗时异步问题的类，
  为了防止回调地狱， 看到耗时问题就用出一个Promise实例
  resolve 将控制权交给 then ，将结果通过resolve(data)传递
  reject 失败  执行catch(e){}