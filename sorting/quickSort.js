// Recursive Quick Sort
class Quick {
	constructor(nums) {
		const low = 0;
		const high = nums.length - 1;
		this.quickSort(nums, low, high);
		return nums;
	}

	quickSort(nums, low, high) {
		if (low < high) {
			const pivotIdx = this.partition(nums, low, high);
			this.quickSort(nums, low, pivotIdx);
			this.quickSort(nums, pivotIdx + 1, high);
		}
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
		this.swap(nums, low, j); // Swap current pivot with new pivot
		return j;
	}

	// Swap values at i and j
	swap(nums, x, y) {
		nums[x] = nums[x] + nums[y];
		nums[y] = nums[x] - nums[y];
		nums[x] = nums[x] - nums[y];
	}
}

console.log(new Quick([2, 3, 5, 6, 7]));
