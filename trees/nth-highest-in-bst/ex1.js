let current_count = 0;
let find_nth_highest_in_bst = function(node, n) {
  if (!node) {
    return null;
  }

  let result = find_nth_highest_in_bst(node.right, n);
  if (result) {
    return result;
  }

  current_count = current_count + 1;

  if (n === current_count) {
    return node;
  }

  result = find_nth_highest_in_bst(node.left, n);
  if (result) {
    return result;
  }

  return null;
};

console.log("");
console.log("+++++++++++++++++++++++++++++++++++++++");
console.log("Find nth Heighest in BST");
console.log("---------------------------------------");

let root = new BinaryTreeNode(10);
root.count = 7;
insert(root, 12);
let node12 = find_in_bst(root, 12);
node12.count = 3;
insert(root, 3);
let node3 = find_in_bst(root, 3);
node3.count = 3;
insert(root, 4);
let node4 = find_in_bst(root, 4);
node4.count = 2;
insert(root, 8);
let node8 = find_in_bst(root, 8);
node8.count = 1;
insert(root, 18);
let node18 = find_in_bst(root, 18);
node18.count = 2;
insert(root, 16);
let node16 = find_in_bst(root, 16);
node16.count = 1;

console.log("InOrder Traversal:");
display_inorder(root);
console.log("");
console.log("");
console.log("");

let n = 2;
current_count = 0;
let nth_highest_node = find_nth_highest_in_bst(root, n);
console.log(nth_highest_node.data);

n = 1;
current_count = 0;
nth_highest_node = find_nth_highest_in_bst(root, n);
console.log(nth_highest_node.data);

n = 5;
current_count = 0;
nth_highest_node = find_nth_highest_in_bst(root, n);
console.log(nth_highest_node.data);

n = 30;
current_count = 0;
nth_highest_node = find_nth_highest_in_bst(root, n);
console.log(nth_highest_node);
console.log("++++++ Test Done Successfully ++++++");
