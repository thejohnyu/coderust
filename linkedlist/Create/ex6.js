class LinkedListNode {
  constructor(data) {
    this.data = data;
    this.next = null;
  }
}
const head = Symbol("head");

class LinkedList {
  constructor() {
    this[head] = null;
  }

  add(data) {
    // create a new node
    const newNode = new LinkedListNode(data);
    //special case: no items in the list yet
    if (this[head] === null) {
      // just set the head to the new node
      this[head] = newNode;
    } else {
      // start out by looking at the first node
      let current = this[head];

      // follow `next` links until you reach the end
      while (current.next !== null) {
        current = current.next;
      }

      // assign the node into the `next` pointer
      current.next = newNode;
    }
  }

  get(index) {
    // ensure `index` is a positive value
    if (index > -1) {
      // the pointer to use for traversal
      let current = this[head];

      // used to keep track of where in the list you are
      let i = 0;

      // traverse the list until you reach either the end or the index
      while (current !== null && i < index) {
        current = current.next;
        i++;
      }

      // return the data if `current` isn't null
      return current !== null ? current.data : undefined;
    } else {
      return undefined;
    }
  }
}

const list = new LinkedList();
[1, 2, 3, 4, 5, 6].forEach(cur => {
  list.add(cur);
});
// now write a function that reverses the list

const reverseList = head => {
  // no need to reverse if the head is null
  // or there is only 1 node ( standard checks for lenghts 0/1 )
  if (!head ||  !head.next) {
    return head
  }

  let current = head.next
  let reversedHead = head
  reverseListHead.next = null
};
console.log("list ===>", list);

