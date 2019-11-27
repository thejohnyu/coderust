let move_zeros_to_left = function(A) {
  if (A.length < 1) {
    return;
  }

  let lengthA = A.length;
  let write_index = lengthA - 1;
  let read_index = lengthA - 1;

  while (read_index >= 0) {
    if (A[read_index] != 0) {
      A[write_index] = A[read_index];
      write_index--;
    }

    read_index--;
  }
  console.log("before while loop Arr ==>", A);
  while (write_index >= 0) {
    console.log("Starting..arr ==>", A);
    A[write_index] = 0;
    console.log("writeIndex ===>", write_index);
    write_index--;
    console.log('A ====>', A);
    
  }
};

let v = [1, 10, -1, 11, 5, 0, -7, 0, 25, 0, -35];
console.log("Original Array: [" + v + "]");
move_zeros_to_left(v);
console.log("After Moving Zeros: [" + v + "]");
let newV = [1, 10, -1, 11, 5, 0, -7, 0, 25, -35];
let move_zeros_to_left1 = function(arr) {
  if (arr.length < 1) {
    return;
  }

  let len = arr.length - 1;
  let writeCounter = len;
  let readCounter = len;

  const isNotZero = arr[readCounter] != 0;
  const isZero = arr[readCounter] === 0;
  const decrement = key => key--;
  while (readCounter >= 0) {
    if (isZero) decrement("readCounter");
    if (isNotZero) {
      arr[writeCounter] = arr[readCounter];
      decrement("writeCounter");
    }
  }

  // while (writeCounter >= 0) {
  //   arr[writeCounter] = 0;
  //   decrement("writeCounter");
  // }
};
// move_zeros_to_left1(newV);
// console.log("move_zeros_to_left1(v); ====>", newV);
