https://dpaste.org/0ujw 
https://dpaste.org/0ujw
About History New snippet
JavaScript Expires in: 8 hours, 55 minutes
Delete Now
Raw
Slim



class Node {
    constructor(val, children) {
        this.val = val;
        this.children = children;
    }
}

function solve(root) {
    if (!root) return null;

    let maxAverage = 0;
    let ret = null;

    function dfs(node) {
        if (!node) return [0, 0];

        let totalCount = 1;
        let totalSum = node.val;
        node.children.forEach((child) => {
            let [subCount, subSum] = dfs(child);
            totalCount += subCount;
            totalSum += subSum;
        });
        let currAverage = totalSum / totalCount;
        if (currAverage > maxAverage && totalCount > 1) {
            maxAverage = currAverage;
            ret = node;
        }
        return [totalCount, totalSum];
    }

    dfs(root);
    return ret;
}


const node11 = new Node(11, []);
const node2 = new Node(2, []);
const node3 = new Node(3, []);

const node12 = new Node(12, [node11, node2, node3]);

const node15 = new Node(15, []);
const node8 = new Node(8, []);
const node18 = new Node(18, [node15, node8]);
const root = new Node(20, [node12, node18]);


console.log(solve(root));
Copy Snippet
Edit Snippet
 Wordwrap
class Node {
    constructor(val, children) {
        this.val = val;
        this.children = children;
    }
}
​
function solve(root) {
    if (!root) return null;
​
    let maxAverage = 0;
    let ret = null;
​
    function dfs(node) {
        if (!node) return [0, 0];
​
        let totalCount = 1;
        let totalSum = node.val;
        node.children.forEach((child) => {
            let [subCount, subSum] = dfs(child);
            totalCount += subCount;
            totalSum += subSum;
        });
        let currAverage = totalSum / totalCount;
        if (currAverage > maxAverage && totalCount > 1) {
            maxAverage = currAverage;
            ret = node;
        }
        return [totalCount, totalSum];
    }
​
    dfs(root);
    return ret;
}
​
​
const node11 = new Node(11, []);
const node2 = new Node(2, []);
const node3 = new Node(3, []);
​
const node12 = new Node(12, [node11, node2, node3]);
​
const node15 = new Node(15, []);
const node8 = new Node(8, []);
const node18 = new Node(18, [node15, node8]);
const root = new Node(20, [node12, node18]);
​
​
console.log(solve(root));