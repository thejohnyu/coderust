let reverse_k_nodes = function(head, k) {
    //  if k is 0 or 1, then list is not changed
    if (k <= 1 || !head) {
        return head;
    }

    let reversed = null;
    let prev_tail = null;

    while (head && k > 0) {
        let current_head = null;
        let current_tail = head;

        let n = k;
        while (head && n > 0) {
            let temp = head.next;
            head.next = current_head;
            current_head = head;

            head = temp;
            n--;
        }

        if (!reversed) {
            reversed = current_head;
        }

        if (prev_tail) {
            prev_tail.next = current_head;
        }

        prev_tail = current_tail;
    }

    return reversed;
};

console.log("");
console.log("");
console.log("+++++++++++++++++++++++++++++++++++++++");
console.log("Reverse K nodes");
console.log("---------------------------------------");

let head_before_reverse_k_nodes = create_linked_list([1, 2, 3, 4, 5, 6, 7]);

let temp_head = head_before_reverse_k_nodes;
console.log("before reverse");
while (temp_head) {
    console.log(temp_head.data);
    temp_head = temp_head.next;
}
let result = reverse_k_nodes(head_before_reverse_k_nodes, 3);

temp_head = result;
console.log("after reverse");
while (temp_head) {
    console.log(temp_head.data);
    temp_head = temp_head.next;
}