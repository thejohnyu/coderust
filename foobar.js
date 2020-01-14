class Node {
  constructor(val, left, right) {
    this.val = val;
    this.left = left;
    this.right = right;
  }

  toString() {
    return `postOrder(${this.val})`;
  }
}

/*
                 G
          D            
    B        E
A      C   
*/

function DEBUG_STACK(stack) {
  console.log("@@@ [FUNCTION CALL STACK]");
  for (let i = 0; i < 5; ++i) console.log("|--------------|");
  for (let i = stack.length - 1; i >= 0; i--) {
    console.log(`| ${stack[i]} |`);
  }
  console.log("................");
}

const A = new Node("A", null, null);
const B = new Node("B", A, new Node("C", null, null));
const D = new Node("D", B, new Node("E", null, null));
const G = new Node("G", D, new Node("K", null, null));

const stack = [];
const order = [];

function postOrder(node) {
  if (!node) return;
  stack.push(node.toString());
  DEBUG(node, true);
  DEBUG_STACK(stack);

  postOrder(node.left);
  postOrder(node.right);

  order.push(node.val);
  stack.pop();
  DEBUG_STACK(stack);
  DEBUG(node, false);
}

function DEBUG(node, isLoading) {
  // booleans should have isisLoading, isLoading
  const child = [];
  if (node.left) child.push(node.left);
  if (node.right) child.push(node.right);
  const Children = child.length > 0 ? child : "NONE";
  if (isLoading) {
    console.log(
      `\n@@@ [isLoading] Current Node: ${node.val} | Children: [${Children}]`
    );
  } else {
    console.log(`\n@@@ [FETCHED] Children: [${Children}]`);
    console.log(`              completed processing [${node.val}]`);
  }
}

postOrder(G);
console.log(
  "SUCCESS: stack is empty and there are no more function calls to make"
);
console.log(`POSTORDER: ${order}`);
class Node {
  constructor(data) {
    this.data = data;
    this.left = null;
    this.right = null;
  }
}
