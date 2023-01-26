import React from "react";
import { letters } from "../utils/keys";
import "../styles/keyboardStyles.css";
function Keyboard({
  handleEnter,
  handleBack,
  handleNext,
  wordsEnter,
  currentRowBoard,
  currentColBoard,
}) {
  const handleWordsEnter = (e, rowIndex, colIndex) => {
    e.preventDefault();
    if (currentColBoard <= 4) {
      wordsEnter((previousVal) => ({
        ...previousVal,
        [currentRowBoard]: {
          ...previousVal[currentRowBoard],
          [currentColBoard]: letters[rowIndex][colIndex],
        },
      }));
      handleNext();  //Moves to the next column
    }
  };
  return (
    <div className="keyboard">
      <div className="words-row">
        {Object.keys(letters[0]).map((index) => {
          return (
            <button
              key={"topRow" + index}
              onClick={(e) => handleWordsEnter(e, 0, index)}
              className="word-keys"
              id={"keyboard" + "0" + index}
            >
              {letters[0][index]}
            </button>
          );
        })}
      </div>
      <div className="middle-row">
        <div className="words-row">
          {Object.keys(letters[1]).map((index) => {
            return (
              <button
                id={"keyboard" + "1" + index}
                key={"middleRow" + index}
                onClick={(e) => handleWordsEnter(e, 1, index)}
                className="word-keys"
              >
                {letters[1][index]}
              </button>
            );
          })}
        </div>
      </div>
      <div className="words-row">
        <button onClick={handleEnter} className="word-keys">
          Enter
        </button>
        {Object.keys(letters[2]).map((index) => {
          return (
            <button
              id={"keyboard" + "2" + index}
              key={"bottomRow" + index}
              onClick={(e) => handleWordsEnter(e, 2, index)}
              className="word-keys"
            >
              {letters[2][index]}
            </button>
          );
        })}
        <button onClick={handleBack} className="word-keys">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            height="24"
            viewBox="0 0 24 24"
            width="24"
            data-testid="icon-backspace"
          >
            <path
              fill="var(--color-tone-1)"
              d="M22 3H7c-.69 0-1.23.35-1.59.88L0 12l5.41 8.11c.36.53.9.89 1.59.89h15c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm0 16H7.07L2.4 12l4.66-7H22v14zm-11.59-2L14 13.41 17.59 17 19 15.59 15.41 12 19 8.41 17.59 7 14 10.59 10.41 7 9 8.41 12.59 12 9 15.59z"
            ></path>
          </svg>
        </button>
      </div>
    </div>
  );
}

export default Keyboard;
