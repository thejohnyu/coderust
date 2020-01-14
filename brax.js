class Node {
  constructor(val, left, right) {
    this.val = val;
    this.left = left;
    this.right = right;
  }

  toString() {
    return this.val;
  }
}

/*
                 G
          D            
    B        E
A      C   
*/

const A = new Node("A", null, null);
const B = new Node("B", A, new Node("C", null, null));
const D = new Node("D", B, new Node("E", null, null));
const G = new Node("G", D, new Node("K", null, null));

const stack = [];
const order = [];

function postOrder(node) {
  if (!node) return;
  stack.push(node.val);
  console.log(`@@@ [STACK] after inserting ${node.val}: ${stack}`);
  DEBUG(node, true);
  postOrder(node.left);
  postOrder(node.right);

  order.push(node.val);
  DEBUG(node, false);
  stack.pop();
  console.log(`@@@ [STACK] after popping ${node.val}: ${stack}`);
}

function DEBUG(node, waiting) {
  const child = [];
  if (node.left) child.push(node.left);
  if (node.right) child.push(node.right);
  const dependencies = child.length > 0 ? child : "NONE";
  if (waiting) {
    console.log(
      `\n@@@ [WAITING] ${node.val} | dependencies: [${dependencies}]`
    );
  } else {
    console.log(
      `\n@@@ [FETCHED] ${node.val} | dependencies: [${dependencies}]`
    );
  }
}

postOrder(G);
console.log(
  "SUCCESS: stack is empty and there are no more function calls to make"
);
