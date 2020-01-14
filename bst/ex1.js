class BinarySearchTree {
  constructor() {
    // Initialize a root element to null.
    this.root = null;
  }
  insertIter(data) {
    let node = new this.Node(data);

    // Check if the tree is empty
    if (this.root === null) {
      // Insert as the first element
      this.root = node;
      return;
    }
    let currNode = this.root;
    while (true) {
      if (data < currNode.data) {
        // Set the value here as we've reached a leaf node
        if (currNode.left === null) {
          currNode.left = node;
          break;
        } else {
          currNode = currNode.left;
        }
      } else {
        // Set the value here as we've reached a leaf node
        if (currNode.right === null) {
          currNode.right = node;
          break;
        } else {
          currNode = currNode.right;
        }
      }
    }
  }
  insertRec(data) {
    let node = new this.Node(data);

    // Check if the tree is empty
    if (this.root === null) {
      // Insert as the first element
      this.root = node;
    } else {
      insertRecHelper(this.root, node);
    }
  }
  searchIter(data) {
    let currNode = this.root;

    while (currNode !== null) {
      if (currNode.data === data) {
        // Found the element!
        return true;
      } else if (data < currNode.data) {
        // Go Left as data is smaller than parent
        currNode = currNode.left;
      } else {
        // Go right as data is greater than parent
        currNode = currNode.right;
      }
    }
    return false;
  }
  searchRec(data) {
    return searchRecHelper(data, this.root);
  }
  getMinVal() {
    if (this.root === null) {
      throw "Empty tree!";
    }
    let currNode = this.root;

    while (currNode.left !== null) {
      currNode = currNode.left;
    }
    return currNode.data;
  }
  getMaxVal() {
    if (this.root === null) {
      throw "Empty tree!";
    }
    let currNode = this.root;

    while (currNode.right !== null) {
      currNode = currNode.right;
    }
    return currNode.data;
  }
  deleteNode(key) {
    return !(deleteNodeHelper(this.root, key) === false);
  }
  inOrder() {
    inOrderHelper(this.root);
  }
  preOrder() {
    preOrderHelper(this.root);
  }
  postOrder() {
    postOrderHelper(this.root);
  }
}

BinarySearchTree.prototype.Node = class {
  constructor(data, left = null, right = null) {
    this.data = data;
    this.left = left;
    this.right = right;
  }
};

// HELPER METHODS
function preOrderHelper(root) { // k, I, H
  if (root !== null) { // false
    console.log(root.data); // k, I, H
    preOrderHelper(root.left); // k.I, I.H, H.left = null
    preOrderHelper(root.right); // K.M
  }
}
function inOrderHelper(root) {
  if (root !== null) {
    inOrderHelper(root.left);
    console.log(root.data);
    inOrderHelper(root.right);
  }
}

function postOrderHelper(root) { // C
  if (root !== null) { 
    postOrderHelper(root.left);
    postOrderHelper(root.right); // null,
    console.log(root.data); // print C
  }
}
// Root = 50
// 1st insertion = 27
// 2nd insertion = 76
// 3rd insertion = 2
// 4th insertion = 49
function insertRecHelper(root, node) {
  // 27
  const isRootGreaterThanCurNode = node.data < root.data;
  if (isRootGreaterThanCurNode) { 
    const isLeftSubTreeEmpty = root.left === null;
    if (isLeftSubTreeEmpty) {
      const createNewLeftNode = ({ left }, node) => (left = node);
      createNewLeftNode(root, node);
    } else {
      insertRecHelper(root.left, node);
    }
  } else {
    const isRightSubTreeEmpty = root.right === null;
    if (isRightSubTreeEmpty) {
      const createNewRightNode = ({ right }, node) => (right = node);
      createNewRightNode(root, node);
    } else {
      insertRecHelper(root.right, node);
    }
  }
}

function searchRecHelper(data, root) {
  if (root === null) {
    // Reached leaf but didn't find it.
    return false;
  }
  if (data < root.data) {
    return searchRecHelper(data, root.left);
  } else if (data > root.data) {
    return searchRecHelper(data, root.right);
  }
  // This means element is found return true;
}

/**
 * Takes root and key and recursively searches for the key.
 * If it finds the key, there could be 3 cases:
 *
 * 1. This node is a leaf node. *
 * Example: Removing F
 *    A
 *   / \
 *   B C
 *  / / \
 *  D E F
 *
 * To remove it, we can simply remove its parent's connection to it.
 *
 *    A
 *   / \
 *   B C
 *   / /
 *   D E
 *
 * 2. This node is in between the tree somewhere with one child.
 *
 * Example: Removing B
 *    A
 *   / \
 *   B C
 *  / / \
 *  D E F
 *
 * To remove it, we can simply make the child node replace the parent node in the above connection
 *       A
 *      / \
 *     D  C
 *    /    \
 *   E     F
 *
 * 3. This node has both children. This is a tricky case.
 *
 * Example: Removing C *
 *       A
 *      / \
 *      B C
 *     / / \
 *     D E F
 *      / / \
 *     G  H  I
 *
 * In this case, we need to find either a successor or a predecessor of the node and replace this node with
 * that. For example, If we go with the successor, its successor will be the element just greater than it,
 * ie, the min element in the right subtree. So after deletion, the tree would look like:
 *
 *      A
 *     / \
 *    B   H
 *   /   / \
 *  D    E  F
 *      /    \
 *     G     I
 *
 * To remove this element, we need to find the parent of the successor, break their link, make successor's left
 * and right point to current node's left and right. The easier way is to just replace the data from node to be
 * deleted with successor and delete the sucessor.
 */

function deleteNodeHelper(root, key) {
  if (root === null) {
    // Empty tree return false;
  }

  if (key < root.data) {
    root.left = deleteNodeHelper(root.left, key);
    return root;
  } else if (key > root.data) {
    root.right = deleteNodeHelper(root.right, key);
    return root;
  } else {
    // No children
    //case 1 - a leaf node
    if (root.left === null && root.right === null) {
      root = null;
      return root;
    }

    // Single Child cases
    if (root.left === null) return root.right;
    if (root.right === null) return root.left;

    // Both children, so need to find successor
    let currNode = root.right;

    while (currNode.left !== null) {
      currNode = currNode.left;
    }
    root.data = currNode.data;

    // Delete the value from right subtree.
    root.right = deleteNodeHelper(root.right, currNode.data);
    return root;
  }
}


q