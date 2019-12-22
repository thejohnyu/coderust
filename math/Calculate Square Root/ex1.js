const EPSILON = 0.00001;

let square_root_rec = function(num, low, high) {
    let mid = (low + high) / 2;
    let sqr = mid * mid;
    let diff = Math.abs(sqr - num);

    //  we can't do a === b for doubles because
    //  of rounding errors, so we use error threshold
    //  EPSILON. Two doubles a and b are equal if
    //   abs(a-b) <= EPSILON

    if (diff <= EPSILON) {
        return mid;
    }

    if (sqr < num) {
        return square_root_rec(num, mid, high);
    }

    return square_root_rec(num, low, mid);
};

let square_root_recursive = function(num) {
    return square_root_rec(num, 0, 1 + num / 2);
};

console.log("");
console.log("");
console.log("+++++++++++++++++++++++++++++++++++++++");
console.log("Find Square Root");
console.log("---------------------------------------");

let i = 0.01;
while (i <= 10) {
    let res = square_root_recursive(i);
    console.log("square_root("+i+") = "+res);
    i += 0.01;
}