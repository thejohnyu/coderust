let get_bit = function(num, bit) {
  let temp = 1 << bit;
  console.log('temp ===>', temp, 'compare to num ===>', num)
  temp = temp & num;
  if (temp === 0) {
    // even
    return 0;
  }

  return 1; // odd
};

let get_all_subsets = function(v, sets) {
  let subsets_count = Math.pow(2, v.length);
  for (let i = 0; i < subsets_count; i++) {
    let st = new Set([]);
    for (let j = 0; j < v.length; j++) {
      // j = [0, 1, 2]
      if (get_bit(i, j) === 1) {
        // if the bit is odd
        st.add(v[j]);
      }
    }

    sets.push(st);
  }
};

console.log("");
console.log("");
console.log("+++++++++++++++++++++++++++++++++++++++");
console.log("Find All Subsets");
console.log("---------------------------------------");
let v = [2, 5, 7];
let subsets = [];
get_all_subsets(v, subsets);
console.log("****Total*****" + subsets.length);
