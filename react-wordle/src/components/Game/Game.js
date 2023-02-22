import React from "react";

import { sample } from "../../utils";
import { WORDS } from "../../data";

import { NUM_OF_GUESSES_ALLOWED } from "../../constants.js";

import Input from "../Input";
import GuessResults from "../GuessResults";
import HappyBanner from "../HappyBanner";
import SadBanner from "../SadBanner";

// Pick a random word on every pageload.
const answer = sample(WORDS);
// To make debugging easier, we'll log the solution in the console.
console.info({ answer });
console.info({ NUM_OF_GUESSES_ALLOWED });

function Game() {
  const [guessList, setGuessList] = React.useState([]);
  const [status, setStatus] = React.useState("running");
  const [counter, setCounter] = React.useState(0);
  const [gameOver, setGameOver] = React.useState(false);

  function handleInput(guess) {
    //keep track of the counter if less than six then allow adding
    const nextCounter = counter + 1;
    setCounter(nextCounter);

    // check if won else continue on
    if (guess === answer) {
      setStatus("win");
      //logic to disable button
      setGameOver(true);
    }

    // check if counter is above and set to lose
    if (counter === NUM_OF_GUESSES_ALLOWED - 1) {
      setStatus("lose");
      setGameOver(true);
    }

    const nextGuessList = [...guessList, guess];
    setGuessList(nextGuessList);
  }

  return (
    <>
      <GuessResults answer={answer} guessList={guessList}></GuessResults>
      <Input
        handleInput={handleInput}
        status={status}
        gameOver={gameOver}
      ></Input>
      {status === "win" && <HappyBanner counter={counter}></HappyBanner>}
      {status === "lose" && <SadBanner answer={answer}></SadBanner>}
    </>
  );
}

export default Game;
