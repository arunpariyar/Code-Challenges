import React from "react";
import { range } from "../../utils";
import { checkGuess } from "../../game-helpers";

//CREATING A COMPONENT WITH THE FILE
// NOT WIDELY ACCEPTED IN THE COMMUNITY BUT GETTING TRACTION IN FUNCTIONAL PROGRAMMING
// THE COMPONENT MUST ONLY BE USED HERE AND NOT EXPORTED AT ALL.
function Cell({ result, index }) {
  return (
    <span className={result ? result[index].status + " cell" : "cell"}>
      {result ? result[index].letter : undefined}
    </span>
  );
}

function Guess({ guess, answer }) {
  //result is either null or an object
  const result = checkGuess(guess, answer);

  return (
    <>
      {range(5).map((index) => (
        <Cell key={index} result={result} index={index}></Cell>
      ))}
    </>
  );
}

export default Guess;
