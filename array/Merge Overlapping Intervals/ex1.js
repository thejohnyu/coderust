let find_busy_intervals = function(v1) {
  if (!v1 || v1.length === 0) {
    return;
  }

  let v2 = [];
  v2.push({
    'first': v1[0].first,
    'second': v1[0].second
  });
  for (let i = 0; i < v1.length; i++) {
    let x1 = v1[i].first;
    let y1 = v1[i].second;
    let x2 = v2[v2.length - 1].first;
    let y2 = v2[v2.length - 1].second;

    if (y2 >= x1) {
      v2[v2.length - 1].second = Math.max(y1, y2);
    } else {
      v2.push({
        'first': x1,
        'second': y1
      });
    }

  }
  return v2;
};

let arr1 = [{
  'first': 4,
  'second': 12
}, {
  'first': 13,
  'second': 16
}, {
  'first': 19,
  'second': 20
}, {
  'first': 20,
  'second': 24
}];

let arr2 = [{
  'first': 2,
  'second': 10
}, {
  'first': 4,
  'second': 12
}];

console.log("");
console.log("");
console.log("+++++++++++++++++++++++++++++++++++++++");
console.log("Find Bust Intervals");
console.log("---------------------------------------");
console.log(find_busy_intervals(arr1));
console.log(find_busy_intervals(arr2));

const test = arr => {
  let currentMinMax = [{first: 0, second: 0}]

  for (let i = 0; i < arr.length; i++) {
    const { first, second } = arr[i]

    if(first > )
  }


}