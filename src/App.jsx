// import { useState } from "react";
import "./index.css";
import star from "./assets/images/icon-star.svg";
import RatingNumber from "./RatingNumber";
import { useState } from "react";
import SubmitRating from "./SubmitRating";
import thankYou from "./assets/images/illustration-thank-you.svg";

function App() {
  const [selectedButton, selectedButtonChange] = useState();
  const [ratingState, changeRatingState] = useState(false);

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
        className={`bg-dark-fade max-w-80 max-h-96  ${!ratingState ? "p-6" : "max-w-110 max-h-110 p-10"} font-[Overpass] rounded-2xl flex flex-col items-center justify-center gap-6 `}
      >
        {!ratingState ? (
          <>
            <div
              className={`bg-(--grey950) flex items-center justify-center rounded-full self-start  w-10 h-10`}
            >
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
            <SubmitRating
              onSubmitClick={() =>
                changeRatingState(selectedButton ? true : false)
              }
            ></SubmitRating>
          </>
        ) : (
          <>
            <img src={thankYou} alt="" />
            <div className="thankYouMsg text-base text-(--orange500) p-2 px-5 bg-(--grey900) rounded-full ">
              You selected {selectedButton} out of 5
            </div>
            <h3 className="text-white font-bold text-3xl">Thank you!</h3>
            <p className="text-center text-(--grey500)">
              We appreciate you taking the time to give a rating. If you ever
              need more support, don't hesitate to get in touch!
            </p>
          </>
        )}
      </div>
    </>
  );
}

export default App;
