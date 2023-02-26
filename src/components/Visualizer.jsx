import { useEffect, useState } from 'react';
import '../assets/App.scss';
import { getArrayOfRandomValues } from '../helper/arrayHelper';
import BubbleSort from '../algorithms/BubbleSort';
import QuickSort from '../algorithms/QuickSort';
import SelectionSort from '../algorithms/SelectionSort';
import InsertionSort from '../algorithms/InsertionSort';

function Visualizer() {
	const [array, setArray] = useState([]);
	const [arrayBars, setArrayBars] = useState([]);

	useEffect(() => {
		regenerateArray();
	}, []);

	const regenerateArray = () => {
		setArray(getArrayOfRandomValues());

		const arrayBars = document.getElementsByClassName('array-bar');
		setArrayBars(arrayBars);
	};

	const initializeBubbleSort = () => {
		const bubbleSort = new BubbleSort(array, arrayBars);
		bubbleSort.sortBars();
	};

	const initializeQuickSort = () => {
		const quickSort = new QuickSort(array, arrayBars);
		quickSort.sortBars();
	};

	const initializeSelectionSort = () => {
		const selectionSort = new SelectionSort(array, arrayBars);
		selectionSort.sortBars();
	};

	const initializeInsertionSort = () => {
		const insertionSort = new InsertionSort(array, arrayBars);
		insertionSort.sortBars();
	};

	return (
		<>
			<div className="navnar ">
				<button className="btn btn-primary m-3" onClick={regenerateArray}>
					Generate Array
				</button>
				<button className="btn btn-primary m-3" onClick={initializeBubbleSort}>
					Bubble Sort
				</button>
				<button className="btn btn-primary m-3" onClick={initializeSelectionSort}>
					Selection Sort
				</button>
				<button className="btn btn-primary m-3" onClick={initializeInsertionSort}>
					Insertion Sort
				</button>
				<button className="btn btn-primary m-3" onClick={initializeQuickSort}>
					Quick Sort
				</button>
			</div>

			<div className="wrapper">
				<div className="array-container">
					{array.map((num, i) => (
						<div
							className="array-bar"
							key={i}
							style={{ height: `${num}px` }}
						></div>
					))}
				</div>
			</div>
		</>
	);
}

export default Visualizer;
