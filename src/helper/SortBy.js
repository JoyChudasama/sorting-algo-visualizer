class SortBy {
  constructor(array) {
    this.array = array;
    this.animationArray = new Array();
  }

  bubbleSort() {
    let swaps = 0;
    for (let i = 0; i < this.array.length; i++) {
      
      const animation = {};
      animation.comparing = [i, i + 1];

      //Using less than because of array container is rotated 180deg
      if (this.array[i] < this.array[i + 1]) {
        animation.swapping = [i, i + 1];
        this.swapGivenIndicesOfArray(i, i + 1);
        swaps += 1;
      }

      this.animationArray.push(animation);
    }

    return swaps === 0 ? this.animationArray : this.bubbleSort(this.array);
  }

  swapGivenIndicesOfArray(idx1, idx2) {
    [this.array[idx1], this.array[idx2]] = [this.array[idx2], this.array[idx1]];
  }
}

export default SortBy;
