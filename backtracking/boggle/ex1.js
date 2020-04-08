class Boggle {
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
  
    findAllNeighbors(x, y) {
      let nbrs = [];
      // outter bounds, upper left corner, bottom right corner
      let startX = Math.max(0, x - 1);
      let startY = Math.max(0, y - 1);
      let endX = Math.min(this.grid.length - 1, x + 1);
      let endY = Math.min(this.grid.length - 1, y + 1);
  
      for (let i = startX; i <= endX; i++) {
        for (let j = startY; j <= endY; j++) {
          if (i === x && j === y) { // ignore parent node, this ensures that the current node is not already processed or being processed.
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
  
    findWordsRec(i, j, current, words) {
      if (current.length > 0 && this.dictionary.has(current)) {
        words.add(current);
      }
  
      //  we can really speed up our algorithm if we have prefix method available
      //  for our dictionary by using code like below
  
      // if not dictionary.is_prefix(current):
      //   // if current word is not prefix of any word in dictionary
      //   // we don't need to continue with search
      //   return
  
      let neighbors = this.findAllNeighbors(i, j);

      // only process if neighbors has children.
      for (let k = 0; k < neighbors.length; k++) {
        let first = neighbors[k][0];
        let second = neighbors[k][1];
        let curLetter = this.grid[first][second];
        current += curLetter
        this.state[first][second] = true;
        this.findWordsRec(first, second, current, words);
        // when it reaches all the cells then we can starrt backtracking
        current = current.substr(0, current.length - 1);
        this.state[first][second] = false;
      }
    }
  
    findAllWords() {
      let words = new Set([]);
      for (let i = 0; i < this.grid.length; i++) {
        for (let j = 0; j < this.grid.length; j++) {
          let currentWord = "";
          this.findWordsRec(i, j, currentWord, words);
        }
      }
      return words;
    }
  }
  
//   let grid = [['c', 'a', 't'],
//               ['r', 'r', 'e'],
//               ['t', 'o', 'n']];
  
//   let dictionary = new Set(["cat", "cater", "cartoon", "art", "toon", "moon", "eat", "ton"]);
//   let b = new Boggle(grid, dictionary);
//   let words = b.findAllWords();
//   words.forEach(function(value1) {
//     console.log(value1);
//   });

//   let newGrid = [
//     ['o','a','a','n'],
//     ['e','t','a','e'],
//     ['i','h','k','r'],
//     ['i','f','l','v']
//   ]

//   let newDictionary = new Set(["oath","pea","eat","rain"])
//   let newB = new Boggle(newGrid, newDictionary)
//   let newWords = newB.findAllWords()
//   newWords.forEach((cur) => {
//       console.log(cur)
//   })

let grid = [["A","B","C","E"],["S","F","C","S"],["A","D","E","E"]]

let dictionary = new Set(["see"]);
let b = new Boggle(grid, dictionary);
console.log('b', b)
let words = b.findAllWords();
console.log('words ==>', words)
words.forEach(function(value1) {
console.log('value1', value1);
});