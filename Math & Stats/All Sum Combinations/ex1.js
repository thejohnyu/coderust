let print_all_sum_rec = function(target, current_sum, start, result, output) {
    if (current_sum === target) {
        output.push(result.slice());
    }

    for (let i = start; i < target; i++) {
        let temp_sum = current_sum + i;
        if (temp_sum <= target) {
            result.push(i);
            print_all_sum_rec(target, temp_sum, i, result, output);
            result.pop();
        } else {
            return;
        }
    }
};

let print_all_sum = function(target) {
    let output = [];
    let result = [];
    print_all_sum_rec(target, 0, 1, result, output);
    return output;
};

let n = 4;
let result = print_all_sum(n);
console.log(result);