import React, { useState } from "react";

let timer;

const TimerChallenge = ({ title, targetTime }) => {
  const [timeExpired, setTimeExpired] = useState(false);
  const [timeStarted, setTimeStarted] = useState(false);

  const handelStartChallenge = () => {
    timer = setTimeout(() => {
      setTimeExpired((timeExpired) => !timeExpired);
    }, targetTime * 1000);
    setTimeStarted((timeStarted) => !timeStarted);
  };

  const handelStop = () => {
    clearTimeout(timer);
  };
  return (
    <section className="challenge">
      <h2>{title}</h2>
      {timeExpired && <p>you lost</p>}
      <p className="challenge-time">
        {targetTime} second {targetTime > 1 ? "s" : ""}
      </p>
      <p>
        <button onClick={timeStarted ? handelStop : handelStartChallenge}>
          {!timeStarted ? "start" : "stop"} challenge
        </button>
      </p>
      <p className="">{timeStarted ? "time is runnuing" : "timer inactive"}</p>
    </section>
  );
};

export default TimerChallenge;
