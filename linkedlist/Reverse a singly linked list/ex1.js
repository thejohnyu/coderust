// Single Linked List with only 1 pointer
class Node {
  constructor(value) {
    this.data = value;
    this.next = null;
  }
}

class Linkedlist {
  constructor() {
    this.head = null;
    this.length = 0;
  }

  addToHead(value) {
    if (this.head == null) {
      this.head = new Node(value);
      return this;
    }
    let node = new Node(value);
    node.next = this.head;
    node = this.head;
    this.length++;
    return this;
  }
  removeFromHead() {
    if (this.length === 0) return undefined;

    const value = this.head.value;
    this.head = this.head.next;
    this.length--;

    return value;
  }
  find(val) {
    let thisNode = this.head;
    while (thisNode) {
      if (thisNode.value === val) {
        return thisNode;
      }
      thisNode = thisNode.next;
    }

    return thisNode;
  }
  remove(val) {
    // 1. Typical Guard
    if (this.length === 0) {
      return undefined;
    }
    // 2. Another Guard incase the user wants to remove from head.
    if (this.head.value === val) {
      return this.removeFromHead();
    }
    // 3. Previous is always the current node
    // 4. thisNode is always current.node.next
    let previousNode = this.head;
    let thisNode = previousNode.next;
    while (thisNode) {
      if (thisNode.value === val) {
        break;
        // 5. if you located the value break out of this loop
      }
      previousNode = thisNode; // 6. this.head.next;
      thisNode = thisNode.next; // 7. this.head.next.next
    }
    if (thisNode === null) {
      return undefined;
    }
    previousNode.next = thisNode.next;
    this.length--;
    return this;
  }
}

let linkedlist = new Linkedlist();

console.log(
  "linkedlist.addToHead([1,2,3,4,5,6])",
  linkedlist.addToHead([1, 2, 3, 4, 5, 6])
);

const createLinkedList = arr => {
  return arr.reduce((acc, cur) => {
    const node = {
      data: cur,
      next: acc
    };

    acc = node;
    return acc;
  }, null);
};

const createSubArray = arr => {
  return arr.reduce((acc, cur, index) => {
    acc.push([{}, {}]);
    return acc;
  }, []);
};

const arr = [1, 2, 3, 4, 5, 6];
const test = createLinkedList(arr);

