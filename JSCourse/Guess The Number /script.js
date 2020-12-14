'use strict';
console.log('Guess the Number');

//generate a random number between 1 and 20
const randomNumber = Math.floor(Math.random() * 20);

//enter a number
const userInput = 15;

//maintain score
let highestScore = 0;

//check if the number is greater than less than to show the respective messages
if (userInput > randomNumber) {
  console.log('Higher');
} else if (userInput < randomNumber) {
  console.log('Lower');
} else {
  console.log('You guessed it right');
  highestScore += 10;
  console.log(`🏆 congratulations your have scored ${highestScore}`);
}
//if the guessed number is equal to random number show winner and give ten points to the score.
