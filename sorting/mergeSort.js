// Pseudocode: Merge
// mergeSort(list)
// initialize n to the length of the list
// base case is if n < 2, just return
// initialize mid to n/2
// left = left slice of array to mid - 1
// right = right slice of array mid to n - 1
// mergeSort(left)
// mergeSort(right)
// merge(left, right)

const mergeSort = arr => {
  if (arr.length === 1) {
    return arr;
  }

  const middle = Math.floor(arr.length / 2);

  const left = arr.slice(0, middle);
  const right = arr.slice(middle);
  const sortedLeft = mergeSort(left);
  const sortedRight = mergeSort(right);

  return mergeSort(sortedLeft, sortedRight);
};

// compare the arrays item by item and return teh concatenated result
const merge = (left, right) => {
  let result = [];
  let indexLeft = 0;
  let indexRight = 0;

  while (indexLeft < left.length && indexRight < right.length) {
    if (left[indexLeft] < right[indexRight]) {
      result.push(left[indexLeft]);
      indexLeft++;
    } else {
      result.push(right[indexRight]);
      indexRight++;
    }
  }

  return result.concat(left.slice(indexLeft)).concat(right.slice(indexRight));
};
