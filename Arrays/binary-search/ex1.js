'use strict'

let binary_search_rec = function (a, key, low, high) {
  if (low > high) {
    return -1
  }

  let mid = low + Math.floor((high - low) / 2)
  if (a[mid] === key) {
    return mid
  } else if (key < a[mid]) {
    return binary_search_rec(a, key, low, (mid - 1))
  } else {
    return binary_search_rec(a, key, (mid + 1), high)
  }
}

let binary_search = function (a, key) {
  return binary_search_rec(a, key, 0, (a.length - 1))
}

let array_for_binary_search = [10, 20, 47, 59, 63, 75, 88, 99, 107, 120, 133, 155, 162, 176, 188, 199, 200, 210, 222]

console.log('Key(47) found at: ' + binary_search(array_for_binary_search, 47))
console.log('Key(75) found at: ' + binary_search(array_for_binary_search, 75))
console.log('Key(175) found at: ' + binary_search(array_for_binary_search, 175))
