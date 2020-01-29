let connect_next_level = function(head) {

    let current = head;
    let next_level_head = null;
    let prev = null;
  
    while (current) {
  
      if (current.left && current.right) {
  
        if (!next_level_head) {
          next_level_head = current.left;
        }
        current.left.next = current.right;
  
        if (prev) {
          prev.next = current.left;
        }
  
        prev = current.right;
      } else if (current.left) {
        if (!next_level_head) {
          next_level_head = current.left;
        }
        if (prev) {
          prev.next = current.left;
        }
  
        prev = current.left;
      } else if (current.right) {
        if (!next_level_head) {
          next_level_head = current.right;
        }
        if (prev) {
          prev.next = current.right;
        }
        prev = current.right;
      }
  
      current = current.next;
    }
  
    if (prev) {
      prev.next = null;
    }
  
    return next_level_head;
  };
  
  let populate_sibling_pointers = function(root) {
    if (!root) {
      return;
    }
  
    root.next = null;
  
    while (root) {
      root = connect_next_level(root);
    }
  };
  
  let get_level_order_using_next = function(root) {
    let output = [];
    while (root) {
      let head = root;
      let next_head = null;
      while (head) {
        output.push(head.data);
        if (!next_head) {
          next_head = head.right;
          if (head.left) {
            next_head = head.left;
          }
        }
        head = head.next;
      }
      root = next_head;
    }
    return output;
  };
  
  let reset_siblings = function(root) {
    if (!root) {
      return;
    }
  
    root.next = null;
    reset_siblings(root.left);
    reset_siblings(root.right);
  };
  
  console.log("");
  console.log("+++++++++++++++++++++++++++++++++++++++");
  console.log("Populate Sibling Pointers");
  console.log("---------------------------------------");
  
  let v = [100,25,75,15,350,300,10,50,200,400,325,375]
  let root = create_BST(v);
  populate_sibling_pointers(root);
  console.log(root.left.next.data) //350
  console.log(root.left.right.next.data) //300
  console.log(root.right.left.next.data) //400
  console.log("");
  console.log("++++++ Test Done Successfully ++++++");