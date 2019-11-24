let find_max_sliding_window = function(arr, window_size) {
  var result = [];
  var counter = 0;

  while (counter < arr.length) {
    const window = window_size + counter;
    const slide = arr.slice(counter, window);
    const newWindow = Math.max(...slide);
    result.push(newWindow);
    counter++;
    if (window == arr.length) {
      return result;
    }
  }
};
