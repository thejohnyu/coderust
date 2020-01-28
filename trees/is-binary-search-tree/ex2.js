let prev = -1;
let is_binary_search_tree = function(root) {
  // assuming all tree values are positive.
  prev = -1;
  return is_binary_search_tree_rec(root);
};

let is_binary_search_tree_rec = function(root) {

  if (!root) {
    return true;
  }

  if (is_binary_search_tree_rec(root.left) === false) {
    return false;
  }

  if (prev > root.data && prev != -1) {
    return false;
  }

  prev = root.data;

  if (is_binary_search_tree_rec(root.right) === false) {
    return false;
  }

  return true;
};

console.log("");
console.log("+++++++++++++++++++++++++++++++++++++++");
console.log("Is Binary Search Tree Solution 2");
console.log("---------------------------------------");
let root = create_random_BST(15);
let root2 = create_random_BST(15);
root2.data = 100;

console.log("InOrder Traversal");
display_inorder(root);
let output = is_binary_search_tree(root);
console.log ("Is BST? " + output);
console.log("");

console.log("InOrder Traversal");
display_inorder(root2);
let output1 = is_binary_search_tree(root2);
console.log ("Is BST? " + output1 );

console.log("++++++ Test Done Successfully ++++++");