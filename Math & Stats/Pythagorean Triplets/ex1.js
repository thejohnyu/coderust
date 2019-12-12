let is_pythagorean_triplet = function(a, b, c) {
    // get the square
    let sqra = a * a;
    let sqrb = b * b;
    let sqrc = c * c;

    // basically checking if 
    // A + B === C
    // A + C === B
    // B + C === A
    if (sqra + sqrb === sqrc) {
        return true;
    } else if (sqra + sqrc === sqrb) {
        return true;
    } else if (sqrb + sqrc === sqra) {
        return true;
    } else {
        return false;
    }
};

let find_pythagorean_triplets_1 = function(arr) {
    let n = arr.length;
    let triplets = [];
    for (let i = 0; i < n - 2; i++) {
        if (arr[i] === 0) {
            continue;
        }

        for (let j = i + 1; j < n - 1; j++) {
            if (arr[j] === 0) {
                continue;
            }
            for (let k = j + 1; k < n; k++) {
                if (is_pythagorean_triplet(arr[i], arr[j], arr[k])) {
                    triplets.push([arr[i], arr[j], arr[k]]);
                }
            }
        }
    }
    return triplets;
};

console.log("");
console.log("");
console.log("+++++++++++++++++++++++++++++++++++++++");
console.log("Find Pythagorean Triplet Solution 1");
console.log("---------------------------------------");
let pythagorean_1 = [4, 6, 10, 5, 8, 25];
let pythagorean_result_1 = find_pythagorean_triplets_1(pythagorean_1);
console.log(pythagorean_1);
console.log(pythagorean_result_1);