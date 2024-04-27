import { useRef, useState } from "react";

export default function Player() {
  const playerName = useRef();
  const [input, setInput] = useState('')
  const [submitted, setSubmitted] = useState(false);

  const handelClick = () => {
    setSubmitted((submitted) => !submitted)
    playerName.current.value = "";
  }
  return (
    <section id="player">
      <h2>
        {input.length > 0 ? "welcome" : null}{" "}
        {submitted && input.length > 0 ? input : "unknown"}
      </h2>
      <p>
        <input
          ref={playerName}
          type="text"
          onChange={(e) => setInput(e.target.value)}
        />
        <button onClick={handelClick}>Set Name</button>
      </p>
    </section>
  );
}
