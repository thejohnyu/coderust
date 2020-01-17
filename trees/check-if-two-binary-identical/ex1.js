const isTreeIdentical = (root1, root2) {
    if (!root1 && !root2) {
        return true
    }

    if (root1 && root2) {
        return (root1.data && root2. data && isTreeIdentical(root1.left, root2.eft)  && isTreeIdentical(root1.right, root2.right)) 
    }


    return false
}

const inOrderTraversal = node => {
    if (!node) return

    let queue = []
    queue.push(node)

    while (!queue.isEmpty()) {
        let temp = queue.shift()
        if (temp.left) {
            queue.push(temp.left)
        }

        if (temp.right) {
            queue.push(temp.right)
        }


    }
}

