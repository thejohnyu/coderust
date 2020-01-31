let delete_zero_sum_subtree_rec = function(root) {
  if (!root) {
    return 0;
  }

  let sum_left = delete_zero_sum_subtree_rec(root.left);
  let sum_right = delete_zero_sum_subtree_rec(root.right);

  if (sum_left === 0) {
    root.left = null;
  }

  if (sum_right === 0) {
    root.right = null;
  }

  return root.data + sum_left + sum_right;
};

let delete_zero_sum_subtree = function(root) {
  if (root) {
    let sum = delete_zero_sum_subtree_rec(root);
    if (sum === 0) { // delete sub tree when sub root === 0
      root = null;
    }
  }
};

let create_test_tree1 = function() {
  let head = new BinaryTreeNode(7);
  let curr_head = head;

  let left = new BinaryTreeNode(5);
  let right = new BinaryTreeNode(6);
  curr_head.left = left;
  curr_head.right = right;

  curr_head = head.left;
  left = new BinaryTreeNode(-3);
  right = new BinaryTreeNode(-2);
  curr_head.left = left;
  curr_head.right = right;

  return head;
};

console.log("");
console.log("");
console.log("+++++++++++++++++++++++++++++++++++++++");
console.log("Delete Zero Sum Sub Trees");
console.log("---------------------------------------");
let root = create_test_tree1();
console.log("Level Order Traversal:");
level_order_traversal(root);
delete_zero_sum_subtree(root);
console.log("Level Order Traversal:");
level_order_traversal(root);
console.log("++++++ Test Done Successfully ++++++");
