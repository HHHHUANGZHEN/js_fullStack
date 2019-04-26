LRU 缓存
Least Recently Used
操作系统

node fs 硬盘 内存

内存是代码的运行空间 有限

LRUCache cache = new LRUCache( 2 /* 缓存容量 */ );

cache.put(1, 1);
cache.put(2, 2);
cache.get(1);       // 返回  1
cache.put(3, 3);    // 该操作会使得密钥 2 作废
cache.get(2);       // 返回 -1 (未找到)
cache.put(4, 4);    // 该操作会使得密钥 1 作废
cache.get(1);       // 返回 -1 (未找到)
cache.get(3);       // 返回  3
cache.get(4);       // 返回  4

- cache LRUCache
  get 
  set

- 对象字面量有利于get set方法的实现
- 最近最少使用  JSON搞不定
  数组可以  [0] [length - 1]
  在一头进行操作
  一半的工作交给数组 一半的工作交给对象字面量
  让它们成为LRUCache的两个属性

- get set   arr + obj组织在LRUCache
  indexOf pop unshift splice