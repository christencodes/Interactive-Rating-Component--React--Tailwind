// import { useState } from "react";
import "./index.css";
import star from "./assets/images/icon-star.svg";
import RatingNumber from "./RatingNumber";
import { useState } from "react";

function App() {
  const [selectedButton, selectedButtonChange] = useState();

  function displayElement(num, Element) {
    const arr = [];
    for (let i = 0; i < num; i++) {
      arr.push(
        <Element
          selectedNumber={selectedButton}
          number={i + 1}
          buttonSelected={() => selectedButtonChange(i + 1)}
          key={i}
        />,
      );
    }
    return arr;
  }

  return (
    <>
      <div
        id="rating-container"
        className="bg-dark-fade max-w-80 max-h-96 p-6 font-[Overpass] rounded-2xl flex flex-col items-center justify-center gap-6"
      >
        <div className="bg-(--grey900) w-10 h-10 flex items-center justify-center rounded-full self-start">
          <img src={star} alt="" />
        </div>
        <div className="wording flex flex-col gap-4 ">
          <h2 className="font-bold text-2xl leading-7 text-(--alabaster-white)">
            How did we do?
          </h2>
          <p className="text-(--grey500) font-normal text-sm leading-5.5">
            Please let us know how we did with your support request. All
            feedback is appreciated to help us improve our ofering!
          </p>
        </div>
        {/* Create Component for Ratings */}
        <div className="ratings flex gap-4">
          {displayElement(5, RatingNumber)}

          {/* This is the better way :  {[1, 2, 3, 4, 5].map((item) => (
            <RatingNumber key={item} number={item} />
          ))} */}
        </div>

        {/* Create Component for Submit */}
      </div>
    </>
  );
}

export default App;
