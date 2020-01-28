let level_order_traversal_2 = function(root) {
    if (!root) {
      return;
    }
  
    let current_queue = []; // 25, 75, 350, null
    current_queue.push(root);
    current_queue.push(null);
  
    while (current_queue.length != 0) {
      let temp = current_queue.shift(); // 100
      console.log(temp.data + " "); // 100, 50, 200, 25, 75, 350
  
      if (temp.left) { // 50
        current_queue.push(temp.left);
      }
  
      if (temp.right) { // 200, 350
        current_queue.push(temp.right);
      }
      
      const isHeadNull = !current_queue[0]
      if (isHeadNull) { // head === null... this means we finish with the level
        current_queue.shift(); // remove null end marker
        if (current_queue.length != 0) {  // as long as the queue isnt empty we push null marker
          current_queue.push(null);
        }
      }
    }
  };
  
  console.log("");
  console.log("");
  console.log("+++++++++++++++++++++++++++++++++++++++");
  console.log("Level Order Traversal");
  console.log("---------------------------------------");
  var arr = [100,50,200,25,75,350];
  let root = create_BST(arr);
  console.log("InOrder Traversal:");
  display_inorder(root);
  console.log("\nLevel Order Traversal1:");
  level_order_traversal_2(root);
  console.log("++++++ Test Done Successfully ++++++");