export const gameStateObject = {
  0: {
    0: "",
    1: "",
    2: "",
    3: "",
    4: "",
  },
  1: {
    0: "",
    1: "",
    2: "",
    3: "",
    4: "",
  },
  2: {
    0: "",
    1: "",
    2: "",
    3: "",
    4: "",
  },
  3: {
    0: "",
    1: "",
    2: "",
    3: "",
    4: "",
  },
  4: {
    0: "",
    1: "",
    2: "",
    3: "",
    4: "",
  },
};

export const createFinalResultText = (timeTaken) => {
  let outputArray = [];
  let inputBoard = document.getElementsByClassName("game-row");
  for (let indexX = 0; indexX < 5; indexX++) {
    let outputRow = [];
    for (let indexY = 0; indexY < 5; indexY++) {
      if (inputBoard[indexX].childNodes[indexY].style.backgroundColor==="") break;
        if (
          inputBoard[indexX].childNodes[indexY].style.backgroundColor ===
          "rgb(120, 124, 126)"
        ) {
          outputRow.push("🟫");
        }
      if (
        inputBoard[indexX].childNodes[indexY].style.backgroundColor ===
        "rgb(201, 180, 88)"
      ) {
        outputRow.push("🟨");
      }
      if (
        inputBoard[indexX].childNodes[indexY].style.backgroundColor ===
        "rgb(106, 169, 100)"
      ) {
        outputRow.push("🟩");
      }
    }
    outputArray.push(outputRow);
  }

  const filteredArray = outputArray.filter((subArray) => subArray.length > 0);
  let tryCounts = filteredArray.length;
  let finalText = "Wordle\n";
  for (let indexX = 0; indexX < tryCounts; indexX++) {
    let line = "";
    for (let indexY = 0; indexY < filteredArray[indexX].length; indexY++) {
      line += filteredArray[indexX][indexY];
    }
    line += "\n";
    finalText += line;
  }
  finalText += `${tryCounts}/5 \n`;
  finalText += `Time: ${timeTaken}`;
  return finalText;
};

export const customStyles = {
  content: {
    // top: "20%",
    // left: "45%",
    // right: "auto",
    // bottom: "auto",
    // marginRight: "-50%",
    // transform: "translate(-20%, -50%)",
  },
};
export const customStylesIntro = {
  content: {
    // right: "auto",
    // bottom: "auto",
    // marginRight: "-50%",
    // transform: "translate(-50%, -50%)",
  },
};
