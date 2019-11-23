function TwoSum(arr) { 
    var result = null;
    var num = arr[0]; 
    for(var i = 1; i < arr.length; i++) {
        for(var j = i + 1; j < arr.length; j++) {
            if ((arr[i] + arr[j]) == num) {
                if (result === null) {
                    result = "" + arr[i] + "," + arr[j];
                } else {
                    result += " " + arr[i] + "," + arr[j];
                }
            }
        }
    }

    return result === null ? "-1" : result;  
}

const arr = [7, 3, 5, 2, -4, 8, 11]
const result = TwoSum(arr)
console.log('result', result);
