let is_bst_rec = function(root, min_value, max_value) { // (100, null, null)
    if (!root) {
      return true;
    }
    // when we reached the most left node we now travese back up the stack and validate
    // 25 < null || 25 > 50
    // 50 < null || 50 > 100
    // 125 < 50 || 125 > 100 --> false
    if (root.data < min_value || root.data > max_value) {
      return false;
    }
    // 50, null, 100
    // 25, null, 50
    // true, true
    // 125, 50, 100
    return is_bst_rec(root.left, min_value, root.data) && is_bst_rec(root.right, root.data, max_value);
  };
  
  let is_bst = function(root) {
    return is_bst_rec(root, -Number.MAX_VALUE - 1, Number.MAX_VALUE);
  };
  
  console.log("");
  console.log("+++++++++++++++++++++++++++++++++++++++");
  console.log("Is Binary Search Tree");
  console.log("---------------------------------------");
  let root = create_random_BST(15);
  let root2 = create_random_BST(15);
  root2.data = 100;
  
  console.log("InOrder Traversal");
  display_inorder(root); 
  let output = is_bst(root);
  console.log ("Is BST? " + output);
  console.log("");
  
  console.log("InOrder Traversal");
  display_inorder(root2);
  let output1 = is_bst(root2);
  console.log ("Is BST? " + output1 );
  
  console.log("++++++ Test Done Successfully ++++++");