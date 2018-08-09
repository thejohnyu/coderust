let binary_search_recs = function (arr, st, end, key) {
  // assuming all the keys are unique.
  if (st > end) {
    return -1
  }

  let mid = st + Math.floor((end - st) / 2)

  if (arr[mid] === key) {
    return mid
  }

  if (arr[st] < arr[mid]
    && key < arr[mid] && key >= arr[st]) {
    return binary_search_recs(arr, st, mid - 1, key)
  } else if (arr[mid] < arr[end]
    && key > arr[mid] && key <= arr[end]) {
    return binary_search_recs(arr, mid + 1, end, key)
  } else if (arr[st] > arr[mid]) {
    return binary_search_recs(arr, st, mid - 1, key)
  } else if (arr[end] < arr[mid]) {
    return binary_search_recs(arr, mid + 1, end, key)
  }

  return -1
}

let binary_search_rotated = function (arr, key) {
  return binary_search_recs(arr, 0, arr.length - 1, key)
}

let v1 = [6, 7, 1, 2, 3, 4, 5]

console.log('Array 1: [' + v1 + ']')

console.log('Key(3) found at: ' + binary_search_rotated(v1, 3))
console.log('Key(6) found at: ' + binary_search_rotated(v1, 6))

let v2 = [4, 5, 6, 1, 2, 3]
console.log('\nArray 2: [' + v2 + ']')

console.log('Key(3) found at: ' + binary_search_rotated(v2, 3))
console.log('Key(6) found at: ' + binary_search_rotated(v2, 6))
