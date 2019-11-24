function ArrayAddition(arr) {
  var map = { // Are we using this as a visted / seen data structure????
    0: 1
  };

  arr = arr.sort(function(a, b) {
    return a - b;
  });
  var max = arr[arr.length - 1];

  for (var i = 0; i < arr.length - 1; i++) {
    var keys = Object.keys(map);
    console.log(keys, arr[i]);
    for (var j = 0; j < keys.length; j++) {
      var next = parseInt(keys[j]) + arr[i];
      if (next == max) {
        console.log("map hacks ===>", map);
        return true;
      } else if (next < max && next > 0 - (arr.length - i - 1) * max) {
        map[next] = 1;
      }
    }
  }

  return false;
}

const result = ArrayAddition([1, 2, 3, 4, 5, 6]);
console.log("result ===>", result);
