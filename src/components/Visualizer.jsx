import { useEffect, useState } from 'react';
import '../assets/App.scss';
import { getArrayOfRandomValues } from '../helper/arrayHelper';
import BubbleSort from '../algorithms/BubbleSort';
import quickSort from '../algorithms/QuickSort';

function Visualizer() {
	const [array, setArray] = useState([]);

	useEffect(() => {
		regenerateArray();
	}, []);

	const regenerateArray = () => {
		setArray(getArrayOfRandomValues());
	};

	const initializeBubbleSort = () => {
		const arrayBars = document.getElementsByClassName('array-bar');
		const bubbleSort = new BubbleSort(array, arrayBars);

		bubbleSort.sort();
		bubbleSort.applyBubbleSort();
	};

	const initializeQuickSort = () => {
		console.log(array);
		const animations = quickSort(array);
		console.log(animations);
		const arrayBars = document.getElementsByClassName('array-bar');

		applyQuickSort(animations, arrayBars);
	};

	const applyQuickSort = (animations, arrayBars) => {};

	return (
		<>
			<div className="navnar ">
				<button className="btn btn-primary m-3" onClick={regenerateArray}>
					Generate Array
				</button>
				<button className="btn btn-primary m-3" onClick={initializeBubbleSort}>
					Bubble Sort
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
