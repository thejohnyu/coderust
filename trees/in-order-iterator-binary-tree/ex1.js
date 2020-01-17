class InorderIterator {
    constructor(root) {
      this.stk = [];
      // Assuming that when iterator is initialized
      // it is always at the first element of tree in its in-order
      while (root) {
        this.stk.push(root);
        root = root.left;
      }
    }
    isEmpty() {
      if (!this.stk || this.stk.length === 0) {
        return false;
      } else {
        return true;
      }
    }
    // getNext returns null if there are no more elements in tree
    getNext() {
      if (!this.stk || this.stk.length === 0) {
        return null;
      }
  
      let r_val = this.stk.pop();
      // this.stk.remove(-1)
      let temp = r_val.right;
      while (temp) {
        this.stk.push(temp);
        temp = temp.left;
      }
  
      return r_val;
    }
  }
  
  let inorder_using_iterator = function(root) {
    let iter = new InorderIterator(root);
    let result_str = '';
    while (!iter.isEmpty()) {
      let ptr = iter.getNext();
      result_str += ptr.data + ' ';
    }
    return result_str;
  };
  
  
  console.log("");
  console.log("");
  console.log("+++++++++++++++++++++++++++++++++++++++");
  console.log("Inorder Iterator");
  console.log("---------------------------------------");
  let root = create_random_BST(15);
  console.log("Inorder = ");
  var my_string = "";
  display_inorder(root);
  console.log("Inorder Iterator = " + inorder_using_iterator(root));
  console.log("++++++ Test Done Successfully ++++++");