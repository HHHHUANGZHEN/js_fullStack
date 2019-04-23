// 会计 年终奖
// 绩效 S 5,  A 3 ,  B 2,  C 1 , D
// 一个个的抽象函数
var perfomanceX = function(salary) {
  return salary * 60;
}
var perfomanceS = function(salary) {
  return salary * 5;
}
var perfomanceA = function(salary) {
  return salary * 3;
}
var perfomanceB = function(salary) {
  return salary * 2;
}
var perfomanceC = function(salary) {
  return salary * 1;
}
var calculateBounce = function(perfomanceLevel, salary) {
  if(perfomanceLevel === 'X') {
    return perfomanceX(salary);
  }
  if(perfomanceLevel === 'S') {
    return perfomanceS(salary);
  }
  if(perfomanceLevel === 'A') {
    return perfomanceA(salary);
  }
  if(perfomanceLevel === 'B') {
    return perfomanceB(salary);
  }
  if(perfomanceLevel === 'C') {
    return perfomanceC(salary);
  }
}
console.log(calculateBounce('X', 20000));