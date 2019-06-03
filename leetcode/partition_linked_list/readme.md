- 抽象 ADT 具像来引导
- 解决特定问题
  1. leetcode 数据结构题
    LinkedList
  2. github algorithm OO写法
    封装成class export default
  3. webpack 可见即可得

- 有一个链表 服务于各种算法
  1->4->3->2->5->2
  存放数组 与数组的区别：链表内存是不连续的
  head 1
- node(n) -> LinkedList 
  模块化  一个文件一个类
  es6模块化
  append()
- index.js
  业务代码

- node 不支持es6 模块化
  原生支持的是require commonJS
  所以需要 compile presets 预处理

- ADT
  抽象数据类型
  链表 数据结构 配套方法
  append()
  toString() 借助于-> toArray()

- head = 1->4->3->2->5->2   X = 3 
  对链表进行分隔 小于x的节点放在左边 大于x的节点放在其后
  不影响之前的顺序
  左链表  1->2->2
  右链表  4->3->5
  左链表 -> 右链表  tail1.next = head2

  链表 head tail append()