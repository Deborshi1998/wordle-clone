import React, { useState, useEffect } from "react";
import '../styles/timer.css'
const Timer = ({ isRunning, setIsRunning, setstopTime }) => {
  const [minutes, setMinutes] = useState(0);
  const [seconds, setSeconds] = useState(0);
  const [milliseconds, setMilliseconds] = useState(0);

  useEffect(() => {
    let interval;
    if (isRunning) {
      interval = setInterval(() => {
        setMilliseconds((ms) => ms + 10);
        if (milliseconds >= 999) {
          setMilliseconds(0);
          setSeconds((sec) => sec + 1);
        }
        if (seconds >= 59) {
          setSeconds(0);
          setMinutes((min) => min + 1);
        }
      }, 10);
    } else if (
      !isRunning &&
      (minutes !== 0 || seconds !== 0 || milliseconds !== 0)
    ) {
      setstopTime(
        `${("0" + minutes).slice(-2)}:${("0" + (seconds % 60)).slice(-2)}:${(
          "00" + milliseconds
        ).slice(-3)}`
      );
      clearInterval(interval);
    }
    return () => clearInterval(interval);
  }, [isRunning, minutes, seconds, milliseconds]);

  return (
    <div className="timer-component">
      <div className="stopwatch">
        <span>
          {`Time: ${("0" + minutes).slice(-2)}:${("0" + (seconds % 60)).slice(
            -2
          )}:${("00" + milliseconds).slice(-3)}`}
        </span>
      </div>
      {/* <button onClick={handleStart}>Start</button>
      <button onClick={handleStop}>Stop</button> */}
    </div>
  );
};

export default Timer;
