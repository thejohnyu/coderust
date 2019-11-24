function ArrayAdditionI(arr) {
  // get largest number and remove it from array
  var sum = Math.max.apply(null, arr);
  arr.splice(arr.indexOf(sum), 1);

  // power set
  var sets = [[]];
  let totalParent = 0;
  let totalChild = 0;
  // generate the power set and for each new set
  // check if the temporary sum equals our sum above
  for (var i = 0; i < arr.length; i++) {
    for (var j = 0, len = sets.length; j < len; j++) {
      var temp = sets[j].concat(arr[i]);
      sets.push(temp);
      console.log('temp', temp)
      var s = temp.reduce(function(acc, cur, index, array) {
        console.log('acc + cur ==>', acc, '+', cur, index, array)
        return acc + cur;
      });
      if (s === sum) {
return true      }
    }

    return "false";
  }
}
const result = ArrayAdditionI([1, 2, 3]);
console.log("result ===>", result);
