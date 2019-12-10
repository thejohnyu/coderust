let factorial = function(n) {
    if (n === 0 || n === 1) {
        return 1;
    }
    return n * factorial(n - 1);
};

let find_kth_permutation = function(v, k, result) {
    if (!v || v.length === 0) {
        return;
    }

    let n = v.length;
    // count is number of permutations starting with first digit
    let count = factorial(n - 1);
    let selected = Math.floor((k - 1) / count);
    result[0] += '' + v[selected];
    v.splice(selected, 1);
    k = k - (count * selected);

    find_kth_permutation(v, k, result);
};

let get_permutation = function(n, k) {
    let v = [];
    for (let i = 0; i < n; i++) {
        v.push(i + 1);
    }
    console.log(v);
    let result = [''];
    find_kth_permutation(v, k, result);
    return result[0];
};

console.log("");
console.log("");
console.log("+++++++++++++++++++++++++++++++++++++++");
console.log("Find Kth Permutation");
console.log("---------------------------------------");
let x = 3;
let n = factorial(x);
for (let i = 1; i <= n; i++) {
    let temp = get_permutation(x, i);
    console.log(i + "th permutation = ", temp);
}