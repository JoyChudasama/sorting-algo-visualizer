import '../assets/BubbleSort.scss'
import { delay } from '../helper/helperFunctions';

export default class BubbleSort {
	constructor(array, arrayBars) {
		this.array = array;
		this.arrayBars = arrayBars;
	}

	async sortBars() {
		this.sortBarsHelper(this.arrayBars);
	}

	async sortBarsHelper(arrayBars) {
		let swaps = 0

		for (let i = 0; i < arrayBars.length - 1; i++) {

			arrayBars[i].classList.add('comparing')
			arrayBars[i + 1].classList.add('comparing')

			await delay();

			const bar1Height = this.getBarHeight(i);
			const bar2Height = this.getBarHeight(i + 1);

			if (bar1Height > bar2Height) {
				arrayBars[i].classList.add('swapping')
				arrayBars[i + 1].classList.add('swapping')

				await this.swapGivenBarHeights(i, i + 1, bar1Height, bar2Height)

				arrayBars[i].classList.remove('swapping');
				arrayBars[i + 1].classList.remove('swapping');

				swaps += 1
			}

			arrayBars[i].classList.remove('comparing');
			arrayBars[i + 1].classList.remove('comparing');
		}

		swaps !== 0 && this.sortBars(arrayBars);
	}

	getBarHeight(idx) {
		return parseInt(this.arrayBars[idx].style.height.slice('px'));
	}

	async swapGivenBarHeights(bar1Idx, bar2Idx, bar1Height, bar2Height) {

		await delay();
		this.arrayBars[bar1Idx].style.height = `${bar2Height}px`;
		this.arrayBars[bar2Idx].style.height = `${bar1Height}px`;
	}
}
