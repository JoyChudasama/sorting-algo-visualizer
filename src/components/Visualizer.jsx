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

      setTimeout(() => {
        
        comparingBar1.classList.add(`compared`);
        comparingBar2.classList.add(`compared`);

        comparingBar1.classList.add(`done`);
        comparingBar2.classList.add(`done`);

        setTimeout(() => {
          // swappingBar1 && comparingBar1.classList.remove(`compared`);
          // swappingBar1 && comparingBar2.classList.remove(`compared`);

          swappingBar1 && swappingBar1.classList.add(`swapped`);
          swappingBar1 && swappingBar2.classList.add(`swapped`);
         
          swappingBar1 && swappingBar1.classList.add(`done`);
          swappingBar1 && swappingBar2.classList.add(`done`);

          swappingBar1 &&
            ([swappingBar2.style.height, swappingBar1.style.height] = [
              swappingBar1.style.height,
              swappingBar2.style.height,
            ]);
        }, i*500);

        swappingBar1 && swappingBar1.classList.remove(`swapped`);
        swappingBar1 && swappingBar2.classList.remove(`swapped`);

        comparingBar1.classList.remove(`compared`);
        comparingBar2.classList.remove(`compared`);
        comparingBar1.classList.remove(`done`);
        comparingBar2.classList.remove(`done`);
      }, i*500);
      
      // swappingBar1 && comparingBar1.classList.add(`done`);
      // swappingBar1 && comparingBar2.classList.add(`done`);

      swappingBar1 && swappingBar1.classList.remove(`done`);
      swappingBar1 && swappingBar2.classList.remove(`done`);
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
