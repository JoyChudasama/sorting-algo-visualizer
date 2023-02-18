import { useEffect, useState } from "react";
import "../assets/App.scss";
import SortBy from "../helper/SortBy";

function Visualizer() {
  const [array, setArray] = useState([]);
  const sortBy = new SortBy(array);

  useEffect(() => {
    regenerateArray();
  }, []);

  const regenerateArray = () => {
    const tempArray = [];

    for (let i = 0; i < 450; i++) {
      tempArray.push(getRandomNumber(50, 700));
    }

    setArray(tempArray);
  };

  const getRandomNumber = (min, max) => {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  };

  const initializeBubbleSort = () => {
    const animations = sortBy.bubbleSort();
  };

  return (
    <>
      <div className="navnar ">
        <button className="btn btn-primary m-3" onClick={regenerateArray}>
          Generate Array
        </button>
        <button className="btn btn-primary" onClick={initializeBubbleSort}>
          Bubble Sort
        </button>
      </div>
      <div className="wrapper">
        <div className="array-container">
          {array &&
            array.map((num, i) => (
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
