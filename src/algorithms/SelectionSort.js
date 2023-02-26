import '../assets/SelectionSort.scss'
import { delay } from '../helper/helperFunctions';

export default class SelectionSort {
    constructor(array, arrayBars) {
        this.array = array;
        this.arrayBars = arrayBars;
    }

    async sortBars() {
        let currentIdx = 0;

        while (currentIdx < this.array.length - 1) {
            let currentSmallestIdx = currentIdx;

            for (let i = currentIdx + 1; i < this.array.length; i++) {
                if (this.array[currentSmallestIdx] > this.array[i]) {
                    currentSmallestIdx = i;
                }
            }

            [this.array[currentSmallestIdx], this.array[currentIdx]] = [this.array[currentIdx], this.array[currentSmallestIdx]];
            currentIdx += 1;
        }
    }


    // getBarHeight(idx) {
    //     return parseInt(this.arrayBars[idx].style.height.slice('px'));
    // }

    // async swapGivenBarHeights(bar1Idx, bar2Idx, bar1Height, bar2Height) {

    //     await delay();
    //     this.arrayBars[bar1Idx].style.height = `${bar2Height}px`;
    //     this.arrayBars[bar2Idx].style.height = `${bar1Height}px`;
    // }
}
