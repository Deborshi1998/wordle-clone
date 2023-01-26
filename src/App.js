import "./App.css";
import "animate.css";
import InputBox from "./components/InputBox";
import { useState } from "react";
import Keyboard from "./components/keyboard";
import { getRandomWord, isValid } from "./utils/words";
import Modal from "react-modal";
import { findKeyIndex } from "./utils/keyboardIndex";
import Timer from "./components/timer";
import ShareResult from "./components/shareResult";
import { wait } from "./utils/wait";
import {
  gameStateObject,
  customStyles,
  customStylesIntro,
} from "./utils/defaultValues";
import Intro from "./components/intro";
function App() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isModalOpenIntro, setisModalOpenIntro] = useState(true);
  const [randomWord, setRandomWord] = useState(getRandomWord());
  const [currentRow, setcurrentRow] = useState(0);
  const [currentCol, setcurrentCol] = useState(0);
  const [errorMessage, seterrorMessage] = useState("");
  const [isEnd, setisEnd] = useState(false);
  const [ansWords, setansWords] = useState(gameStateObject);
  const [isRunning, setIsRunning] = useState(false);
  const [stopTime, setstopTime] = useState("");
  const moveToNext = () => {
    if (currentCol <= 4 && currentRow <= 4) {
      const textBox = document.getElementById(
        "textbox" + currentRow + currentCol
      );
      textBox.classList.add(
        "animate__animated",
        "animate__bounceIn",
        "animate__duration-1s"
      );
      textBox.style.borderColor = "#787C7E";
      textBox.style.borderWidth = "3px";

      setcurrentCol((previousCol) => previousCol + 1);
    }
  };

  const moveBack = () => {
    if(!isRunning) return;
    if (currentCol - 1>= 0 && currentRow >= 0) {
      const textBox = document.getElementById(
        "textbox" + currentRow + parseInt(currentCol - 1)
      );
      textBox.classList.remove(
        "animate__animated",
        "animate__bounceIn",
        "animate__duration-1s"
      );
      textBox.style.borderColor = "darkgrey";
      textBox.style.borderWidth = "2px";
      setansWords((previousVal) => ({
        ...previousVal,
        [currentRow]: {
          ...previousVal[currentRow],
          [currentCol - 1]: "",
        },
      }));
      currentCol !== 0 && setcurrentCol((previousCol) => previousCol - 1);
    }
  };

  const enter = async () => {
    if (!isRunning) return;
    let userWord = "";
    Object.keys(ansWords[currentRow]).forEach((i) => {
      userWord += ansWords[currentRow][i];
    });
    if (userWord === "") {
      seterrorMessage("Empty not accepted");
      setIsModalOpen(true);
      return;
    }
    if (!isValid(userWord)) {
      document
        .getElementById("textboxRow" + currentRow)
        .classList.add("animate__animated", "animate__shakeX");
      seterrorMessage("Not a word");
      setIsModalOpen(true);
      await wait(500);
      document
        .getElementById("textboxRow" + currentRow)
        .classList.remove("animate__animated", "animate__shakeX");
      return;
    }
    if (userWord === randomWord.toUpperCase()) {
      for (let index = 0; index < 5; index++) {
        await wait(index == 0 ? 0 : 450);
        const textBox = document.getElementById("textbox" + currentRow + index);
    
        textBox.classList.add(
          "animate__animated",
          "animate__flipInX",
          "animate__slower"
        );
        textBox.style.backgroundColor = "#6AA964";
        textBox.style.color = "white";
        textBox.style.borderStyle = "none";
       
        setIsRunning(false);
      
      }
        setisEnd(true);
      return;
    } else {
      userWord = userWord.split("");
      let randomWordArray = randomWord.toUpperCase().split("");
      console.log("random word array", randomWordArray);
      for (let index = 0; index < 5; index++) {
        if (userWord[index] === randomWordArray[index]) {
          await wait(index == 0 ? 0 : 450);
          const textBox = document.getElementById(
            "textbox" + currentRow + index
          );
          textBox.classList.add(
            "animate__animated",
            "animate__flipInX",
            "animate__slower"
          );
          textBox.style.backgroundColor = "#6AA964";
          textBox.style.color = "white";
          textBox.style.borderStyle = "none";

          const [keyboardRow, keyboardCol] = findKeyIndex(userWord[index]);
          document.getElementById(
            "keyboard" + keyboardRow + keyboardCol
          ).style.backgroundColor = "#6AA964";
         
        } else {
          if (randomWordArray.includes(userWord[index])) {
            randomWordArray = randomWordArray.filter(
              (item) => item !== userWord[index]
            );
            await wait(index == 0 ? 0 : 450);
            const textBox = document.getElementById(
              "textbox" + currentRow + index
            );
            textBox.classList.add(
              "animate__animated",
              "animate__flipInX",
              "animate__slower"
            );
            textBox.style.backgroundColor = "#C9B458";
            textBox.style.color = "white";
            textBox.style.borderStyle = "none";
          
          } else {
            await wait(index == 0 ? 0 : 450);
            const textBox = document.getElementById(
              "textbox" + currentRow + index
            );
            textBox.classList.add(
              "animate__animated",
              "animate__flipInX",
              "animate__slower"
            );
            textBox.style.backgroundColor = "#787C7E";

            textBox.style.color = "white";
            textBox.style.borderStyle = "none";

            const [keyboardRow, keyboardCol] = findKeyIndex(userWord[index]);
            document.getElementById(
              "keyboard" + keyboardRow + keyboardCol
            ).style.backgroundColor = "#787C7E";
          }
        }
      }
    }

    if (currentRow === 4 && userWord !== randomWord.toUpperCase()) {
      setIsRunning(false);
      seterrorMessage(`The Correct word is ${randomWord.toUpperCase()}`);
      setIsModalOpen(true);
      return;
    }

    setcurrentRow((previousRow) => previousRow + 1);
    setcurrentCol(0);
  };
  const handleClose = () => {
   
    setIsModalOpen(false);
  };
  const handleCloseIntro = () => {
    //stop watch
    setIsRunning(true);
    setisModalOpenIntro(false);
  };

  return (
    <div className="App">
      <Modal
        isOpen={isModalOpenIntro}
        style={customStylesIntro}
        ariaHideApp={false}
        // onRequestClose={handleClose}
        className="modalIntro"
      >
        <Intro close={handleCloseIntro} />
      </Modal>
      <Modal
        isOpen={isModalOpen}
        style={customStyles}
        ariaHideApp={false}
        onRequestClose={handleClose}
        className="modal"
      >
        <p>{errorMessage}</p>
      </Modal>
      <Timer
        isRunning={isRunning}
        setIsRunning={setIsRunning}
        setstopTime={setstopTime}
      />
      <div className="game-board-component">
        <InputBox gameState={ansWords} />
      </div>
      {!isEnd && (
        <Keyboard
          id="keyboard-component"
          handleEnter={enter}
          handleBack={moveBack}
          handleNext={moveToNext}
          wordsEnter={setansWords}
          currentRowBoard={currentRow}
          currentColBoard={currentCol}
        />
      )}
      {isEnd && <ShareResult stopTime={stopTime} />}
    </div>
  );
}

export default App;
