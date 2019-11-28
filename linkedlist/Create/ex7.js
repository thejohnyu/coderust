// linked list with stack

class Solution {
  constructor() {}

  reverseList(head) {
    let stack = [];

    while (head !== null) {
      stack.push(head);
      head = head.next;
    }

  }
}
