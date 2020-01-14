// write a function that returns all possible combinations of elements within
// a given array that add up to given n.

// time complexity is o(n) because we will iterate over the elements once
// space complexity is o(n) because we will be using a hash map to keep each element

// future optimalizations can include we naming variables, memoization _.memoize(value, func)

// For example, sub array [[ 1, 2] [-4, 7]], each sub-array is a pair that sums up to the ${n}

function allPossibleCombos(arr, target) {
  let pairs = [];
  let numList = [];

  const newSortedArray = arr.sort((a, b) => a - b);

  for (let i = 0; i < newSortedArray.length; i++) {
    const curr = newSortedArray[i];
    const diff = target - curr;

    if (numList.includes(diff)) {
      // This is a really neat trick, basically the idea here is to use the numList
      pairs.push([curr, diff]); // as a list to store the values, as we continue iterating we make a validation on each elment.
      //The validation is simple, we calculate if the target (sum - cur) === diff
    } else {
      numList.push(curr);
    }
  }

  return pairs;
}

let num = 10;
let arr = [-11, -10, -9, -8, -7, 1, 2, 3, 4, 5, 6, 7, 8, 9];

const result = allPossibleCombos(arr, num);
const result2 = genericPossibleCombos(arr, num);
console.log("result ===>", result);
console.log("result2 ==>", result2);

let cache = {};

function genericAllPossibleCombos(arr, target) {
  let result = [];
  let visted = [];
  arr = arr.sort((a, b) => a - b);
  arr.forEach(cur => {
    const diff = target - cur;
    if (visted.includes(diff)) {
      result.push([cur, diff]);
    } else {
      visted.push(cur);
    }
  });

  return result
}
