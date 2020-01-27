let level_order_traversal_1 = function(root) {
    if (!root) {
      return;
    }
  
    let queues = [
      [],
      []
    ];
    let current_queue = queues[0];
    let next_queue = queues[1];
  
    current_queue.push(root);
    let level_number = 0;
  
    while (current_queue.length > 0) {
      let temp = current_queue.shift();
      console.log(temp.data + " ");
      if (temp.left) {
        next_queue.push(temp.left);
      }
  
      if (temp.right) {
        next_queue.push(temp.right);
      }
  
      if (current_queue.length === 0) { // level = 1, 2, 3
        level_number++;
        current_queue = queues[level_number % 2]; // 0, 0, 1
        next_queue = queues[(level_number + 1) % 2]; // 1, 1, 0
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
  level_order_traversal_1(root);
  console.log("++++++ Test Done Successfully ++++++");