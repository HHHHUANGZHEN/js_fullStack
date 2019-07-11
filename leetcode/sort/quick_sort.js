// 快排
// [8, 2, 5, 9, 7]
function quickSort(arr) {
  if (arr.length <= 1) { return arr }   // 退出条件
  var left = [], right = [],
    baseDot = Math.round(arr.length / 2),
    base = arr.splice(baseDot, 1)[0]
  // base 中间值
  for(var i = 0; i < arr.length; i++) {
    if(arr[i] < base) {
      left.push(arr[i])
    } else {
      right.push(arr[i])
    }
  }
  return quickSort(left).concat([base], quickSort(right))
}

console.log(quickSort([8, 10, 5, 10, 4, 9, 7]))
console.log(quickSort([1, 2, 3, 4, 5, 6, 7]))