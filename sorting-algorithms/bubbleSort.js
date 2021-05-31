// Implement iterative bubble sort
class Bubble {
	constructor(nums) {
		this.iterativeBubbleSort(nums);
		return nums;
	}

	iterativeBubbleSort = nums => {
		for (let i = 0; i < nums.length; i++) {
			let swapped = false;

			for (let j = 0; j < nums.length - i; j++) {
				let current = nums[j];
				let next = nums[j + 1];
				console.log(current);

				// Shift/bubble current value to the right
				if (current > next) {
					current = current + next;
					next = current - next;
					current = current - next;
					nums[j] = current;
					nums[j + 1] = next;
					swapped = true;
				}
			}
			if (!swapped) return nums;
		}
	};
}

console.log(new Bubble([3, 6, 2, 9, 1, 4, 8]));

export default Bubble;
