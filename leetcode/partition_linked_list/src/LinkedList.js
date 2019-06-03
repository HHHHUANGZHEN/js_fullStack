import LinkedListNode from './LinkedListNode';
class LinkedList {
  constructor() {
  // 1->4->3->2->5->2
  this.head = null;
  this.tail = null;
  }
  append(value) {
    const newNode = new LinkedListNode(value);
    if(!this.head) {
      // 当前是空链表
      this.head = newNode;
      this.tail = newNode;
    } else {
      this.tail.next = newNode;
      this.tail = newNode;
    }
    return this;
  }
  toArray() {
    const nodes = [];
    let currrentNode = this.head;
    while(currrentNode) {
      nodes.push(currrentNode);
      currrentNode = currrentNode.next;
    }
  return nodes;
  }
  toString() {
    return this.toArray().map(node => node.val);
  }
}

export default LinkedList;