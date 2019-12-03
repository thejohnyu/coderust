let sorted_insert = function(head, node) {
  const hasNode = !node;
  if (hasNode) {
    return head;
  }

  const hasHead = !head || node.data <= head.data;
  if (hasHead) {
    node.next = head;
    return node;
  }

  let curr = head;
  const hasVaildNode = curr.next && curr.next.data < node.data; // if the next data is smaller than the current
  while (hasVaildNode) {
    curr = curr.next;
  }

  // reminds of prev.next = cur.next
  node.next = curr.next;
  curr.next = node;

  return head;
};

let insertion_sort = function(head) {
  let acc = null; // acc
  let curr = head;

  while (curr) {
    let temp = curr.next;
    acc = sorted_insert(acc, curr);
    curr = temp;
  }

  return acc;
};

console.log("");
console.log("");
console.log("+++++++++++++++++++++++++++++++++++++++");
console.log("Insertion Sort");
console.log("---------------------------------------");

let head_before_sort = create_linked_list([7, 4, 2, 5, 1, 9]);

let temp_head = head_before_sort;
console.log("before sort");
while (temp_head) {
  console.log(temp_head.data);
  temp_head = temp_head.next;
}

head_before_sort = insertion_sort(head_before_sort);
temp_head = head_before_sort;
console.log("after insertion sort");
while (temp_head) {
  console.log(temp_head.data);
  temp_head = temp_head.next;
}
