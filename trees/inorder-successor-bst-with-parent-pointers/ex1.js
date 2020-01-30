let find_min_in_tree = function(root) {
    if (!root) {
      return null;
    }
  
    while (root.left) {
      root = root.left;
    }
  
    return root;
  };
  
  let inorder_successor_bst_parent_pointer = function(node) {
    if (!node) {
      return null;
    }
    
    if (node.right) {
      return find_min_in_tree(node.right);
    }

    while (node.parent) {
      if (node.parent.left === node) { // This if statement checks if the successor's left child is not null and is equal to current 
        return node.parent;
      }
  
      node = node.parent;
    }
  
    return null;
  };
  
  let find_successor = function(root, d) {
  
    while (root) {
      if (root.data < d) {
        root = root.right;
      } else if (root.data > d) {
        root = root.left;
      } else {
        return inorder_successor_bst_parent_pointer(root);
      }
    }
    return null;
  };
  
  console.log("");
  console.log("");
  console.log("+++++++++++++++++++++++++++++++++++++++");
  console.log("Inorder Successor BST Parent Pointer");
  console.log("---------------------------------------");
  var arr = [100,50,200,25,75,125,350];
  let root = create_BST(arr);
  populate_parents(root);
  display_inorder(root);
  let all_data = bst_to_list(root);
  let all_data_copy = all_data.slice();
  //shuffle(all_data_copy);
  for (let d in all_data_copy) {
  let successor = find_successor(root, all_data_copy[d]);
  let i = all_data.indexOf(all_data_copy[d]);
  let expected_val = null;
  if (i < all_data.length - 1) {
    expected_val = all_data[i + 1];
  }
  if (successor) {
  console.log("(" + all_data_copy[d] + ", " + successor.data + ")");
  } else {
    console.log("(" + all_data_copy[d] + ", Null)");
    }
  }
  console.log("++++++ Test Done Successfully ++++++");