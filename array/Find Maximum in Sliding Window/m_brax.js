class MonotonicQueue {
  constructor(arr) {
    this.arr = arr;
    this.queue = [];
    this.lo = 0;
  }
  // queue ----> [head, ...n are all smaller] head is the largest number
  // [place1, place2, place3] ---> right place === place1 all the time, thats why you are using isMonotonicallyIncreasing function to validate.
  max() {
    return this.queue[0];
  }
  // [1] .push [2] --> [1, 2]

  push(element) { // [1, 2, 3, 4, 3, 2, 1, 2, 5]
    while (!this.isMonotonicallyIncreasing(element)) { // [4] 
      this.queue.pop();
    }
    this.queue.push(element);
  }

  isMonotonicallyIncreasing(element) { // 4
    if (this.queue.length === 0) return true;// true 
    const lastIndex = this.queue.length - 1;
    return element <= this.queue[lastIndex];
  }

  updateFront() {
    if (this.arr[this.lo] == this.queue[0]) {
      this.queue.shift();
    }
    this.lo++;
  }
}

function solve(arr, k) {
  if (arr.length === 0) return [];
  let window = new MonotonicQueue(arr);
  let ret = [];
  for (let i = 0; i < k - 1; ++i) {
    window.push(arr[i]);
  }
  for (let i = k - 1; i < arr.length; ++i) {
    window.push(arr[i]);
    ret.push(window.max());
    window.updateFront();
  }
  
  return ret;
}
var maxSlidingWindow = function(nums, k) {
  return solve(nums, k);
};

const result = maxSlidingWindow([1, 2, 3, 4, 3, 2, 1, 2, 5], 4);

console.log("result ====>", result);
