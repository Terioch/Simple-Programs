// Return the maximum and minimum elements in an array
#include <stdio.h>

int findMaxAndMin(void) {
  int nums[] = {2, 6, 7, 5, 1, 1, 3, 8};
  int len = sizeof(nums)/sizeof(nums[0]);
  int max = nums[0];
  int min = max;
  printf("Array length: %i\n", len);

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
  findMaxAndMin();
  return 0;
}