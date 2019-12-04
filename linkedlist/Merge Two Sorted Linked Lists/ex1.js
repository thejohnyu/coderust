let merge_sorted = function(head1, head2) {
    // if both lists are empty then merged list is also empty
    // if one of the lists is empty then other is the merged list
    if (!head1) {
        return head2;
    } else if (!head2) {
        return head1;
    }

    let mergedHead = null;
    if (head1.data <= head2.data) {
        mergedHead = head1;
        head1 = head1.next;
    } else {
        mergedHead = head2;
        head2 = head2.next;
    }

    let mergedTail = mergedHead;

    while (head1 && head2) {
        let temp = null;
        if (head1.data <= head2.data) {
            temp = head1;
            head1 = head1.next;
        } else {
            temp = head2;
            head2 = head2.next;
        }

        mergedTail.next = temp;
        mergedTail = temp;
    }

    if (head1) {
        mergedTail.next = head1;
    } else if (head2) {
        mergedTail.next = head2;
    }

    return mergedHead;
};

console.log("");
console.log("");
console.log("+++++++++++++++++++++++++++++++++++++++");
console.log("Insertion Sort");
console.log("---------------------------------------");

let merge_sort_node_1 = create_linked_list([1, 3, 5, 6]);
let merge_sort_node_2 = create_linked_list([2, 4, 6, 20, 34]);
let merged_sort = create_linked_list([1, 2, 3, 4, 5, 6, 6, 20, 34]);


let temp_head = merge_sort_node_1;
console.log("1st Linked List");
while (temp_head) {
    console.log(temp_head.data);
    temp_head = temp_head.next;
}

temp_head = merge_sort_node_2;
console.log("2nd Linked List");
while (temp_head) {
    console.log(temp_head.data);
    temp_head = temp_head.next;
}
let result = merge_sorted(merge_sort_node_1, merge_sort_node_2);

temp_head = result;
console.log("Result Merge Sorted List");
while (temp_head) {
    console.log(temp_head.data);
    temp_head = temp_head.next;
}