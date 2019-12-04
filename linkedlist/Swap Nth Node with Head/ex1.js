let swap_nth_node = function(head, n) {
    let prev = null;
    let current = head;

    if (!head) {
        return head;
    }

    if (n === 1) {
        // No need to swap head with head.
        return head;
    }

    let count = 1;
    while (current && count < n) {
        prev = current;
        current = current.next;
        count++;
    }

    if (!current) {
        return head;
    }

    // current is pointing to nth node.
    // Let's swap nth node with head.

    prev.next = head;
    let temp = head.next;
    head.next = current.next;
    current.next = temp;

    return current;
};

console.log("");
console.log("");
console.log("+++++++++++++++++++++++++++++++++++++++");
console.log("Swap nth node");
console.log("---------------------------------------");

let head_for_swap = create_linked_list([7, 4, 2, 5, 1, 9]);

console.log("Before Swapping");
let temp_head_for_swap = head_for_swap;
while (temp_head_for_swap) {
    console.log(temp_head_for_swap.data);
    temp_head_for_swap = temp_head_for_swap.next;
}

head_for_swap = swap_nth_node(head_for_swap, 4);

console.log("After Swapping head with 4th node.");
temp_head_for_swap = head_for_swap;
while (temp_head_for_swap) {
    console.log(temp_head_for_swap.data);
    temp_head_for_swap = temp_head_for_swap.next;
}