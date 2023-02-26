import '../assets/SelectionSort.scss'
import { delay } from '../helper/helperFunctions';

export default class SelectionSort {
    constructor(array, arrayBars) {
        this.array = array;
        this.arrayBars = arrayBars;
    }

    async sortBars() {
        let currentIdx = 0;

        while (currentIdx < this.arrayBars.length - 1) {
            let currentSmallestIdx = currentIdx;

            this.arrayBars[currentSmallestIdx].classList.add('currentSmallest')

            for (let i = currentIdx + 1; i < this.array.length; i++) {

                this.arrayBars[i].classList.add('comparing')
                
                await delay();
                
                const currentBarHeight = this.getBarHeight(i);
                const currentSmallestBarHeight = this.getBarHeight(currentSmallestIdx);
                
                if (currentBarHeight < currentSmallestBarHeight) {
                    this.arrayBars[currentSmallestIdx].classList.remove('currentSmallest')
                    currentSmallestIdx = i;
                    this.arrayBars[currentSmallestIdx].classList.add('currentSmallest')
                }
                
                this.arrayBars[i].classList.remove('comparing')
            }

            this.arrayBars[currentSmallestIdx].classList.remove('currentSmallest')
            
            this.arrayBars[currentIdx].classList.add('swapping');
            this.arrayBars[currentSmallestIdx].classList.add('swapping');
            
            await delay();

            const currentIdxBarHeight = this.getBarHeight(currentIdx);
            const currentSmallestBarHeight = this.getBarHeight(currentSmallestIdx);
            
            this.swapGivenBarHeights(currentSmallestIdx, currentIdx, currentSmallestBarHeight, currentIdxBarHeight);

            this.arrayBars[currentIdx].classList.remove('swapping');
            this.arrayBars[currentSmallestIdx].classList.remove('swapping');

            currentIdx += 1;
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
