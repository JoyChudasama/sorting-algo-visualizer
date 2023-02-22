import { swapGivenIndicesValuesOfArray } from "../helper/arrayHelper";

export default function quickSort(array) {
	quickSortHelper(array, 0, array.length - 1);
	return array;
}

function quickSortHelper(array, startIdx, endIdx) {
	if (startIdx >= endIdx) return;

	const pivotIdx = startIdx;
	let leftIdx = startIdx + 1;
	let rightIdx = endIdx;

	while (rightIdx >= leftIdx) {
		if (array[leftIdx] > array[pivotIdx] && array[rightIdx] < array[pivotIdx]) {
			swapGivenIndicesValuesOfArray(leftIdx, rightIdx, array);
		}

		if (array[leftIdx] <= array[pivotIdx]) leftIdx += 1;

		if (array[rightIdx] >= array[pivotIdx]) rightIdx -= 1;
	}

	swapGivenIndicesValuesOfArray(pivotIdx, rightIdx, array);
	const isLeftTheSmallerArray = rightIdx - 1 - startIdx < endIdx - (rightIdx + 1);

	if (isLeftTheSmallerArray) {
		quickSortHelper(array, startIdx, rightIdx - 1);
		quickSortHelper(array, rightIdx + 1, endIdx);
	} else {
		quickSortHelper(array, rightIdx + 1, endIdx);
		quickSortHelper(array, startIdx, rightIdx - 1);
	}
}
