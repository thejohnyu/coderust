const haveSum = (arr, sum) => {
  let found = false;
  let visted = [];
  let counter = 0;

  while (counter < arr.length) {
    let diff = sum - arr[counter];

    if (visted.includes(diff)) {
      found = true;
      break;
    } else {
      visted.push(arr[counter]);
      counter++;
    }
  }

  return found;
};

const sum = 1300;
const arr = [1, 9, 3, 8, 2, 7, 4, 6, 5];

console.log(haveSum(arr, sum));
