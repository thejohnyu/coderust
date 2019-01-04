function LinkedList() {
  this.head = null;
  this.tail = null;
}
function Node(value, next, prev) {
  this.value = value;
  this.next = next;
  this.prev = prev;
}

LinkedList.prototype.addToHead = function(value) {
  const newNode = new Node(value, this.head, null);
  if (this.head) this.head.prev = newNode;
  else this.tail = newNode; 
  this.head = newNode;
};

LinkedList.prototype.addToTail = function(value) {
  const newNode = new Node(value, null, this.tail);
  if (this.tail) this.tail.next = newNode;
  else this.head = newNode;
  this.tail = newNode;
}

// const list = new LinkedList();
// list.addToHead(100);
// list.addToHead(200);
// console.log(list);

// const otherlist = new LinkedList();
// otherlist.addToHead(100);
// otherlist.addToHead(200);
// otherlist.addToHead(300);
// console.log(otherlist);
// console.log(`Middle node value: ${otherlist.head.next.value}`);

const list = new LinkedList();
list.addToTail(100);
list.addToTail(200);
list.addToTail(300);
console.log('list', list);