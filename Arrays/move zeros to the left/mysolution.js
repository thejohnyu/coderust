let move_zeros_to_left = function(arr) {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === 0) {
      const removed = arr.splice(i, 1);
      const insert = arr.splice(0, 0, 0);
    }
  }
  return arr;
};

let v = [1, 10, -1, 11, 5, 0, -7, 0, 25, -35];
console.log("Original Array: ["+v+"]");
move_zeros_to_left(v);
console.log("After Moving Zeros: ["+v+"]");