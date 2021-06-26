// Return the maximum and minimum elements in an array
// function findMaxAndMin(nums: Array<number>): string {
// 	let max = nums[0];
// 	let min = max;

// 	for (let i = 0; i < nums.length; i++) {
// 		if (nums[i] > max) {
// 			max = nums[i];
// 		}
// 		if (nums[i] < min) {
// 			min = nums[i];
// 		}
// 	}
// 	return `Max: ${max}\nMin: ${min}`;
// }

// console.log(findMaxAndMin([2, 5, 3, 6, 9, 1, 3]));

#include <stdio.h>

int findMaxAndMin(int *nums) {
  size_t len = sizeof(nums) / sizeof(nums[0]);
  int max = nums[0];
  int min = max;

  for (int i = 0; i < len; i++) {
    if (nums[i] > max) {
      max = nums[i];
    }
    if (nums[i] < min) {
      min = nums[i];
    }
  }
  printf("Max: %i\nMin: %i\n", max, min);
  return 0;
}

int main(void) {
  int nums[255] = {2, 6, 7, 5, 1, 1, 3, 8};
  findMaxAndMin(nums);
  return 0;
}