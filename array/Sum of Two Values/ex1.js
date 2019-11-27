// find_sum_of_two function return true if
// there are two values in array who
// sum to value and returns false otherwise
let find_sum_of_two = function(A, val) {
  let found_values = new Set();
  for (let a in A) {
    const diff = val - A[a];
    if (found_values.has(diff)) {
      return true;
    }

    found_values.add(A[a]);
  }

  return false;
};

console.log("");
console.log("");
console.log("+++++++++++++++++++++++++++++++++++++++");
console.log("Sum Two Values Solution 1");
console.log("---------------------------------------");

let test_sol_1 = function(v, val, expected) {
  let output = find_sum_of_two(v, val);
  console.log(
    "sum of two numbers in array [" + v + "] = " + val + "  = " + output
  );
};

let array_for_sum_two_values = [2, 1, 8, 4, 7, 3];
console.log("Array: ", array_for_sum_two_values);
test_sol_1(array_for_sum_two_values, 3, true);
test_sol_1(array_for_sum_two_values, 20, false);
test_sol_1(array_for_sum_two_values, 1, false);
test_sol_1(array_for_sum_two_values, 2, false);
test_sol_1(array_for_sum_two_values, 7, true);

const sumOfTwoValues = (arr, sum) => {
  let visted = [];
  let counter = 0;
  let result = "";
  while (counter < arr.length) {
    const diff = sum - arr[counter];
    if (visted.includes(diff)) {
      result = arr[counter];
      break;
    } else {
      visted.push(arr[counter]);
      counter++;
    }
  }

  return result;
};
