let power_rec = function(x, n) {
    if (n === 0) {
        return 1;
    }
    if (n === 1) {
        return x;
    }

    let temp = power_rec(x, Math.floor(n / 2));
    if (n % 2 === 0) {
        return temp * temp;
    } else {
        return x * temp * temp;
    }
};

let power = function(x, n) {
    let is_negative = false;
    if (n < 0) {
        is_negative = true;
        n *= -1;
    }
    let result = power_rec(x, n);
    if (is_negative) {
        return 1 / result;
    }

    return result;
};

console.log("");
console.log("");
console.log("+++++++++++++++++++++++++++++++++++++++");
console.log("Find All Subsets");
console.log("---------------------------------------");

console.log("4^4 = " + power(4, 4));
console.log("2^-4 = " + power(2, -4));
console.log("2^10 = " + power(2, 10));
console.log("2^0 = " + power(2, 0));