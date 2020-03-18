// Lexicographic Order or otherwise known as taking the index and turning it into a bit

var subsets = function(nums) {
    let res = []
    const powSize = Math.pow(2, nums.length)

    for (let i = 0; i < powSize; i++) {
        let set = []
        for (let j = 0; j < nums.length; j++) {
            if ((i & (1 << j)) > 0) {
                set.push(nums[j])
            }
        }
        res.push(set)
    }
    return res
}