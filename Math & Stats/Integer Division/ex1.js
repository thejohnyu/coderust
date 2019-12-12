let integer_divide = function(x, y) {

    // We will return -1 if the
    // divisor is '0'.
    if (y === 0) {
        return -1;
    }

    if (x < y) {
        return 0;
    } else if (x === y) {
        return 1;
    } else if (y === 1) {
        return x;
    }

    let q = 1;
    let val = y;

    while (val < x) {
        val <<= 1;
        // we can also use 'val = val + val;'
        q <<= 1;
        // we can also use 'q = q + q;'
    }
    if (val > x) {
        val >>= 1;
        q >>= 1;
        return q + integer_divide(x - val, y);
    }
    return q;
};

console.log("");
console.log("");
console.log("+++++++++++++++++++++++++++++++++++++++");
console.log("Divide Integer");
console.log("---------------------------------------");


console.log("Divide (55, 11) = " + integer_divide(55, 11));
console.log("Divide (54, 2) = " + integer_divide(54, 2));
console.log("Divide (51, 13) = " + integer_divide(51, 13));
console.log("Divide (51, 0) = " + integer_divide(51, 0));