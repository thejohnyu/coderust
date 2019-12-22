let get_bit = function(num, bit) {
  const test = 1 << 0
  const test1 = 1 << 1
  const test2 = 1 << 2
  const test3 = 1 << 3
  console.log('test : ', test, 'test1 : ', test1, 'test2 :', test2, 'test3 :', test3)
  let temp = 1 << bit;
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
    // i = [0]
    let st = new Set([]);
    for (let j = 0; j < v.length; j++) {
      // j = [0, 1, 2]
      if (get_bit(i, j) === 1) {
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
