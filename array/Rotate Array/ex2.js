let rotate_array = function(arr, n) {
  let len = arr.length;

  // Let's normalize rotations
  // if n > array size or n is negative.
  n = n % len;
  if (n < 0) {
    // calculate the positive rotations needed.
    n = n + len;
  }

  let temp = [];
  for (let i = 0; i < n; i++) {
    temp.push(0);
  }

  // copy last N elements of array into temp
  for (let i = 0; i < n; i++) {
    temp[i] = arr[len - n + i];
  }

  // shift original array
  for (let i = len - 1; i >= n; i--) {
    arr[i] = arr[i - n];
  }

  // copy temp into original array
  for (let i = 0; i < n; i++) {
    arr[i] = temp[i];
  }

};


console.log("");
console.log("");
console.log("+++++++++++++++++++++++++++++++++++++++");
console.log("Rotate Arrays");
console.log("---------------------------------------");

let array_rotate_1 = [1, 2, 3, 4, 5];
let array_rotate_result = [4, 5, 1, 2, 3];
console.log("Before Rotate (Solution 2)", array_rotate_1);
rotate_array(array_rotate_1, 2);
console.log("After Rotate (Solution 2)", array_rotate_1);