import { swapGivenIndicesValuesOfArray } from '../helper/arrayHelper';

export default class BubbleSort {
	constructor(array, arrayBars) {
		this.array = array;
		this.animationsArray = new Array();
		this.arrayBars = arrayBars;
	}

	sort() {
		let isSorted = false;
		let counter = 0;

		while (!isSorted) {
			isSorted = true;

			//looping from the end because of array-container is rotated 180deg
			for (let i = this.array.length - 1; i > 0 - counter; i--) {
				const animation = {};
				animation.comparing = [i, i + 1];

				//Using less than because of array-container is rotated 180deg
				if (this.array[i] < this.array[i + 1]) {
					animation.swapping = [i, i + 1];
					swapGivenIndicesValuesOfArray(i, i + 1, this.array);
					isSorted = false;
				}

				this.animationsArray.push(animation);
			}

			counter += 1;
		}
	}

	applyBubbleSort() {
		for (let i = 0; i < this.animationsArray.length; i++) {
			const { comparing, swapping } = this.animationsArray[i];

			const comparingBar1 = this.arrayBars[comparing[0]];
			const comparingBar2 = this.arrayBars[comparing[1]];
			const swappingBar1 = swapping ? this.arrayBars[swapping[0]] : null;
			const swappingBar2 = swapping ? this.arrayBars[swapping[1]] : null;
			const colorClass = swappingBar1 ? 'swapping' : 'did-not-swap';

			setTimeout(() => {
				comparingBar1 && comparingBar1.classList.add(`${colorClass}`);
				comparingBar2 && comparingBar2.classList.add(`${colorClass}`);

				setTimeout(() => {
					swappingBar1 &&
						([swappingBar2.style.height, swappingBar1.style.height] = [
							swappingBar1.style.height,
							swappingBar2.style.height,
						]);

					comparingBar1 &&
						comparingBar1.classList.remove('did-not-swap', 'swapping');
					comparingBar2 &&
						comparingBar2.classList.remove('did-not-swap', 'swapping');
				}, i * -5);
			}, i * 10);
		}
	}
}
