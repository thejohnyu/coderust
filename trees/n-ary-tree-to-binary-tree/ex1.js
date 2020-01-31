let convert_n_ary_to_binary = function(node) {
  return convert_n_ary_to_binary_rec(node, 1);
};

let convert_n_ary_to_binary_rec = function(root, isLeft) {
  if (!root) {
    return;
  }

  let btnode = new BinaryTreeNode(root.data);
  let lastnode = btnode;

  for (let c in root.children) {
    if (isLeft === 1) {
      lastnode.left = convert_n_ary_to_binary_rec(root.children[c], 0);
      lastnode = lastnode.left;
    } else {
      lastnode.right = convert_n_ary_to_binary_rec(root.children[c], 1);
      lastnode = lastnode.right;
    }
  }

  return btnode;
};

let convert_binary_to_n_ary = function(node) {
  return convert_binary_to_n_ary_rec(node, 1);
};

let convert_binary_to_n_ary_rec = function(node, isLeft) {
  if (!node) {
    return;
  }

  let nnode = new TreeNode(node.data);
  let temp = node;

  if (isLeft === 1) {
    while (temp.left) {
      let child = convert_binary_to_n_ary_rec(temp.left, 0);
      nnode.children.push(child);
      temp = temp.left;
    }
  } else {
    while (temp.right) {
      let child = convert_binary_to_n_ary_rec(temp.right, 1);
      nnode.children.push(child);
      temp = temp.right;
    }
  }
  return nnode;
};

console.log("");
console.log("");
console.log("+++++++++++++++++++++++++++++++++++++++");
console.log("Mirror Tree");
console.log("---------------------------------------");

let node1 = new TreeNode(1);
let node2 = new TreeNode(2);
let node3 = new TreeNode(3);
let node4 = new TreeNode(4);
node1.children.push(node2);
node1.children.push(node3);
node1.children.push(node4);
let node5 = new TreeNode(5);
let node6 = new TreeNode(6);
node3.children.push(node5);
node3.children.push(node6);
console.log("Original n-ary tree");
node1.display_level_order();
let bnode1 = convert_n_ary_to_binary(node1);
console.log("Converted binary tree");
display_level_order(bnode1);
let tnode1 = convert_binary_to_n_ary(bnode1);
console.log("Converted n-ary tree");
tnode1.display_level_order();
console.log("++++++ Test Done Successfully ++++++");
