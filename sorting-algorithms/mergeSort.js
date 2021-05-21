// Implement Merge Sort
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
		let total = high - low + 1;

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

		// Push temp values onto original array
		for (let i = 0; i < total; i++) {
			this.nums[i + low] = this.temp[i];
		}
	}
}

console.log(new MergeSort([5, 2, 3, 1]));
