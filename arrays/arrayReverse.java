// Reverse an array of characters
class arrayReverse {
  public void reverse() {
    String[] arr = {"l", "e", "f", "h", "r", "t"};
    iterativeReversal(arr);
    System.out.println(arr);
  }

  public String[] iterativeReversal(String[] arr) {
    if (arr.length < 2) return arr;

    int low = 0;
    int high = arr.length - 1;

    while (low <= high) {
      String temp = arr[high];
      arr[high--] = arr[low];
      arr[low++] = temp;
    }
    return arr;
  }
}
