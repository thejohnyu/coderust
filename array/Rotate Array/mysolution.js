let rotate_array_in_place = function (arr, n) {
  if (arr.length < n) {
    return -1
  }
  if (n > 0) {
    const removed = arr.splice(arr.length - n, n)
    const insert = arr.unshift(...removed)
    return arr
  }else {
    const removed = arr.splice(0, (n * -1) + 1)
    const insert = arr.push(...removed)
    return arr
  }
}

console.log('')
console.log('')
console.log('+++++++++++++++++++++++++++++++++++++++')
console.log('Rotate Arrays')
console.log('---------------------------------------')

let array_rotate_1 = [1, 2, 3, 4, 5]
let array_rotate_2 = [1, 2, 3, 4, 5]
let array_rotate_result = [4, 5, 1, 2, 3]
console.log('Before Rotate (Solution 1)', array_rotate_1)
rotate_array_in_place(array_rotate_1, 2)
console.log('After Rotate (Solution 1)', array_rotate_1)
