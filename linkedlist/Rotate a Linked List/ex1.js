let find_length = function(head) {
    let length = 0;
    while (head) {
        length++;
        head = head.next;
    }

    return length;
};

let adjust_rotations_needed = function(n, length) {
    //  If n is positive then number of rotations performed is from right side
    //  and if n is negative then number of rotations performed from left side
    //  Let's optimize the number of rotations.
    //  Handle case if 'n' is a negative number.
    n = n % length;

    if (n < 0) {
        n = n + length;
    }

    return n;
};

let rotate_list = function(head, n) {

    if (!head || n === 0) {
        return;
    }

    //  find length of the linked list
    let length = find_length(head);

    //  Let's optimize the number of rotations.
    //  Handle case if 'n' is a negative number.

    //  If n (number of rotations required) is bigger than
    //  length of linked list or if n is negative then
    //  we need to adjust total number of rotations needed
    n = adjust_rotations_needed(n, length);

    if (n === 0) {
        return head;
    }

    //  Find the start of rotated list.
    //  If we have 1, 2, 3, 4, 5 where n = 2,
    //  4 is the start of rotated list.
    let rotations_count = length - n - 1;
    let temp = head;

    while (rotations_count > 0) {
        rotations_count--;
        temp = temp.next;
    }

    //  After the above loop temp will be pointing
    //  to one node prior to rotation point
    let new_head = temp.next;

    //  Set new end of list.
    temp.next = null;

    //  Iterate to the end of list and 
    //  link that to original head.
    temp = new_head;
    while (temp.next) {
        temp = temp.next;
    }

    temp.next = head;

    return new_head;
};

console.log("");
console.log("");
console.log("+++++++++++++++++++++++++++++++++++++++");
console.log("Rotate Linked Lists");
console.log("---------------------------------------");

let head_before_rotate = create_linked_list([1, 2, 3, 4, 5]);

let temp_head = head_before_rotate;
console.log("before rotation");
while (temp_head) {
    console.log(temp_head.data);
    temp_head = temp_head.next;
}
let result = rotate_list(head_before_rotate, 2);

temp_head = result;
console.log("after rotation");
while (temp_head) {
    console.log(temp_head.data);
    temp_head = temp_head.next;
}