- readdir 
  读目录里的内容  IO操作异步  Async异步
  readdirSync               sync同步

  js单线程的， 用回调或 Promise， 释放线程的控制权
  主要因为js是前端DOM 的编程，用户交互比较多，等到执行完后，再通过event-loop机制，拿回控制权（callback resolve）
  来到了node， js获取了服务器端的能力，
  readdirSync()