// this method splits linked list in two halves by iterating over whole list
// It returns head pointers of first and 2nd halves of linked lists in first_second
// Head of 1st half is just the head node of linked list
let split_in_half = function(head, first_second) {
    if (!head) {
        first_second.first = null;
        first_second.second = null;
        return;
    }

    // Only one element in the list
    if (!head.next) {
        first_second.first = head;
        first_second.second = null;
    } else {
        // Let's use the classic technique of moving two pointers:
        // 'fast' and 'slow'. 'fast' will move two steps in each 
        // iteration where 'slow' will be pointing to middle element
        // at the end of loop.
        let slow = head;
        let fast = head.next;
        while (fast) {
            fast = fast.next;
            if (fast) {
                fast = fast.next;
                slow = slow.next;
            }

        }

        first_second.first = head;
        first_second.second = slow.next;
        // Terminate first linked list.
        slow.next = null;
    }
};

let merge_sorted_lists = function(first, second) {
    if (!first) {
        return second;
    }

    if (!second) {
        return first;
    }

    let new_head = null;

    if (first.data <= second.data) {
        new_head = first;
        first = first.next;
    } else {
        new_head = second;
        second = second.next;
    }

    let new_current = new_head;
    while (first && second) {
        let temp = null;
        if (first.data <= second.data) {
            temp = first;
            first = first.next;
        } else {
            temp = second;
            second = second.next;
        }

        new_current.next = temp;
        new_current = temp;
    }

    if (first) {
        new_current.next = first;
    } else if (second) {
        new_current.next = second;
    }

    return new_head;
};

let merge_sort = function(head) {
    // No need to sort a single element.
    if (!head || !head.next) {
        return head;
    }

    let first = null;
    let second = null;
    let first_second = {
        first,
        second
    };

    // Let's split the list in half, sort the sublists
    // and then merge the sorted lists.
    split_in_half(head, first_second);

    first_second.first = merge_sort(first_second.first);
    first_second.second = merge_sort(first_second.second);

    return merge_sorted_lists(first_second.first, first_second.second);
};

console.log("");
console.log("");
console.log("+++++++++++++++++++++++++++++++++++++++");
console.log("Merge Sort");
console.log("---------------------------------------");

let v1 = [5, 1, 2, 34, 2, 5, 1, 3, 2, 6, 0];
let v1_result = [0, 1, 1, 2, 2, 2, 3, 5, 5, 6, 34];
let list_head_1 = create_linked_list(v1);
let list_head_1_result = create_linked_list(v1_result);
console.log("Unsorted linked list: ");
display(list_head_1);

console.log("Sorted linked list: ");

list_head_1 = merge_sort(list_head_1);
display(list_head_1);