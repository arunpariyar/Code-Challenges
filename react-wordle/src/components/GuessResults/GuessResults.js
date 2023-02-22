import React from "react";
import Guess from "../Guess";

import { NUM_OF_GUESSES_ALLOWED } from "../../constants";
import { range } from "../../utils";

function GuessResults({ guessList, answer }) {
  return (
    <div className="guess-results">
      {range(NUM_OF_GUESSES_ALLOWED).map((index) => (
        <p key={index} className="guess">
          <Guess answer={answer} key={index} guess={guessList[index]}></Guess>
        </p>
      ))}
    </div>
  );
}

export default GuessResults;
