// Program that finds and returns the index of the first instance of an integer target within a sorted list.

class BinarySearch {
  constructor() {
    console.log(this.iterativeSearch([0, 1, 3, 5, 6, 7], 7));
    console.log(this.recursiveSearch([0, 2, 5, 5, 6, 7, 8, 8], 0));
  }

  // Iterative Binary Search
  iterativeSearch(nums: Array<number>, target: number): number {
    if (nums.length == 0) return -1;
  
    let low = 0, high = nums.length - 1;

    while (low <= high) {
      let mid = Math.floor(low + (high - low) / 2);
      let value = nums[mid];

      if (value == target) return mid;
      else if (value < target) low = mid + 1;
      else high = mid - 1;
    }

    return -1;
  }

  // Recursive Binary Search
  recursiveSearch(nums: Array<number>, target: number): number {
    return this.recursiveBinarySearch([1, 3], 3, 0, nums.length - 1);
  }

  recursiveBinarySearch(nums: Array<number>, target: number, low: number, high: number): number {
    if (nums.length == 0 || low > high) return -1;

    let mid = Math.floor(low + (high - low) / 2);
    let value = nums[mid];

    if (value == target) return mid;
    else if (value < target) return this.recursiveBinarySearch(nums, target, mid + 1, high);
    else return this.recursiveBinarySearch(nums, target, low, mid - 1);
  }
}

const binarySearch = new BinarySearch();
