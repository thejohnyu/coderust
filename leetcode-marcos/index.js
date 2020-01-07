// createHashTable
const createHashTable = arr => {
    return arr.reduce((acc, cur) => {
        acc.byIds[cur.id] =  cur;
        acc.allIds = acc.allIds.concat(cur.id)
        return acc;
    }, {
        byIds: {},
        allIds: []
    })
}

// createSlidingWindow
const createSlidingWindow = (arr, window_size) => {
    return arr.reduce((acc, cur) => {
        return acc
    })
}
// createHeap

// createLRUCache

// createBinarySearch

// createMergeSort

// createAverages

