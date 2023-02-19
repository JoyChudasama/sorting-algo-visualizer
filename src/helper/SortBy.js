class SortBy {
  constructor(array) {
    this.array = array;
    this.animationArray = new Array();
  }

  bubbleSort() {
    let isSorted = false;
    let counter = 0;

    while (!isSorted) {
      isSorted = true;

      for (let i = 0; i < this.array.length - 1 - counter; i++) {
        const animation = {};
        animation.comparing = [i, i + 1];

        //Using less than because of array-container is rotated 180deg
        if (this.array[i] < this.array[i + 1]) {
            animation.swapping = [i, i + 1];
          this.swapGivenIndicesOfArray(i, i + 1);
          isSorted = false;
        }

        this.animationArray.push(animation);
      }

      counter += 1;
    }

    return this.animationArray;
  }

  swapGivenIndicesOfArray(idx1, idx2) {
    [this.array[idx1], this.array[idx2]] = [this.array[idx2], this.array[idx1]];
  }
}

export default SortBy;
