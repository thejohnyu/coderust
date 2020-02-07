class Graph {
  constructor() {
    this.adjList = {};
  }

  addNode(node) {
    this.adjList[node.value] = {
      node: node,
      edges: []
    };
  }

  addEdge(node1, node2) {
    this.adjList[node1.value].edges.push(node2.value);
    // this.adjList[node2.value].edges.push(node1.value);
  }

  removeNode(node) {
    delete this.adjList[node.value]; // delete the node
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
const node0 = { value: 0 };
const node1 = { value: 1 };
const node2 = { value: 2 };
const node3 = { value: 3 };
const node4 = { value: 4 };
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
