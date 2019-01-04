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
  
  while (write_index >= 0) {
    A[write_index] = 0;
    write_index--;
  }
};

let v = [1, 10, -1, 11, 5, 0, -7, 0, 25, -35];
console.log("Original Array: ["+v+"]");
move_zeros_to_left(v);
console.log("After Moving Zeros: ["+v+"]");