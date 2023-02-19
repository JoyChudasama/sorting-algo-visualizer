import { useEffect, useState } from "react";
import "../assets/App.scss";
import SortBy from "../helper/SortBy";
import { getArrayOfRandomValues } from "../helper/arrayHelper";

function Visualizer() {
  const [array, setArray] = useState([]);
  const sortBy = new SortBy(array);

  useEffect(() => {
    regenerateArray();
  }, []);

  const regenerateArray = () => {
    setArray(getArrayOfRandomValues());
  };

  const initializeBubbleSort = () => {
    const animations = sortBy.bubbleSort();
    const arrayBars = document.getElementsByClassName("array-bar");

    applyBubbleSort(animations, arrayBars);
  };

  const applyBubbleSort = (animations, arrayBars) => {
    for (let i = 0; i < animations.length; i++) {
      const { comparing, swapping } = animations[i];

      const comparingBar1 = arrayBars[comparing[0]];
      const comparingBar2 = arrayBars[comparing[1]];
      const swappingBar1 = swapping ? arrayBars[swapping[0]] : null;
      const swappingBar2 = swapping ? arrayBars[swapping[1]] : null;
      const colorClass = swappingBar1 ? "swapping" : "did-not-swap";

      setTimeout(() => {
        comparingBar1 && comparingBar1.classList.add(`${colorClass}`);
        comparingBar2 && comparingBar2.classList.add(`${colorClass}`);

        setTimeout(() => {
          swappingBar1 &&
            ([swappingBar2.style.height, swappingBar1.style.height] = [
              swappingBar1.style.height,
              swappingBar2.style.height,
            ]);

          comparingBar1 &&
            comparingBar1.classList.remove("did-not-swap", "swapping");
          comparingBar2 &&
            comparingBar2.classList.remove("did-not-swap", "swapping");
        }, i * (-5));
      }, i * 10);
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
