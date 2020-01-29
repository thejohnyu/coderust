let populate_sibling_pointers_2 = function(root) {
    if (!root) {
      return;
    }
  
    let queue = [];
    queue.push(root);
    let prev = null;
  
    while (queue.length > 0) {
      let temp = queue.shift();
  
      if (prev) {
        prev.next = temp;
      }
  
      prev = temp;
  
      if (temp.left) {
        queue.push(temp.left);
      }
  
      if (temp.right) {
        queue.push(temp.right);
      }
    }
    prev.next = null;
  };
  
  let level_order_traversal_with_sibling = function(root) {
    while (root) {
      console.log(root.data + ",");
      root = root.next;
    }
  };
  
  console.log("");
  console.log("");
  console.log("+++++++++++++++++++++++++++++++++++++++");
  console.log("Populate Sibling");
  console.log("---------------------------------------");
  
  let root = create_random_BST(15);
  display_level_order(root);
  populate_sibling_pointers_2(root);
  level_order_traversal_with_sibling(root);
  
  var v = [100,25,75,15,350,300,10,50,200,400,325,375]
  let  root1 = create_BST(v)
  display_level_order(root1);
  populate_sibling_pointers_2(root1)  
  console.log(root1.next.data) //25
  console.log(root1.right.left.next.data) //400
  console.log(root1.right.right.next.data) //10
  
  console.log("++++++ Test Done Successfully ++++++");