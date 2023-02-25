import { delay } from '../helper/helperFunctions';
import '../assets/QuickSort.scss';

export default class QuickSort {

	constructor(array, arrayBars) {
		this.array = array;
		this.arrayBars = arrayBars;
	}

	sortBars() {
		this.quickSortBarHelper(this.arrayBars, 0, this.arrayBars.length - 1);
	}

	async quickSortBarHelper(array, startIdx, endIdx) {
		if (startIdx >= endIdx) return;

		const pivotIdx = startIdx;
		let leftIdx = startIdx + 1;
		let rightIdx = endIdx;

		this.arrayBars[pivotIdx].classList.add('pivot');


		while (rightIdx >= leftIdx) {
			const leftBarHeight = this.getBarHeight(leftIdx);
			const rightBarHeight = this.getBarHeight(rightIdx);
			const pivotBarHeight = this.getBarHeight(pivotIdx);

			if (leftBarHeight > pivotBarHeight && rightBarHeight < pivotBarHeight) {
				this.arrayBars[leftIdx].classList.add('swapping');
				this.arrayBars[rightIdx].classList.add('swapping');
				
				await this.swapGivenBarHeights(leftIdx, rightIdx, leftBarHeight, rightBarHeight);
				
				this.arrayBars[leftIdx].classList.remove('swapping');
				this.arrayBars[rightIdx].classList.remove('swapping');
			}

			if (leftBarHeight <= pivotBarHeight) leftIdx += 1;

			if (rightBarHeight >= pivotBarHeight) rightIdx -= 1;
		}

		const rightBarHeight = this.getBarHeight(rightIdx);
		const pivotBarHeight = this.getBarHeight(pivotIdx);

		this.arrayBars[pivotIdx].classList.add('swapping');
		this.arrayBars[rightIdx].classList.add('swapping');
		
		this.arrayBars[pivotIdx].classList.remove('pivot');
		
		await this.swapGivenBarHeights(pivotIdx, rightIdx, pivotBarHeight, rightBarHeight);
		
		this.arrayBars[pivotIdx].classList.remove('swapping');
		this.arrayBars[rightIdx].classList.remove('swapping');

		const isLeftTheSmallerArray = rightIdx - 1 - startIdx < endIdx - (rightIdx + 1);

		if (isLeftTheSmallerArray) {
			Promise.all([this.quickSortBarHelper(array, startIdx, rightIdx - 1), this.quickSortBarHelper(array, rightIdx + 1, endIdx)]);
		} else {
			Promise.all([this.quickSortBarHelper(array, rightIdx + 1, endIdx), this.quickSortBarHelper(array, startIdx, rightIdx - 1)]);
		}
	}

	getBarHeight(idx) {
		return parseInt(this.arrayBars[idx].style.height.slice('px'));
	}

	async swapGivenBarHeights(bar1Idx, bar2Idx, bar1Height, bar2Height) {

		await delay(50);

		this.arrayBars[bar1Idx].style.height = `${bar2Height}px`;
		this.arrayBars[bar2Idx].style.height = `${bar1Height}px`;
	}
}
