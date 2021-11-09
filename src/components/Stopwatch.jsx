import React, { useState, useEffect } from "react";

const Stopwatch = () => {
  const [hour, setHour] = useState(0);
  const [min, setMin] = useState(0);
  const [second, setSecond] = useState(0);
  const [minisecond, setMiniSecond] = useState(0);
  const [stop, setStop] = useState(false);

  const onStart = () => {
    setStop(false);
    // setMiniSecond(minisecond + 1);
  };

  const onStop = () => {
    setStop(true);
  };

  const onReset = () => {
    setHour(0);
    setMin(0);
    setSecond(0);
    setMiniSecond(0);
  };

  useEffect(() => {
    let interval = null;

    if (!stop) {
      interval = setInterval(() => {
        if (min > 59) {
          setHour(hour + 1);
          setMin(0);
          clearInterval(interval);
        }
        if (second > 59) {
          setMin(min + 1);
          setSecond(0);
          clearInterval(interval);
        }
        if (minisecond > 999) {
          setSecond(second + 1);
          setMiniSecond(0);
          clearInterval(interval);
        }
        if (minisecond <= 999) {
          setMiniSecond(minisecond + 1);
          clearInterval(interval);
        }
      }, 40);
    } else {
      clearInterval(interval);
    }
    return () => {
      clearInterval(interval);
    };
  });

  return (
    <div style={{ textAlign: "center", marginTop: "100px", color: "blue" }}>
      <h1 style={{ color: "black" }}>STOP WATCH</h1>
      <h6 style={{ color: "red" }}>
        Hours &nbsp;&nbsp;&nbsp;:&nbsp;&nbsp;&nbsp;&nbsp; Mins &nbsp;&nbsp;:
        &nbsp;&nbsp;&nbsp;Second &nbsp;: &nbsp;MiniSecond
      </h6>
      <h1>
        {hour} &nbsp;: &nbsp;{min} &nbsp;: &nbsp;{second} &nbsp;: &nbsp;
        {minisecond}&nbsp;
      </h1>
      <button onClick={onStart}>Start</button>
      <button onClick={onStop}>Stop</button>
      <button onClick={onReset}>Reset</button>
    </div>
  );
};

export default Stopwatch;
