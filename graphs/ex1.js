class Graph {
    constructor() {
        this.adjList = {}
    }

    addNode(node) {
        this.adjList[node.val]: {
            node: node,
            edges: []
        }
    }

    addEdge(node1, node2) {
        this.adjList[node1.val].edges.push(node2)
        this.adjList[node2.val].edges.push(node1)
    }

    removeNode(node) {
        delete this.adjList[node.val]
        const nodes = Object.keys(this.adjList)

        nodes.forEach((curNode) => {
            const edges = this.adjList[curNode].edges
            const index = edges.indexOf(node)
            if (edges.indexOf(node) > -1) {
                edges.splice(index, 1)
            }
        })
    }
}