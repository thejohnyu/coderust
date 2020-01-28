let print_left_perimeter = function(root) {
    while (root) {
      let curr_val = root.data;
  
      if (root.left) {
        root = root.left;
      } else if (root.right) {
        root = root.right;
      } else { // leaf node
        break;
      }
      console.log(curr_val + " ");
    }
  };
  
  let print_right_perimeter = function(root) {
    let r_values = []; // stack for right side values.
  
    while (root) {
      let curr_val = root.data;
  
      if (root.right) {
        root = root.right;
      } else if (root.left) {
        root = root.left;
      } else { // leaf node
        break;
      }
      r_values.push(curr_val);
    }
    while (r_values.length != 0) {
      console.log(r_values.pop() + " ");
    }
  };
  
  let print_leaf_nodes = function(root) {
    if (root) {
      print_leaf_nodes(root.left);
      if (!root.left && !root.right) {
        console.log(root.data + " ");
      }
      print_leaf_nodes(root.right);
    }
  };
  
  let display_tree_perimeter = function(root) {
    if (root) {
      console.log(root.data + " ");
      print_left_perimeter(root.left); // prints 9
  
      if (root.left || root.right) {
        print_leaf_nodes(root);
      }
  
      print_right_perimeter(root.right);
    }
  };
  
  console.log("");
  console.log("");
  console.log("+++++++++++++++++++++++++++++++++++++++");
  console.log("Print Perimeter");
  console.log("---------------------------------------");
  var arr = [100,25,75,15,350,300,10,50,200,400,325,375];
  let root = create_BST(arr);
  console.log("Print tree perimeter");
  display_tree_perimeter(root);
  console.log("++++++ Test Done Successfully ++++++");