let merge_alternating = function(list1, list2) {
    if (!list1) {
        return list2;
    }

    if (!list2) {
        return list1;
    }

    let head = list1;

    while (list1.next && list2) {
        let temp = list2;
        list2 = list2.next;

        temp.next = list1.next;
        list1.next = temp;
        list1 = temp.next;
    }

    if (!list1.next) {
        list1.next = list2;
    }

    return head;
};

let reverse_even_nodes = function(head) {

    // Let's extract even nodes from the existing
    // list and create a new list consisting of 
    // even nodes. We will push the even nodes at
    // head since we want them to be in reverse order.

    let curr = head;
    let acc = null;

    while (curr && curr.next) {
        let even = curr.next;
        curr.next = even.next;

        // Push at the head of new list.
        even.next = acc;
        acc = even;

        curr = curr.next;
    }

    // Now, merge the two lists
    // Original: 1,2,3,4,5
    // Modified original: 1,3,5
    // acc: 4,2
    // Merged: 1,4,3,2,5

    return merge_alternating(head, list_even);
};

console.log("");
console.log("");
console.log("+++++++++++++++++++++++++++++++++++++++");
console.log("Reverse Even Nodes");
console.log("---------------------------------------");

let head_before_reverse = create_linked_list([1, 2, 3, 4, 5]);
let head_after_reverse = create_linked_list([1, 4, 3, 2, 5]);

let temp_head = head_before_reverse;
console.log("before reverse of even nodes");
while (temp_head) {
    console.log(temp_head.data);
    temp_head = temp_head.next;
}
let result = reverse_even_nodes(head_before_reverse);

temp_head = result;
console.log("after reverse of even nodes");
while (temp_head) {
    console.log(temp_head.data);
    temp_head = temp_head.next;
}