/**
 *  Input: nums = [1,3,-1,-3,5,3,6,7], and k = 3
    Output: [3,3,5,5,6,7] 
 * @param {*} nums 
 * @param {*} window_size 
 */

var maxSlidingWindow = function(nums, window_size) {
    const queue = [];
    const res = [];
    
    const push = i => { // this is O(1), operation as it pushes/pops on each call
        // while (cur > queue.pop() ) ==> continue popping until you reach the end of the the queue or you find a number that isn't greater.
        while (queue.length && queue[queue.length - 1] < nums[i]) {
            queue.pop();
        }
        queue.push(nums[i]);
    }
    
    const pop = i => {
        console.log('wtf', i, '-', window_size + 1, '=', i - window_size + 1 , 'true/false', nums[i - window_size + 1], '===', queue[0])
        if (nums[i - window_size + 1] === queue[0]) {
            queue.shift();
        }
    }
    
    for (let i = 0; i < nums.length; i++) {
        if (i < window_size - 1) {
            push(i);
        } else {
            push(i);
            // console.log('wtf ==>', i - window_size + 1)
            // i = start - end + 1
            res[i - window_size + 1] = queue[0];
            pop(i);    
        }
    }
    
    return res;
};

const result = maxSlidingWindow([-4, 2, -5, 1, -1, 6], 3);

console.log("result ====>", result);