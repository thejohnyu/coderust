/**
 * Used internally in the main BST class to store
 * data in the tree structure. Each node represents
 * a key/value pair in our BST.
 */
class BSTNode {
  /* Initializes node storage upon creation: */
  constructor(key, value) {
    /* Internal variables for storing data: */
    this.key = key;
    this.value = value; 
    this.left = null;
    this.right = null;
  }
}

/**
 * Main wrapper class for the BST data structure.
 * Implements necessary ADT member functions for
 * accessing, adding and removing data from the tree.
 */
class BST {
  /* Creates a new BST object. */
  constructor() {
    /* Stores the root node of the tree */
    this.root = new BSTNode(null, null);

    /* Required for member functions to access
           class member variables through current class
           context using 'this' */
    this.insert.bind(this);
    this.find.bind(this);
    this.remove.bind(this);
    this.isEmpty.bind(this);
  }

  /* Inserts a new key/value pair into the BST. */ 

  insert(key, value) { // key 10: 5
    /* Lambda function to recursively find insertion node
       and add data to that insertion point accordingly. */
    const insertRecursive = (subRoot, key, value) => { //
      if (subRoot.key === null) {
        /* We've reached the insertion point,
                add the data here. */
        subRoot.key = key;
        subRoot.value = value;
        /* Add sentinel nodes to the left/right fields */
        subRoot.left = new BSTNode(null, null);
        subRoot.right = new BSTNode(null, null);
      } else {
        if (key === subRoot.key) {
          /* Key already exists in the tree. As per
                implementation, replace existing node with
                new insertion data */
          subRoot.value = value;
        } else {
          /* We haven't reached the insertion point
                    yet and need to recurse deeper into the
                    tree. */
          key < subRoot.key
            ? insertRecursive(subRoot.left, key, value)
            : insertRecursive(subRoot.right, key, value);
        }
      }
    };
    /* Call insertion recursively on the root */
    insertRecursive(this.root, key, value);
  }

  /* Finds the data associated with the supplied 
       key. Returns NULL if no such key is present. */
  find(key) {}

  /* Removes data with supplied key from the BST. */
  remove(key) {}

  /* Returns true if no data is in the BST, and false
       if the structure stores data. */
  isEmpty() {}
}

/* Export the BST class for use in other files */
module.exports = BST;

const BST = require("./BST");

/* Create a new tree */
const tree = new BST();

/* Insert some key/values into the tree */
tree.insert(
  "NodeJS",
  "Node.js is an open-source, cross-platform JavaScript run-time environment that executes JavaScript code outside of a browser."
);
tree.insert(
  "Python",
  "Python is an interpreted, high-level, general-purpose programming language."
);
tree.insert("C++", "C++ is a general-purpose programming language.");
tree.insert(
  "Ruby",
  "Ruby is a dynamic, interpreted, reflective, object-oriented, general-purpose programming language."
);
tree.insert(
  "Haskell",
  "Haskell is a standardized, general-purpose, purely functional programming language with non-strict semantics and strong static typing."
);

/* Remove C++ */
tree.remove("C++");

/* Get the definition of NodeJS */
console.log(`\nNodeJS Definition: ${tree.find("NodeJS")}\n`);

/* Pretty-print the tree to the console: */
console.log(`\nTree: ${JSON.stringify(tree, null, 2)}\n`);
