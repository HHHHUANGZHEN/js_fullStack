const err = (message) => {
  throw new Error(message);
}
function sum (num = err('first param is not defined'), otherNum = err('second param is not defined')) {
  return sum;
}

// console.log(1, 2)  3;
console.log(undefined, 10); 
// 报错， 第一个参数没有定义
console.log(20);  
// 报错， 第二个参数没有定义