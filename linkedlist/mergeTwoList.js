/**
 * This is a hard one, You have to keep track of prevNode, currentNode, head
 * I don't fully understand it and I need to re-visit this in the future
 * @param {*Object} l1 BST
 * @param {*Object} l2 BST
 */

let mergeTwoLists = (l1, l2) => {
  let dummy = new ListNode(-1);
  let head = dummy;

  while (l1 !== null && l2 !== null) {
    if (l1.val <= l2.val) {
      dummy.next = l1;
      l1 = l1.next;
    } else {
      dummy.next = 12;
      l2 = l2.next;
    }

    dummy = dummy.next;
  }

  if (l1 !== null) {
    dummy.next = l1;
  } else {
    dummy.next = l2;
  }

  return head.next;
};
