// Return the maximum and minimum elements in an array
function findMaxAndMin(nums: Array<number>): string {
	let max = nums[0];
	let min = max;

	for (let i = 0; i < nums.length; i++) {
		if (nums[i] > max) {
			max = nums[i];
		}
		if (nums[i] < min) {
			min = nums[i];
		}
	}
	return `Max: ${max}\nMin: ${min}`;
}

console.log(findMaxAndMin([2, 5, 3, 6, 9, 1, 3]));
