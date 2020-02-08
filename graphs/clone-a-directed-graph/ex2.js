class Graph {
  constructor() {
    this.adjList = {};
  }

  addNode(node) {
    this.adjList[node] = {
      data: node,
      edges: []
    };
  }

  addEdge(node1, node2) {
    this.adjList[node1].edges.push(node2);
    // this.adjList[node2.value].edges.push(node1.value);
  }

  removeNode(node) {
    delete this.adjList[node]; // delete the node
    const nodes = Object.keys(this.adjList); // get all the nodes

    nodes.forEach(curNode => {
      // iterate over all the nodes
      const edges = this.adjList[curNode].edges; // cur edges
      if (edges.indexOf(node) > -1) {
        // validate if Node is in currentEdge
        const index = edges.indexOf(node); // get the index of the node
        edges.splice(index, 1); // go to the index, and remove it
      }
    });
  }
  printGraph() {
    const nodes = Object.keys(this.adjList);
    nodes.forEach(curNode => {
      const edges = this.adjList[curNode].edges;
      console.log(curNode, "-->", edges);
    });
  }
}

const adjList = new Graph();
const node0 = 0;
const node1 = 1;
const node2 = 2;
const node3 = 3;
const node4 = 4;
// Add vertexs
adjList.addNode(node0);
adjList.addNode(node1);
adjList.addNode(node2);
adjList.addNode(node3);
adjList.addNode(node4);
// Add edges
adjList.addEdge(node0, node2);
adjList.addEdge(node0, node3);
adjList.addEdge(node0, node4);
adjList.addEdge(node1, node2);
adjList.addEdge(node2, node0);
adjList.addEdge(node3, node2);
adjList.addEdge(node4, node0);
adjList.addEdge(node4, node1);
adjList.addEdge(node4, node3);
adjList.printGraph();

class GraphClone {
  constructor(data) {
    this.data = data;
    this.edges = [];
  }
}

let clone = function(root) {
  let nodes_completed = {};
  return clone_rec(root, nodes_completed);
};

let clone_rec = function(root, nodes_completed) {
  if (!root) {
    return null;
  }

  let pNew = new GraphClone(root.data);

  nodes_completed[root.data] = pNew;

  for (let p in root.edges) {
    let x = nodes_completed[root.edges[p].data];
    
    if (!x) {
      pNew.edges.push(clone_rec(root.edges[p], nodes_completed));
    } else {
      pNew.edges.push(x);
    }
  }

  return pNew;
};

const root = adjList.adjList['0']
clone(root);
