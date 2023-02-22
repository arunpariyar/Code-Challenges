import React from "react";

function Input({ handleInput }) {
  const [guess, setGuess] = React.useState("");

  function handleSubmit(event) {
    event.preventDefault();
    handleInput(guess.toUpperCase());
    setGuess("");
  }
  return (
    <form
      className="guess-input-wrapper"
      onSubmit={(event) => handleSubmit(event)}
    >
      <label htmlFor="guess-input"> Enter guess: </label>
      <input
        id="guess-input"
        type="text"
        pattern="[A-Za-z]{5}"
        value={guess}
        title="5 letter word"
        onChange={(event) => setGuess(event.target.value)}
      ></input>
    </form>
  );
}

export default Input;
