// Recursive Quick Sort
class Quick {
	constructor(nums) {
		this.quickSort(nums);
		return nums;
	}

	quickSort(nums) {
		let low = 0;
		let high = nums.length - 1;
		let pivot = this.findPivot(nums, low, high);
		console.log(pivot);
	}

	// Calculate the pivot
	findPivot(nums, low, high) {
		const mid = nums.length / 2;
		const trio = [nums[low], nums[mid], nums[high]];
		let swapped = true;

		// Sort trio using bubble sort and return the median
		while (swapped) {
			for (let i = 0; i < trio.length - 1; i++) {
				if (trio[i] > trio[i + 1]) {
					trio[i] = trio[i] + trio[i + 1];
					trio[i + 1] = trio[i] - trio[i + 1];
					trio[i] = trio[i] - trio[i + 1];
					swapped = true;
				} else {
					swapped = false;
				}
			}
		}
		return trio[Math.floor(trio.length / 2)];
	}
}

console.log(new Quick([4, 6, 7, 10, 10, 12, 13, 14]));
