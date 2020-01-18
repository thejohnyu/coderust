let reverseList = head => {
    let prevNode = null
    
    while( head !== null ) {
        let nextNode = head.nextNode // save the next node
        head.next = prevNode // head[].next --> null
        prevNode = head // prevNode = head[]
        // iterate to the next element
        head = nextNode
    }
}