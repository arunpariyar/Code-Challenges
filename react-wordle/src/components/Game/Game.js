import React from "react";

import { sample } from "../../utils";
import { WORDS } from "../../data";

import Input from "../Input";
import GuessResults from "../GuessResults/GuessResults";

// Pick a random word on every pageload.
const answer = sample(WORDS);
// To make debugging easier, we'll log the solution in the console.
console.info({ answer });

function Game() {
  const [guessList, setGuessList] = React.useState([]);

  function handleInput(guess) {
    const nextGuessList = [...guessList, guess];
    setGuessList(nextGuessList);
  }
  return (
    <>
      <GuessResults answer={answer} guessList={guessList}></GuessResults>
      <Input handleInput={handleInput}></Input>
    </>
  );
}

export default Game;
