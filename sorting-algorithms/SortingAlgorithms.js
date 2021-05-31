import Merge from "./mergeSort";
import Bubble from "./bubbleSort";

export const sortingAlgorithms = {
	arr: [3, 6, 2, 9, 1, 4, 8],
	merge: new Merge(arr),
	bubble: new Bubble(arr),
};
