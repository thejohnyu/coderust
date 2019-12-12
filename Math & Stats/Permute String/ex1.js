let result = [];

let replaceAt = function(string, index, character) {
    return string.substr(0, index) + character + string.substr(index + character.length);
}

let swap_char = function(input, i, j) {
    let temp = input[i];
    input = replaceAt(input, i, input[j]);
    input = replaceAt(input, j, temp);
    return input;
};

let permute_string_rec = function(input, current_index) {
    if (current_index === input.length - 1) {
        result.push(input.slice());
        return;
    }
    for (let i = current_index; i < input.length; i++) {
        let swapped_input = swap_char(input, current_index, i);
        permute_string_rec(swapped_input, current_index + 1);
    }
};

let permute_string = function(input) {
    permute_string_rec(input, 0);
};

let input = "abc";
permute_string(input);
console.log(result);