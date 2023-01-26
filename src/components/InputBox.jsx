import React from "react";

import "../styles/wordBoxStyles.css";
function InputBox({ gameState }) {
  return (
    <div className="game-board">
      {Object.keys(gameState).map((value, row) => {
        return (
          <div
            id={"textboxRow" + row}
            className="game-row"
            key={"gameRow" + row}
          >
            {Object.keys(gameState[row]).map((value, col) => {
              return (
                <div
                  id={"textbox" + row + col}
                  className="game-column"
                  key={"textbox" + row + col}
                >
                  {gameState[row][col]}
                </div>
              );
            })}
          </div>
        );
      })}
    </div>
  );
}

export default InputBox;
