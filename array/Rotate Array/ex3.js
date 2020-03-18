// Complete the rotLeft function below.
function rotLeft(arr, d) {
    // normalize the rotations by using mod
    d = arr.length - d % arr.length

    function reverse(arr, start, end) {
        while ( start < end) {
            let temp = arr[start]
            arr[start] = arr[end]
            arr[end] = temp
            start++
            end--
        }
    }

    reverse(arr, 0, arr.length - 1)
    reverse(arr, 0, d - 1)
    reverse(arr, d, arr.length - 1)

    return arr
}