var listNode = {
  val: 1,
  next: {
    val: 2,
    next: {
      val: 3,
      next: null
    }
  }
}
var reverseList = function(head) {
  // head 头节点
  var cur = head,
    pre = null;
  while (cur) {
    var t = cur.next
    cur.next = pre;
    pre = cur;
    // cur = cur.next;     // cur.next = null ，所以得在前面先保存cur.next的值
    cur = t;
  }
  return pre
}
console.log(listNode)
console.log(reverseList(listNode))