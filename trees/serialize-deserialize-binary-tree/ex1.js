let serialize_preorder = function(node, stream) {
    if (!node) {
      return;
    }
  
    stream.push(node.data);
    serialize_preorder(node.left, stream);
    serialize_preorder(node.right, stream);
  };
  
  let serialize_inorder = function(node, stream) {
    if (!node) {
      return;
    }
  
    serialize_inorder(node.left, stream);
    stream.push(node.data);
    serialize_inorder(node.right, stream);
  };
  
  let deserialize_preorder = function(stream, size) {
    let v = [];
  
    for (let i = 1; i < size; i++) {
      let data = stream.shift();
      v.push(data);
    }
    return v;
  };
  
  let deserialize_inorder = function(stream, size) {
    let v = [];
  
    for (let i = 1; i < size; i++) {
      let data = stream.shift();
      v.push(data);
    }
  
    return v;
  };
  
  let deserialize2 = function(preOrder, inOrder, preStart, inStart, preEnd, inEnd) {
  
    // check if there is no element or one element
    if (preStart > preEnd) {
      return null;
    } else if (preStart === preEnd) {
      let node = new BinaryTreeNode(preOrder[preStart]);
      node.left = null;
      node.right = null;
      return node;
    }
  
    // otherwise first element in preOrder array is root,
    // we find that value in inOrder array
    // and determine how many elemnets are in left and
    // right subtrees
    let rootIndexInorder = 0;
  
    for (let i = inStart; i < inEnd + 1; i++) {
      if (inOrder[i] === preOrder[preStart]) {
        // we find the first value of preOrder in
        // inOrder array.
        rootIndexInorder = i;
        break;
      }
    }
  
    // now we calculate number of elements in right subtree
    // and left subtree
    let leftSubCount = rootIndexInorder - inStart;
    let rightSubCount = inEnd - rootIndexInorder;
  
    let node = new BinaryTreeNode(preOrder[preStart]);
    node.left = deserialize2(preOrder, inOrder, preStart + 1, inStart, preStart + leftSubCount, inStart + leftSubCount - 1);
    node.right = deserialize2(preOrder, inOrder, preStart + leftSubCount + 1, inStart + leftSubCount + 1, preEnd, inEnd);
    return node;
  };
  
  
  console.log("");
  console.log("+++++++++++++++++++++++++++++++++++++++");
  console.log("Tree Serialize Deserialize");
  console.log("---------------------------------------");
  console.log("Testing solution 2...");
  let tree_size = 10;
  let root2 = create_random_BST(tree_size);
  console.log('Random BST');
  display_level_order(root2);
  let p1 = [];
  let p2 = [];
  serialize_preorder(root2, p1);
  serialize_inorder(root2, p2);
  console.log('Serialize Preorder: ', p1);
  console.log('Serialize Inorder: ', p2);
  let preorder = deserialize_preorder(p1, tree_size);
  let inorder = deserialize_inorder(p2, tree_size);
  let root2_deserialized = deserialize2(preorder, inorder, 0, 0, preorder.length - 1, inorder.length - 1);
  display_level_order(root2_deserialized);
  console.log("++++++ Test Done Successfully ++++++");