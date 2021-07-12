// Recursive Quick Sort
class Quick {
	constructor(nums) {
		this.quickSort(nums);
		return nums;
	}

	quickSort(nums) {
		let low = 0;
		let high = nums.length - 1;
		this.partition(nums, low, high);
	}

	partition(nums, low, high) {
		const pivot = nums[low];
		let i = low;
		let j = high;

		// Iterate until we have 2 swappable elements then repeat
		while (i < j) {
			do {
				i++;
			} while (nums[i] <= pivot);

			do {
				j--;
			} while (nums[j] > pivot);

			if (i < j) {
				this.swap(nums, i, j);
			}
		}
	}

	// Swap values at i and j
	swap(nums, i, j) {
		nums[i] = nums[i] + nums[j];
		nums[j] = nums[i] - nums[j];
		nums[i] = nums[i] - nums[j];
	}
}

console.log(new Quick([4, 6, 7, 10, 10, 12, 13, 14]));
