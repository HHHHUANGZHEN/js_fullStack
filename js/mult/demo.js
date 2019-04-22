// 全局变量太多 cache只为mult服务
// 空间的污染
// const cache = {};
// 函数内部的变量执行完就被释放
const mult = (function () {
  const cache = {};
  return function (...args) {
    var key = Array.prototype.join.call(args, ',');
    if (key in cache) {
      return cache[key];
    }
    let a = 1;
    for (let i = 0; i < args.length; i ++) {
      a = a * args[i];
    }
    cache[key] = a;
    return a ;
  }
})()

console.log(mult(1, 2, 3));
console.log(mult(1, 2, 3));
