const inorder = root => {
    if (!root) return

    let stack = []
    stack.push(root)

    while(stack.length > 0) {
        if (root) {
            stack.push(root)
            root = root.left
            continue
        } else {
            console.log(stack[stack.length - 1].val)
            root = stack[stack.length - 1].right // get the top of the stack (end of the array)
            stack.pop()
        }
    }
}