// Return the indices of 2 integers in an array with a sum equal to the target input

public class targetSum {
  public static void computeIndicies() {
    int[] nums = {1, 2, 3, 4, 5, 6, 7};
    int target = 11;
    int[] nested = nestedIterativeMethod(nums, target);
    int[] hashed = hashingMethod(nums, target);
    System.out.println("Nested: " + nested + "\n" + "Hashed: " + hashed);
  }

  public static int[] nestedIterativeMethod(int[] nums, int target) {
    return nums;
  }
  
  public static int[] hashingMethod(int[] nums, int target) {
    return nums;
  }
}
