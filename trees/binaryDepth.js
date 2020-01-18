const maxDepth = root => {
    let maxNodes = (node, sum) => {
        if (node === null) return sum

        return Math.max(maxNodes(node.left, sum + 1), maxNodes(node.right, sum + 1))
    }

    return maxNodes(root, 0)
}