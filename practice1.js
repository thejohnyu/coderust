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
  if (root === null) return 0;
  let result = postOrder(root);
  return result.maximumAverage;
}

function postOrder(node) {
  if (!node) {
    return {
      maximumAverage: 0,
      sumOfAllValues: 0,
      numberOfNodes: 0
    };
  }

  const leftResult = postOrder(node.left);
  const rightResult = postOrder(node.right);

  const totalSumFromChildren =
    leftResult.sumOfAllValues + rightResult.sumOfAllValues;
  const numberOfNodesFromChildren =
    leftResult.numberOfNodes + rightResult.numberOfNodes;

  const totalSum = node.val + totalSumFromChildren;
  const totalNumberOfNodes = numberOfNodesFromChildren + 1;
  const currentAverage = totalSum / totalNumberOfNodes;

  const bestAverageFound = Math.max(
    currentAverage,
    leftResult.maximumAverage,
    rightResult.maximumAverage
  );

  return {
    maximumAverage: bestAverageFound,
    sumOfAllValues: totalSum,
    numberOfNodes: totalNumberOfNodes
  };
}

const final = maximumAverageSubtree(root);

console.log("final", final);
