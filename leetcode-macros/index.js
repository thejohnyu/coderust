function generateSubsets(arr) {
    let res = [[]]

    for (let i = 0; i < arr.length; i++) {
        let subset = []
        res.forEach((cur) => {
            const value = [...cur, arr[i]]
            subset.push(value)
        })

        res.push(subset)
    }

    return res
}

function dfs(matrix) {
    // DFS is a traversal techinque and it implies it doesn't know where to go
    if (matrix) return
    // 1. Check necessary conditions
    // 2. Process Cell
    // 3. Call DFS as needed
}

function isOutSideGrid(matrix, row, col) {
    const left = row < 0
    const right = row > matrix.length - 1
    const top = col < 0
    const bottom = col > matrix.length - 1
    return  row < 0 || col < 0 || row > matrix.length - 1 || col > matrix[0].length - 1
}

function dfsGrid(matrix, row, col) {
    // check neccessary conditions
    if (row < 0 || col < 0 || row > matrix.length - 1 || col > matrix[0].length - 1) {
        return
    } else if (isValid) {
        return
    } else if (isValidSomethingElse) {
        return
    }

    // Process Cell
    matrix[row][col] = 1

    // Call DFS as needed

    // left and Right
    dfsGrid(matrix, row + 1, col)
    dfsGrid(matrix, row - 1, col) 

    // Top and Bottom
    dfsGrid(matrix, row, col + 1)
    dfsGrid(matrix, row, col - 1)
}

function levelOrder(root) {
    let queue = []
    let res = []

    queue.push(root) 
    while(queue.length) {
        let level = []
        for (let i = 0; i < queue.length; i++) {
            const node = queue.shift()
            level.push(node)

            if (node.left) {
                queue.push(node.left)
            }

            if (node.right) {
                queue.push(node.right)
            }
        }

        res.push(level)
    }

    return res
}

function isPalindrome(s) {
    for (let i = 0; i < s.length; i++) {
        for (let j = i + 1; j < (s.length - 1); j++) {
            if (!isValid(s, i, j)) {
                return false
            }
        }
    }

    function isValid(input, i, j) {
        let start = 0
        let end = input.length - 1

        while (start < end) {
            if (input[start++] && input[end--]) {
                return false
            }
        }

        return true
    }

    return true
}

function getMiddleLinkedList(head) {
    let slow = head
    let fast = head

    while (fast.next && fast.next.next) {
        fast =  fast.next.next
        slow = slow.next
    }

    return slow
}

function binaryTreeRecursive(node) {
    if (node === null) return

    // process node

    return binaryTreeRecursive(leftSide) && binaryTreeRecursive (rightSide)
}


function binarySearchForMinimum(input) {
    let lo = 0
    let high = input.length - 1

    while (lo < high) {
        let mid = Math.floor((lo + high) / 2)

        if (input[mid] > input[end]) {
            lo = mid + 1
        } else {
            high = mid
        }
    }

    return lo
}

function maximumAverageSubtree(root) {
    if (!root) return 0;
  
    function postOrder(node) { //---> post order === Left then Right then Node (explore all of the children leafs before checking the subRoot2) AKA DFS
      if (!node) return [0, 0, 0]; // another guard to ensure the node exisit
  
      const [leftAverage, leftSum, leftCount] = postOrder(node.left);
      const [rightAverage, rightSum, rightCount] = postOrder(node.right);
      
      const currSum = leftSum + rightSum + node.val; // subRoot = node.val + left Leaf + Right Leaf
      const currTotalCount = leftCount + rightCount + 1; // denominator to get the average later
      const currAverage = currSum / currTotalCount; 
  
      let accumulator = Math.max(currAverage, leftAverage, rightAverage); 
      return [accumulator, currSum, currTotalCount]; // Global Max, all subTree sums, all nodes count
    }
  
    let [globalMax, treeSum, treeCount] = postOrder(root);
    return globalMax;
  }

  class WordSearch {
    constructor(grid, dictionary) {
      this.grid = grid;
      this.dictionary = dictionary;
      this.state = this.createMatrix(grid.length);
    }

    createMatrix(length) {
        let result = []
        for (let i = 0; i < length; i++) {
            let temp = [];
            for (let j = 0; j < length; j++) {
              temp.push(false);
            }
            result.push(temp);
          }
          return result
    }
  
    findAllNeighbors(row, col) {
        /**
         * function isOutSideGrid(matrix, row, col) {
            const left = row < 0
            const right = row > matrix.length - 1
            const top = col < 0
            const bottom = col > matrix.length - 1
            return  row < 0 || col < 0 || row > matrix.length - 1 || col > matrix[0].length - 1
        }
         */
      let nbrs = [];
      // outter bounds, upper left corner, bottom right corner
      let startX = Math.max(0, row - 1);
      let startY = Math.max(0, col - 1);
      let endX = Math.min(this.grid.length - 1, row + 1);
      let endY = Math.min(this.grid.length - 1, col + 1);
  
      for (let i = startX; i <= endX; i++) {
        for (let j = startY; j <= endY; j++) {
          if (i === row && j === col) { // ignore parent node, this ensures that the current node is not already processed or being processed.
            continue;
          }
          if (this.state[i][j] === false) { // if the state tree is false for the grid key
            // then that means it has not been explored
            nbrs.push([i, j]);
          }
        }
      }
      return nbrs;
    }
  
    findWordsRec(i, j, current, acc) {
      if (current.length > 0 && this.dictionary.has(current)) {
        words.add(current);
      }
  
      //  we can really speed up our algorithm if we have prefix method available
      //  for our dictionary by using code like below
  
      //   if not dictionary.is_prefix(current):
      //   // if current word is not prefix of any word in dictionary
      //   // we don't need to continue with search
      //   return
  
      let neighbors = this.findAllNeighbors(i, j);

      // only process if neighbors has children.
      for (let k = 0; k < neighbors.length; k++) {
        // get postions of each neighbor
        let row = neighbors[k][0];
        let col = neighbors[k][1];

        // add letter to the running count
        let curLetter = this.grid[row][col];
        current += curLetter

        // mark as visted
        this.state[row][col] = true;
        
        // call DFS as needed and in this case we need to call DFS on the neighbors --> neighbors
        this.findWordsRec(row, col, current, acc);
        // when it reaches all the cells then we can starrt backtracking
        // here we pop() the last char and check the implicit JavaScript Stack to pop() each stack along with its char and check in the dictionary for this specific word
        current = current.substr(0, current.length - 1);
        this.state[row][col] = false;
      }
    }
  
    findAllWords() {
      let acc = new Set([]);
      for (let i = 0; i < this.grid.length; i++) {
        for (let j = 0; j < this.grid.length; j++) {
          let currentWord = "";
          this.findWordsRec(i, j, currentWord, acc);
        }
      }
      return acc;
    }
  }

  function binarySearch(arr, target) { 
    let lo = 0
    let high = arr.length - 1

    while (lo < high) {
      let mid = Math.floor(( lo + high ) / 2)

      if (arr[mid] === target) {
        return arr[mid]
      }

      if (arr[mid] > target) {
        lo = mid + 1
      } else {
        high = mid - 1
      }
    }

    let notFound = -1

    return notFound
  }