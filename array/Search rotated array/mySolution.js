let binary_search_rotated = function(
  arr,
  start = 0,
  end = arr.length - 1,
  key
) {
  //TODO: Write - Your - Code
  // binary search invovles finding the mid, and apply divide && conquer to the solution to get O(nlogn)
  let mid = start + Math.floor((end - start) / 2);

  if (start > end) {
    return -1;
  }

  if (arr[mid] == key) {
    return mid;
  }
  const currentNumber = arr[mid];
  const currentStart = arr[start];
  const currentEnd = arr[end];

  const validationModel = {
    isLeft: [currentStart <= currentNumber].every(x => x === true),
    isRight: [currentEnd => currentNumber].every(x => x === true),
    isLeftRotated: [currentStart <= currentNumber, key <= currentNumber].every(x => x === true),
    isRightRotated: [
      currentEnd => currentNumber,
      key >= currentNumber,
      key <= currentEnd
    ].every(x => x === true)
  };
  if (validationModel.isLeftRotated)
    return binary_search_rotated(arr, start, mid - 1, key);
  if (validationModel.isRightRotated)
    return binary_search_rotated(arr, mid + 1, end, key);
  if (validationModel.isLeft)
    return binary_search_rotated(arr, mid + 1, end, key);
  if (validationModel.isRight)
    return binary_search_rotated(arr, start, mid - 1, key);
  return -1;
};


let binary_search_rotated = function(arr, key) {
    return binary_search_recs(arr, 0, arr.length - 1, key);
};

let v1 = [6, 7, 1, 2, 3, 4, 5];
  
console.log("Key(3) found at: " + binary_search_rotated(v1, 3));
console.log("Key(6) found at: " + binary_search_rotated(v1, 6));
    
let v2 = [4, 5, 6, 1, 2, 3];
  
console.log("Key(3) found at: " + binary_search_rotated(v2, 3));
console.log("Key(6) found at: " + binary_search_rotated(v2, 6));  