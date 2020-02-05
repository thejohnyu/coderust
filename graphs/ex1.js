class Graph {
    constructor() {
        this.adjList = {}
    }

    addNode(node) {
        this.adjList[node.value] = {
            node: node,
            edges: []
        }
    }

    addEdge(node1, node2) {
        this.adjList[node1.value].edges.push(node2.value)
        this.adjList[node2.value].edges.push(node1.value)
    }

    removeNode(node) {
        delete this.adjList[node.value] // delete the node
        const nodes = Object.keys(this.adjList) // get all the nodes

        nodes.forEach((curNode) => { // iterate over all the nodes
            const edges = this.adjList[curNode].edges // cur edges
            if (edges.indexOf(node) > -1) { // validate if Node is in currentEdge
                const index = edges.indexOf(node) // get the index of the node 
                edges.splice(index, 1) // go to the index, and remove it
            }
        })
    }
}

// const adjList = {
//     1: [2, 5],
//     2: [1,5,3,4],
//     3: [2,4],
//     4: [2,5,3],
//     5: [4,1,2]
// }

const adjList = new Graph()
const node1 = { value: 1 }
const node2 = { value: 2 }
adjList.addNode(node1)
adjList.addNode(node2)
adjList.addEdge(node1, node2)
console.log('adjList ===> before ===>', adjList.adjList['1']);
//adjList.removeNode(node1)
console.log('adjList ===> after ===>', adjList.adjList);
