let find_pythagorean_triplets_2 = function(arr) {
    let n = arr.length;
    let triplets = [];
    arr.sort(function(a, b) {
        return a - b;
    });

    for (let i = 0; i < n; i++) {
        if (arr[i] === 0) {
            continue;
        }

        let c2 = arr[i] * arr[i];

        let j = 0;
        let k = n - 1;

        while (j < k) { // everytime  K and J meet we will break out of the loop
            if (j === i || arr[j] === 0) { // J begins the first index
                j++;
                continue;
            }

            if (k === i || arr[k] === 0) { // K begins the end index
                k--;
                continue;
            }

            let a2 = arr[j] * arr[j];
            let b2 = arr[k] * arr[k];

            if (a2 + b2 === c2) {
                triplets.push([arr[i], arr[j], arr[k]]);
                break;
            } else if (a2 + b2 + (-c2) > 0) {
                k--;
            } else {
                j++;
            }
        }
    }
    return triplets;
};

console.log("");
console.log("");
console.log("+++++++++++++++++++++++++++++++++++++++");
console.log("Find Pythagorean Triplet Solution 2");
console.log("---------------------------------------");

let pythagorean_2 = [4, 6, 10, 5, 8, 25];
let pythagorean_result_2 = find_pythagorean_triplets_2(pythagorean_2);
console.log(pythagorean_2);
console.log(pythagorean_result_2);