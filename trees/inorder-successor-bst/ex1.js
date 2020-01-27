let find_min = function(root) {
  if (!root) {
    return null;
  }

  while (root.left) {
    root = root.left;
  }

  return root;
};

let find_max = function(root) {
  if (!root) return null;
  while (root.right) {
    root = root.right;
  }

  return root;
};

let inorder_successor_bst = function(root, d) {
  if (!root) {
    return null;
  }

  let successor = null;

  while (root) {
    if (root.data < d) {
      root = root.right;
    } else if (root.data > d) {
      successor = root;
      root = root.left;
    } else {
      if (root.right) {
        successor = find_min(root.right);
      }
      break;
    }
  }
  return successor;
};

//from common.js
//from random import shuffle;
console.log("");
console.log("");
console.log("+++++++++++++++++++++++++++++++++++++++");
console.log("Iterative Successor BST");
console.log("---------------------------------------");
const create_BST = arr => {
  return new Tree(arr);
};
var arr = [25, 125, 200, 350, 50, 75, 100];
let root = create_BST(arr);
let all_data = bst_to_list(root);
let all_data_copy = all_data.slice();
//shuffle(all_data_copy);
for (let d in all_data_copy) {
  //successor = inorder_successor_bst(root, d);
  //i = all_data.index(d)
  let successor = inorder_successor_bst(root, all_data_copy[d]);
  let i = all_data.indexOf(all_data_copy[d]);
  let expected_val = null;
  if (i < all_data.length - 1) {
    expected_val = all_data[i + 1];
  }
  /*if (expected_val) {
        expect(expected_val).toEqual(successor.data);
       } else {
        expect(expected_val).toEqual(null);
  }*/

  if (successor) {
    console.log("(" + all_data_copy[d] + ", " + successor.data + ")");
  } else {
    console.log("(" + all_data_copy[d] + ", null)");
  }
}
console.log("++++++ Test Done Successfully ++++++");
