var LRUCache = function (capacity)  {
  this.capacity = capacity;
  this.obj = {};
  this.arr = [];
}

LRUCache.prototype.get = function(key) {
  // 有 则返回值 设置为最近使用
  var val = this.obj[key];
  if(val) {
    var index = this.arr.indexOf(key);
    this.arr.splice(index, 1);
    this.arr.unshift(key);
    return val;
  } else return -1;  // 没有 -1
}
LRUCache.prototype.set = function(key, value) {
  // 如果有key 返回  
  if(this.obj[key]) {
    this.obj[key] = value;  // 更新 后变成最近使用 则放到数组最前面
    
    var index = this.arr.indexOf(key);
    this.arr.splice(index, 1);   // 之前的删除
    this.arr.unshift(key);
  }

  // 没有key 有两种可能
  if(this.capacity === this.arr.length) {
    // 放满了
  // 如果内存满了 arr.pop()
    var k = this.arr.pop();
    this.obj[k] = undefined;
  }
  // 存进去 arr
  this.obj[key] = value;
  this.arr.unshift(key);
}