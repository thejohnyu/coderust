let find_low_index = function(arr, key) {
	let low = 0;
	let high = arr.length - 1;
	let mid = Math.floor(high / 2);

	while (low <= high) {
		let mid_elem = arr[mid];

		if (mid_elem < key) {
			low = mid + 1;
		} else {
			high = mid - 1;
		}

		mid = low + Math.floor((high - low) / 2);
	}

	if (arr[low] === key) {
		return low;
	}

	return -1;
};

let find_high_index = function(arr, key) {
	let low = 0;
	let high = arr.length - 1;
	let mid = Math.floor(high / 2);

	while (low <= high) {
		let mid_elem = arr[mid];

		if (mid_elem <= key) {
			low = mid + 1;
		} else {
			high = mid - 1;
		}

		mid = low + Math.floor((high - low) / 2);
	}

	if (arr[high] === key) {
		return high;
	}

	return -1;
};

let array_for_low_high = [1, 1, 1, 2, 2, 2, 2, 2, 3, 3, 3, 4, 4, 4, 4, 5, 5, 5, 6, 6, 6, 6, 6, 6];

console.log('');
console.log('');
console.log('+++++++++++++++++++++++++++++++++++++++');
console.log('Find Lowest Index');
console.log('---------------------------------------');
console.log(find_low_index(array_for_low_high, 5));
console.log(find_low_index(array_for_low_high, 2));

console.log('');
console.log('');
console.log('+++++++++++++++++++++++++++++++++++++++');
console.log('Find Highest Index');
console.log('---------------------------------------');
console.log(find_high_index(array_for_low_high, 5));
console.log(find_high_index(array_for_low_high, 2));
