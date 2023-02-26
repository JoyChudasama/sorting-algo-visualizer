# Sorting Algorithm Visualizer 
- This project helps visualizing various sorting algorithms.

## Algorithms Covered In This Project
1. [Bubble Sort](https://github.com/JoyChudasama/sorting-algo-visualizer/blob/main/src/algorithms/bubbleSort.js)
2. [Selection Sort](https://github.com/JoyChudasama/sorting-algo-visualizer/blob/main/src/algorithms/SelectionSort.js)
3. Insertion Sort (Upcoming)
4. [Quick Sort](https://github.com/JoyChudasama/sorting-algo-visualizer/blob/main/src/algorithms/quickSort.js)
5. Merge Sort (Upcoming)
6. Heap Sort (Upcoming)

## Steps To Start Visualizing 
1. Clone this repository `https://github.com/JoyChudasama/sorting-algo-visualizer`
2. `cd` into the folder `sorting-algo-visualizer`
3. Use `npm i` or `yarn install` to install dependencies
4. `npm run dev` command will start up the server locally
5. Visit the `localhost`
6. `Generate Array` button will generate an array of length 100 with random values and then select desired algorithm to start visualizing


## Time & Space Complexity

| Algorithm  | Best Time | Avg. Time | Worst Time | Avg. Space | Worst Space |
| :------------- |:-------------:|:-------------:|:-------------:|:-------------:|:-------------:|
| Bubble Sort | O(n) | O(n^2) | O(n^2) | O(1) | O(1) |
| Selection Sort | O(n^2) | O(n^2) | O(n^2) | O(1) | O(1) |
| Insertion Sort | O(n) | O(n^2) | O(n^2) | O(1) | O(1) |
| Quick Sort | O(n*log(n)) | O(n*log(n)) | O(n^2) | O(log(n)) | O(log(n)) |
| Merge Sort | O(n*log(n)) | O(n*log(n)) | O(n*log(n)) | O(n) | O(n) |
| Heap Sort| O(n*log(n)) | O(n*log(n)) | O(n*log(n)) | O(1) | O(1) |