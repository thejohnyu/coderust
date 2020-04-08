class MonotonicQueue {
  constructor(arr) {
    this.arr = arr;
    this.queue = []; // 1,2,3
    this.lo = 0;
  }
  // queue ----> [head, ...n are all smaller] head is the largest number
  // [place1, place2, place3] ---> right place === place1 all the time, thats why you are using isMonotonicallyIncreasing function to validate.
  max() {
    return this.queue[0];
  }

  push(cur) {
    while (this.queue && this.queue[this.queue.length - 1] < cur) {
      this.queue.pop();
    }
    this.queue.push(cur); 
  }

  isMonotonicallyIncreasing(cur) {
    return this.queue && this.queue[this.queue.length - 1] < cur
  }

  pop() {
    if (this.arr[this.lo] == this.queue[0]) {
      this.queue.shift();
    }
    this.lo++;
  }
  /**
   *  #remove the first element from the queue if it is outside the window
        if i - queue[0][1] >= k:
            queue.pop(0)
   */

  /**
   *   const pop = i => {
        if (nums[i - window_size + 1] === queue[0]) {
            queue.shift();
        }
    }
   */
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
    window.pop();
  }
  
  return ret;
}
var maxSlidingWindow = function(nums, k) {
  return solve(nums, k);
};

const result = maxSlidingWindow([-4, 2, -5, 1, -1, 6], 3);

console.log("result ====>", result);
