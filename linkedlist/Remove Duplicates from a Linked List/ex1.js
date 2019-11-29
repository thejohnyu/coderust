let delete_node = function(head, key) {
  let prev = null; // this looks similar to a temp variable
  let current = head; // standard


  while (current) { // standard
    if (current.data === key) { // typical if statement for a filter
      if (current === head) { // only 1 time this will hit, 
        head = head.next; // typical way to traverse to the next node.
        current = head; // assign the current to head
      } else { /// else if is not the head
        prev.next = current.next; // temp.next = N + 1
        current = current.next; // cur = n + 1, typical way to traverse the node
      }
    } else { // IF the current.data does not match the target
      prev = current; // temporary variable
      current = current.next; // traverse the loop
    }
  }

  //  key not found in list
  if (!current) {
    return head;
  }

  return head;
};

console.log("");
console.log("");
console.log("+++++++++++++++++++++++++++++++++++++++");
console.log("Delete Key from LinkList");
console.log("---------------------------------------");
const create_linked_list = arr =>
  arr.reduceRight((next, data) => {
    const node = {
      data,
      next
    }
    next = node
    return next
  } , null);
let head_before_delete = create_linked_list([0, 1, 2, 3, 4, 5, 10, 9]);
console.log("head_before_delete ", head_before_delete);

let temp_head = head_before_delete;
console.log("before delete key");
while (temp_head) {
  console.log(temp_head.data);
  temp_head = temp_head.next;
}

head_before_delete = delete_node(head_before_delete, 5);
temp_head = head_before_delete;
console.log("after delete key number 5");
while (temp_head) {
  console.log(temp_head.data);
  temp_head = temp_head.next;
}
head_before_delete = delete_node(head_before_delete, 10);
temp_head = head_before_delete;
console.log("after delete key number 10");
while (temp_head) {
  console.log(temp_head.data);
  temp_head = temp_head.next;
}
head_before_delete = delete_node(head_before_delete, 0);
temp_head = head_before_delete;
console.log("after delete key number 0");
while (temp_head) {
  console.log(temp_head.data);
  temp_head = temp_head.next;
}


const deleteMyNodeByKey = (head, key) => {
    let prev = null;
    let cur = head;

    const validationModel = {
        'hasValidHeadAndKey': [isValidKey('key'), isHead()], // true true
        'hasValidKey': [isValidKey('key')], // true
        'default': [isValidKey('default`4')]
    }

    while(cur) {
        if (cur.data === key) { // if key
             if (cur === head) { // if head 
                head = head.next // traverse to the next node (head.next) and reassign head
                cur = head // now update the cur as head the new head
            } else {
                // [5, 10]
                // if key 5
                // prev.next = 5
                // cur.data = 5
                // cur.next = 10
                prev.next = cur.next
                cur = cur.next
            }
        } else {
            prev = cur
            cur = cur.next
        }
    }

    return head
}