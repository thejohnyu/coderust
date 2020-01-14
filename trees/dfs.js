class Tree {
    constructor() {
        this.root = null
        this.adjList = {
            1: [2, 5],
            2: [1, 5, 3, 4],
            3: [2, 4],
            4: [2, 5, 3],
            5: [4, 1, 2]
        }
    }

    depthFirstTraversal( startingNode, func = console.log) {
        const nodeStack = []
        const visted = {}

        nodeStack.push(startingNode)
        visted[startingNode] = true

        while (nodeStack.length) {
            const current = nodeStack.pop()

            const neighbors = this.adjList[current]

            func(current)

            neighbors.forEach(neighbor => {
                if (!visted[neighbor]) {
                    nodeStack.push(neighbor)
                    visted[neighbor] = true
                }
            })
        }
    }

    breadthFirstTraversal( startingNode, func = console.log) {
        const queue = []
        const visted = {}

        queue.push(startingNode)
        visted[startingNode] = true

        while (queue.length) {
            const current = nodeStack.shift()
            const neighbors = this.adjList[current]
            func(current) 
            neighbors.forEach(neighbor => {
                if (!visted[neighbor]) {
                    queue.push(neighbor)
                    visted[neighbor] = true
                }
            })
        }
    }
}

function dfs(node) {
    let nodeStack = []
    let explored = new Set()


    nodeStack.push(node)
    explored.add(node)

    while(!nodeStack.isEmpty()) {
        let node = nodeStack.pop() // shift for queue

        node.children.forEach((child) => {
            if(!explored.has(child)) {
                explored.add(child)
                nodeStack.push(child)
            }
        })
    }
}