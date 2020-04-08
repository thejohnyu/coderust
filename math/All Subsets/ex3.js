// Back Tracking

var subsets = function(nums) {
	let acc = []
	backtrack(0, [], acc)
	
	function backtrack(index, curr, acc) {
		acc.push(curr)
		for (let i = index; i < nums.length; i++) {
			const curIdx = i + 1
			const mergeResWithCurr = [...cur, nums[i]]
			backtrack(curIdx, mergeResWithCurr)
		}
	}
	
	return acc
}