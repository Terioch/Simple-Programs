// Implement recursive merge sort
class MergeSort {
	constructor(initialValues) {
		this.nums = initialValues;
		this.temp = new Array(this.nums.length - 1);
		this.mergeSort(0, this.nums.length - 1);
		return this.nums;
	}

	mergeSort(low, high) {
		if (low == high) return;
		const mid = Math.floor((low + high) / 2);
		this.mergeSort(low, mid); // Divide left half continuously
		this.mergeSort(mid + 1, high); // Divide right half continuously
		this.merge(low, mid, high); // Merge items within subarray into sorted format
	}

	merge(low, mid, high) {
		let highMid = mid + 1;
		let leftPointer = low;
		let rightPointer = highMid;
		let tempIdx = 0;

		// Use two pointer approach to merge values
		while (leftPointer <= mid && rightPointer <= high) {
			if (this.nums[leftPointer] < this.nums[rightPointer]) {
				this.temp[tempIdx++] = this.nums[leftPointer++];
			} else {
				this.temp[tempIdx++] = this.nums[rightPointer++];
			}
		}

		// Add excess values not yet compared onto end of temp array
		while (leftPointer <= mid) {
			this.temp[tempIdx++] = this.nums[leftPointer++];
		}

		while (rightPointer <= high) {
			this.temp[tempIdx++] = this.nums[rightPointer++];
		}

		// Push temporary values onto original array
		for (let i = 0; i <= high - low; i++) {
			this.nums[low + i] = this.temp[i];
		}
	}
}

console.log(new MergeSort([5, 8, 1, 4, 3, 7, 2, 9]));
