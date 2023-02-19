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

    for (let i = 0; i < 100; i++) {
      tempArray.push(getRandomNumber(100, 700));
    }

    setArray(tempArray);
  };

  const getRandomNumber = (min, max) => {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  };

  const initializeBubbleSort = () => {
    const animations = sortBy.bubbleSort();
    const arrayBars = document.getElementsByClassName("array-bar");

    for (let i = 0; i < animations.length; i++) {
      const { comparing, swapping } = animations[i];

      let comparingBar1 = arrayBars[comparing[0]];
      let comparingBar2 = arrayBars[comparing[1]];
      let swappingBar1 = swapping ? arrayBars[swapping[0]] : null;
      let swappingBar2 = swapping ? arrayBars[swapping[1]] : null;
      const colorClass = swappingBar1 ? "swapping" : "did-not-swap";

      setTimeout(() => {
        comparingBar1.classList.add(`${colorClass}`);
        comparingBar2.classList.add(`${colorClass}`);

        setTimeout(() => {
          swappingBar1 &&
            ([swappingBar2.style.height, swappingBar1.style.height] = [
              swappingBar1.style.height,
              swappingBar2.style.height,
            ]);

          comparingBar1.classList.remove("did-not-swap", "swapping");
          comparingBar2.classList.remove("did-not-swap", "swapping");
        }, i);
      }, i *100);
    }
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
          {
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
