let find_missing = function(input) {
    //  calculate sum of all integers
    //  in input list

    let actual_sum = 0;
    for (let i in input) {
        actual_sum += input[i];
    }
    //  There is exactly 1 number missing
    let n = input.length + 1;
    // the sequence doesn't always have to begin with the number 1, below is an example of getting the 1st and last term of the array to calc the true constant
   // let expected_sum = n * (input[0] + input[input.length - 1] / 2)
    let sum_of_n = Math.floor((n * (n + 1)) / 2);
    return sum_of_n - actual_sum;
};

console.log("");
console.log("");
console.log("+++++++++++++++++++++++++++++++++++++++");
console.log("Find Missing Number");
console.log("---------------------------------------");

let random_array = [19, 14, 2, 17, 4, 12, 20, 7, 16, 9, 13, 8, 11, 18, 3, 6, 10, 1, 15];
let actual_missing = find_missing(random_array);
console.log("actual missing is " + actual_missing);