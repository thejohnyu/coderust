let intersect = function(head1, head2) {
    let list1node = null;;
    let list1length = get_length(head1);
    let list2node = null;;
    let list2length = get_length(head2);

    let length_difference = 0;
    if (list1length >= list2length) {
        length_difference = list1length - list2length;
        list1node = head1;
        list2node = head2;
    } else {
        length_difference = list2length - list1length;
        list1node = head2;
        list2node = head1;
    }

    while (length_difference > 0) {
        list1node = list1node.next;
        length_difference--;
    }

    while (list1node) {
        if (list1node === list2node) {
            return list1node;
        }
        list1node = list1node.next;
        list2node = list2node.next;
    }

    return null;
};

let get_length = function(head) {
    let list_length = 0;
    while (head) {
        head = head.next;
        list_length++;
    }

    return list_length;
};

console.log("");
console.log("");
console.log("+++++++++++++++++++++++++++++++++++++++");
console.log("Insertion of Two Points Link List");
console.log("---------------------------------------");

let list1_head_8 = {
    data: 8,
    next: null
};
let list1_head_7 = {
    data: 7,
    next: list1_head_8
};
let list1_head_6 = {
    data: 6,
    next: list1_head_7
};
let list1_head_5 = {
    data: 5,
    next: list1_head_6
};
let list1_head_4 = {
    data: 4,
    next: list1_head_5
};
let list1_head_3 = {
    data: 3,
    next: list1_head_4
};
let list1_head_2 = {
    data: 2,
    next: list1_head_3
};
let list1_head_1 = {
    data: 1,
    next: list1_head_2
};

let list2_head_5 = {
    data: 15,
    next: list1_head_6
};
let list2_head_4 = {
    data: 14,
    next: list2_head_5
};
let list2_head_3 = {
    data: 13,
    next: list2_head_4
};
let list2_head_2 = {
    data: 12,
    next: list2_head_3
};
let list2_head_1 = {
    data: 11,
    next: list2_head_2
};
console.log(intersect(list1_head_1, list2_head_1));
console.log(intersect(list1_head_1, list2_head_1) === list1_head_6);