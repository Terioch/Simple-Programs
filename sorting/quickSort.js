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
		const trio = [low, mid, high];
		let swapped = true;

		// Sort trio using bubble sort
		while (swapped) {
			for (let i = 0; i < trio.length - 1; i++) {
				if (trio[i] > trio[i + 1]) {
					trio[i] = trio[i] + trio[i + 1];
					trio[i + 1] = trio[i] - trio[i + 1];
					trio[i] = trio[i] - trio[i + 1];
				} else {
					swapped = false;
				}
			}
		}
		return trio[trio.length / 2];
	}
}

console.log(new Quick([4, 6, 7, 10, 10, 12, 13, 14]));
