// Back Tracking

var subsets = function(nums) {
	let res = []
	backtrack(0, [])
	
	function backtrack(index, curr) {
		res.push(curr)
		for (let i = index; i < nums.length; i++) {
			backtrack(i + 1, [...curr, nums[i]])
		}
	}
	
	return res
}