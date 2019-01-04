let partition = function(arr, low, high) {
  let pivot_value = arr[low];
  let i = low;
  let j = high;

  while (i < j) {
    while (i <= high && arr[i] <= pivot_value) {
      i++;
    }

    while (arr[j] > pivot_value) {
      j--;
    }

    if (i < j) {
      // swap arr[i], arr[j]
      let temp = arr[i];
      arr[i] = arr[j];
      arr[j] = temp;
    } 
  }

  arr[low] = arr[j];
  arr[j] = pivot_value;

  // return the pivot index
  return j;
};

let quick_sort_rec = function(a, l, h) {
  if (h > l) {
    let pivot_index = partition(a, l, h);
    quick_sort_rec(a, l, pivot_index - 1);
    quick_sort_rec(a, pivot_index + 1, h);
  }
};

let quick_sort = function(a) {
  quick_sort_rec(a, 0, a.length - 1);
};

let array_for_quick_sort = [33, 6, 21, 12, 19, 29, 38, 22, 14, 40]

console.log("");
console.log("");
console.log("+++++++++++++++++++++++++++++++++++++++");
console.log("Quick sort");
console.log("---------------------------------------");
console.log("before sort", array_for_quick_sort);

quick_sort(array_for_quick_sort);

console.log("After sort", array_for_quick_sort);