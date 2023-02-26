import '../assets/InsertionSort.scss'
import { delay } from '../helper/helperFunctions';

export default class InsertionSort {
    constructor(array, arrayBars) {
        this.array = array;
        this.arrayBars = arrayBars;
    }

    async sortBars() {
        for (let i = 1; i < this.arrayBars.length; i++) {

            let j = i

            const currentBarHeight = this.getBarHeight(j);
            const previousBarHeight = this.getBarHeight(j - 1);

            while ((j > 0) && (currentBarHeight < previousBarHeight)) {

                this.swapGivenBarHeights(j, i - 1, currentBarHeight, previousBarHeight);

                j -= 1
            }

        }

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
