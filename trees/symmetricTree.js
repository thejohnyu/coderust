const isSymetric = root => {
    if (root === null) return true

    return isMirror(root.left, root.right)
}

const isMirror = (node1, node2) => {
    if (![node1, node2].includes(null)) {
        return node1 === node2 && node1.val === node2.val
    }

    return isMirror(node.left, node.right) && isMirror(node.right, node.left)
}