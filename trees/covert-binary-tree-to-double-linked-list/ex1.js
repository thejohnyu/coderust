let concatenate_lists = function(head1, head2) {

    if (!head1) { 
      return head2;
    }
  
    if (!head2) {
      return head1;
    }
  
    // use left for previous.
    // use right for next.
    let tail1 = head1.left;
    let tail2 = head2.left;
  
    tail1.right = head2;
    head2.left = tail1;
  
    head1.left = tail2;
    tail2.right = head1;
  
    return head1;
  };
  
  let convert_to_linked_list = function(root) { // 25
    if (!root) {
      return null;
    }
  
    let list1 = convert_to_linked_list(root.left); // null
    let list2 = convert_to_linked_list(root.right); // 30
    root.right = root; // { data: 30, left: null, right: 30 }
    root.left = root.right; // { data: 30, left: 30, right: 30 }
    let result = concatenate_lists(list1, root); 
    result = concatenate_lists(result, list2);
  
    return result;
  };
  
  let get_list = function(head) {
    let r = [];
    if (!head) {
      return r;
    }
  
    let temp = head;
    while (true) {
      r.push(temp.data);
      temp = temp.right;
      if (temp === head) {
        break;
      }
    }
    return r;
  };
  
  console.log("");
  console.log("+++++++++++++++++++++++++++++++++++++++");
  console.log("Convert to double linked list");
  console.log("---------------------------------------");
  
  data = [100, 50, 200, 25, 75, 125, 300];
  let root = create_BST(data);
  let all_data = bst_to_list(root);
  let head = convert_to_linked_list(root);
  let v = get_list(head);
  console.log("");
  console.log("Converted List: " + v);
  console.log("++++++ Test Done Successfully ++++++");