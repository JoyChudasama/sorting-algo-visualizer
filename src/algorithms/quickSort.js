import { swapGivenIndicesValuesOfArray } from '../helper/arrayHelper';

export default class QuickSort {

	constructor(array, arrayBars) {
		this.array = array;
		this.arrayBars = arrayBars;
	}

	sort() {
		this.quickSortHelper(this.arrayBars, 0, this.arrayBars.length - 1);
	}

	async quickSortHelper(array, startIdx, endIdx) {
		if (startIdx >= endIdx) return;

		const pivotIdx = startIdx;
		let leftIdx = startIdx + 1;
		let rightIdx = endIdx;

		while (rightIdx >= leftIdx) {
			const leftBarHeight = this.getBarHeight(leftIdx);
			const rightBarHeight = this.getBarHeight(rightIdx);
			const pivotBarHeight = this.getBarHeight(pivotIdx);

			if (leftBarHeight > pivotBarHeight && rightBarHeight < pivotBarHeight) {
				this.arrayBars[leftIdx].style.height = `${rightBarHeight}px`;
				this.arrayBars[rightIdx].style.height = `${leftBarHeight}px`;
			}

			if (leftBarHeight <= pivotBarHeight) leftIdx += 1;

			if (rightBarHeight >= pivotBarHeight) rightIdx -= 1;
		}

		const rightBarHeight = this.getBarHeight(rightIdx);
		const pivotBarHeight = this.getBarHeight(pivotIdx);

		this.arrayBars[rightIdx].style.height = `${pivotBarHeight}px`;
		this.arrayBars[pivotIdx].style.height = `${rightBarHeight}px`;

		const isLeftTheSmallerArray = rightIdx - 1 - startIdx < endIdx - (rightIdx + 1);

		if (isLeftTheSmallerArray) {

			this.quickSortHelper(array, startIdx, rightIdx - 1);
			this.quickSortHelper(array, rightIdx + 1, endIdx);
		} else {
			this.quickSortHelper(array, rightIdx + 1, endIdx);
			this.quickSortHelper(array, startIdx, rightIdx - 1);
		}
	}


	getBarHeight(idx) {
		return parseInt(this.arrayBars[idx].style.height.slice('px'));
	}
}
