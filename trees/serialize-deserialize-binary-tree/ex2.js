let MARKER = Number.MAX_VALUE;
let serialize = function(node, stream) {
  if (!node) {
    stream.push(MARKER);
    return;
  }
  stream.push(node.data);
  serialize(node.left, stream);
  serialize(node.right, stream);
};

let deserialize = function(stream) {
  try {
    let data = stream.shift();
    if (data === MARKER) {
      return null;
    }

    let node = new BinaryTreeNode(data);
    node.left = deserialize(stream);
    node.right = deserialize(stream);
    return node;
  } catch (err) {
    return null;
  }
};

console.log("");
console.log("+++++++++++++++++++++++++++++++++++++++");
console.log("Tree Serialize Deserialize");
console.log("---------------------------------------");
let root = create_random_BST(15);
display_level_order(root);
let p = [];
serialize(root, p);
let root_deserialized = deserialize(p);
display_level_order(root_deserialized);
console.log("");
console.log("++++++ Test Done Successfully ++++++");