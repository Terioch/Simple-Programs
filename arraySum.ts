// Find sum of array of integers

// Iterative Solution
function iterativeSum(nums: number[]): number {
  let sum = 0;

  for (let i  = 0; i < nums.length; i++) {
    sum += nums[i];
  }

  return sum;
}

// Recursive Solution
function recursiveSum(nums: Array<number>): number {
  if (!nums.length) return nums.length;
  return nums[0] + recursiveSum(nums.slice(1));
}

console.log(iterativeSum([1, 2, 3, 3, 5]));
console.log(recursiveSum([3, 1, 7, 3, 8, 6]));