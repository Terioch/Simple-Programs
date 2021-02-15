// Program that shifts every element within an array to its next consecutive index
function arrayShift(arr: Array<number>) {
  if (arr.length < 2) return arr;

  let tmp: number = arr[0];

  arr[0] = arr[arr.length - 1];
  arr[arr.length - 1] = tmp;

  for (let i = 1; i < arr.length - 1; ++i) {
    arr[arr.length - 1] = arr[i];
    arr[i] = tmp;
    tmp = arr[arr.length - 1];
  }

  return arr;
}

console.log(arrayShift([1, 2, 3, 4, 5, 6, 7, 8]));