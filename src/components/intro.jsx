import React, {useState,useEffect} from 'react'

function Intro({ close }) {
  const [gameStateIntro, setgameStateIntro] = useState({
    0: {
      0: "W",
      1: "E",
      2: "A",
      3: "R",
      4: "Y",
    },
    1: {
      0: "P",
      1: "I",
      2: "L",
      3: "L",
      4: "S",
    },
    2: {
      0: "V",
      1: "A",
      2: "G",
      3: "U",
      4: "E",
    },
  });
  useEffect(() => {
      document.getElementById("textboxIntro00").style.backgroundColor = "#6AA964";
      document.getElementById("textboxIntro00").style.color = "white";
      document.getElementById("textboxIntro00").style.borderStyle = "none";
      document.getElementById("textboxIntro11").style.backgroundColor = "#C9B458";
      document.getElementById("textboxIntro11").style.color = "white";
      document.getElementById("textboxIntro11").style.borderStyle = "none";
      document.getElementById("textboxIntro23").style.backgroundColor = "#787C7E";
      document.getElementById("textboxIntro23").style.color = "white";
      document.getElementById("textboxIntro23").style.borderStyle = "none";
  }, [])
  


  return (
    <div>
      <h2>How to Play</h2>
      <p>Guess the Wordle in 5 tries</p>
      <ul>
        <li>Each guess must be a valid 5-letter word.</li>
        <li>
          The colour of the tile will change to show how close your guess was to
          the word.
        </li>
      </ul>
      <h3>Examples</h3>

      <div className="game-row-intro" key={"gameRowIntro00"}>
        {Object.keys(gameStateIntro[0]).map((value, col) => {
          return (
            <div
              id={"textboxIntro" + "0" + col}
              className="game-column-intro"
              key={"textboxIntro" + col}
            >
              {gameStateIntro[0][col]}
            </div>
          );
        })}
      </div>
      <span>
        {" "}
        <b>W</b> is the word and in the correct spot.
      </span>
      <div className="game-row-intro" key={"gameRowIntro01"}>
        {Object.keys(gameStateIntro[1]).map((value, col) => {
          return (
            <div
              id={"textboxIntro" + "1" + col}
              className="game-column-intro"
              key={"textboxIntro" + col}
            >
              {gameStateIntro[1][col]}
            </div>
          );
        })}
      </div>

      <span>
        {" "}
        <b>I</b> is in the word but in the wrong spot.
      </span>

      <div className="game-row-intro" key={"gameRowIntro02"}>
        {Object.keys(gameStateIntro[2]).map((value, col) => {
          return (
            <div
              id={"textboxIntro" + "2" + col}
              className="game-column-intro"
              key={"textboxIntro" + col}
            >
              {gameStateIntro[2][col]}
            </div>
          );
        })}
      </div>
      <span>
        {" "}
        <b>U</b> is not in the word in any wrong spot.
      </span>

      <button onClick={close} className="button-74" role="button">
        Start
      </button>
    </div>
  );
}



export default Intro