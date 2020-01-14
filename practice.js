
class Node {
    constructor(val, left, right) {
        this.val = val;
        this.left = left;
        this.right = right;
    }
}


const node4 = new Node(4, null, new Node(5, null, null));
const node6 = new Node(6, 4, new Node(7, null, null));
const node50 = new Node(50, new Node(23, null, null), new Node(71, null, null));
const root = new Node(15, node6, node50);

function maximumAverageSubtree(root) {
  debugger

  if (!root) return 0; // typical way to check if root is null

  function postOrder(node) { //---> post order === Left then Right then Node (explore all of the children leafs before checking the subRoot2) AKA DFS
    if (!node) return [0, 0, 0]; // another guard to ensure the node exisit

    const [leftAverage, leftSum, leftCount] = postOrder(node.left);
    debugger
    const [rightAverage, rightSum, rightCount] = postOrder(node.right);
    
    const currSum = leftSum + rightSum + node.val; // subRoot = node.val + left Leaf + Right Leaf
    const currTotalCount = leftCount + rightCount + 1; // denominator to get the average later ( tally up the total leafs ) WHY ARE WE PLUS 1 ???????????
    const currAverage = currSum / currTotalCount; // 

    let accumulator = Math.max(currAverage, leftAverage, rightAverage); 
    return [accumulator, currSum, currTotalCount]; // Global Max, all subTree sums, all nodes count
  }

  let [globalMax, treeSum, treeCount] = postOrder(root);
  return globalMax;
}


const final = maximumAverageSubtree(root)
console.log('final ===>', final)


// Func1 Func2