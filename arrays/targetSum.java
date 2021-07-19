// Return the indices of 2 integers in an array with a sum equal to the target input
import java.util.HashMap;

public class targetSum {
  public static void computeIndicies() {
    int[] nums = {1, 2, 3, 4, 5, 6, 7};
    int target = 11;
    int[] nested = nestedIterativeMethod(nums, target);
    int[] hashed = hashingMethod(nums, target);
    System.out.println("Nested: " + nested + "\n" + "Hashed: " + hashed);
  }

  public static int[] nestedIterativeMethod(int[] nums, int target) {
    for (int i = 0; i < nums.length - 1; i++) {
      for (int j = i + 1; j < nums.length; j++) {
        if (nums[i] + nums[j] == target) {
          return new int[] {i, j};
        }
      }
    }
    throw new IllegalArgumentException("No Solution");
  }
  
  public static int[] hashingMethod(int[] nums, int target) {
    HashMap<Integer, Integer> complements = new HashMap<>();
    
    for (int i = 0; i < nums.length; i++) {
      int complement = target - nums[i];
      if (complements.containsValue(complement)) {
        return new int[] {complements.get(complement), i};
      }
      complements.put(i, nums[i]);
    }
    throw new IllegalArgumentException("No Solution");
  }
}
