import { useEffect, useState } from "react";
import '../assets/App.scss';

function Visualizer() {
  const [array, setArray] = useState([]);

  useEffect(() => {
    resetArray();
  }, []);

  const resetArray = () => {
    const tempArray = [];

    for (let i = 0; i < 450; i++) {
      tempArray.push(getRandomNumber(45, 700));
    }

    setArray(tempArray);
  };

  const getRandomNumber = (min, max) => {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  };

  const bubbleSort = () => {
    console.log('BUBBLE SORT')
  };

  return (
    <>
      <div className="navnar ">
        <button className="btn btn-primary m-3"  onClick={resetArray}>
          Generate Array
        </button>
        <button className="btn btn-primary" onClick={bubbleSort}>
          Bubble Sort
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
