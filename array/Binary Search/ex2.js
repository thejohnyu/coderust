let binary_search_iterative = function (a, key) {
  let low = 0
  let high = a.length - 1
  while (low <= high) {
    let mid = low + Math.floor((high - low) / 2)
    if (a[mid] === key) {
      return mid
    }

    if (key < a[mid]) {
      high = mid - 1
    } else {
      low = mid + 1
    }
  }

  return -1
}

let array_for_binary_search = [10, 20, 47, 59, 63, 75, 88, 99, 107, 120, 133, 155, 162, 176, 188, 199, 200, 210, 222]

console.log('Key(47) found at: ' + binary_search_iterative(array_for_binary_search, 47))
console.log('Key(75) found at: ' + binary_search_iterative(array_for_binary_search, 75))
console.log('Key(175) found at: ' + binary_search_iterative(array_for_binary_search, 175))
