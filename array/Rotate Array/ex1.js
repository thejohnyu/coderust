let reverse_array = function(arr, start, end) {
  while (start < end) {
    let temp = arr[start];
    arr[start] = arr[end];
    arr[end] = temp;
    start++;
    end--;
  }
};

let rotate_array_in_place = function(arr, n) {
  let len = arr.length;

  // Let's normalize rotations
  // if n > array size or n is negative.
  n = n % len;
  if (n < 0) {
    console.log(n + len)
    // calculate the positive rotations needed.
    n = n + len;
  }
  // Let's partition the array based on rotations 'n'.
  // For example: 1, 2, 3, 4, 5 where n = 2.
  // -> 5, 4, 3, 2, 1
  // -> 4, 5, 3, 2, 1
  // -> 4, 5, 1, 2, 3

  reverse_array(arr, 0, len - 1);
  reverse_array(arr, 0, n - 1);
  reverse_array(arr, n, len - 1);
};

console.log("");
console.log("");
console.log("+++++++++++++++++++++++++++++++++++++++");
console.log("Rotate Arrays");
console.log("---------------------------------------");

let array_rotate_1 = [1, 2, 3, 4, 5];
let array_rotate_2 = [1, 2, 3, 4, 5];
let array_rotate_result = [4, 5, 1, 2, 3];
console.log("Before Rotate (Solution 1)", array_rotate_1);
rotate_array_in_place(array_rotate_1, 2);
console.log("After Rotate (Solution 1)", array_rotate_1);