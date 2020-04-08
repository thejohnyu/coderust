// this method determines if a queen can
// be placed at proposedRow, proposedCol
// with current solution i.e. this move
// is valid only if no queen in current
// solution should attacked square at
// proposedRow and proposedCol
let isValidMove = function(proposedRow, proposedCol, solution) {
    // we need to check with all queens
    // in current solution
    for (let i = 0; i < proposedRow; i++) {
      let oldRow = i;
      let oldCol = solution[i];
  
      let diagonalOffset = proposedRow - oldRow;
      if (oldCol === proposedCol ||
          oldCol === proposedCol - diagonalOffset ||
          oldCol === proposedCol + diagonalOffset) {
        return false;
      }
    }
    return true;
  };
  
  let solveNQueensRec = function(n, solution, row, results) {
    if (row === n) {
      results.push(solution.slice());
      return;
    }
  
    for (let i = 0; i < n; i++) {
      if (isValidMove(row, i, solution)) {
        solution[row] = i;
        solveNQueensRec(n, solution, row + 1, results);
      }
    }
  };
  
  let solveNQueens = function(n, results) {
    let solution = new Array(n);
    solveNQueensRec(n, solution, 0, results);
    return results.length
  };
  
  let results = []  
  let n = 4
  let res = solveNQueens(n, results)
  console.log("Total solutions count for " + n + " queens: " + res);