let find_nth_from_last = function(head, n) {

    if (!head || n < 1) {
        return null;
    }

    // We will use two pointers head and tail
    // where head and tail are 'n' nodes apart.
    let tail = head;

    while (tail && n > 0) {
        tail = tail.next;
        n -= 1;
    }

    // Check out-of-bounds
    if (n != 0) {
        return null;
    }

    // When tail pointer reaches the end of
    // list, head is pointing at nth node.
    while (tail) {
        tail = tail.next;
        head = head.next;
    }

    return head;
};

console.log("");
console.log("");
console.log("+++++++++++++++++++++++++++++++++++++++");
console.log("Nth from Last");
console.log("---------------------------------------");

let head_for_nth_from_last = create_linked_list([7, 4, 2, 5, 1, 9]);

console.log(find_nth_from_last(head_for_nth_from_last, 2));
console.log(find_nth_from_last(head_for_nth_from_last, 1));
console.log(find_nth_from_last(head_for_nth_from_last, 11));