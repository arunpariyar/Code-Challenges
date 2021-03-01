'use strict';

//get all the moving parts
//userinput
const userInputLabel = document.querySelector('.userInput');
//score
const scoreLabel = document.querySelector('.scoreLabel');
//gameMessage
const gameMessage = document.querySelector('.gameMessage');
//submitButton
const submitButton = document.querySelector('.submit');
//reset button
const resetButton = document.querySelector('.reset');
// High Score Label
const highScoreLabel = document.querySelector('.highScore');

//Setting up the necessary variables
let highScore = 0;
let score = 20;

//setting up the reset function
const reset = function () {
  console.log('Reset Clicked');
  // change the score to 20 again and render the textContent of scoreLabel
  score = 20;
  printScore();
  // change the text to lets start
  gameMessage.textContent = "Reset! Let's start again";
  //remove the value from the userInputLabel Box
  userInputLabel.value = '';
  highScoreLabel.textContent = 0;
  //Alternating the colors
  document.querySelector('body').style.backgroundColor = 'white';
  document.querySelector('body').style.color = 'black';
};

const reduceScore = function () {
  //reduce the score by one and display on screen
  score--;
  printScore();
};

const printScore = function () {
  scoreLabel.textContent = score;
};

const gameDisplay = function (message) {
  gameMessage.textContent = message;
};

//get the userinput
submitButton.addEventListener('click', function () {
  //creating the random number
  let randomNumber = Math.trunc(Math.random() * 20) + 1;
  //taking in the userinput and setting the type to Number
  let userInput = Number(userInputLabel.value);
  //check to make sure that the input is not zero
  if (!userInput) {
    //printing enter userinput again
    alert('Please check and enter the number again');
  } else if (userInput === randomNumber && score > 1) {
    //changing the styles of page.
    document.querySelector('body').style.backgroundColor = 'black';
    document.querySelector('body').style.color = '#fff';

    //changing the text content
    gameDisplay('💪 Super you got the number');

    //HIGHSCORE Feature
    //when we win the high score will be the score at which we won and in the next round the highscore will only change if win whe the score is higher than the highscore.
    if (highScore < score) {
      //setting the highscore to the current score
      highScore = score;
      highScoreLabel.textContent = highScore;
      //resetting our score
      score = Number(scoreLabel.textContent);
      printScore();
    } else {
      //setting the score to default 20
      score = 20;
      printScore();
    }
  } else if (userInput !== randomNumber && score > 1) {
    //printing the number is too high
    gameDisplay(
      userInput > randomNumber
        ? '📈 Number is a bit too high'
        : '📉 Number is a bit too low'
    );
    //reduce the score by one and display on screen
    reduceScore();
  } else {
    //in case the score is less than one setting the score to 0 and displaying gameover
    score = 0;
    printScore();
    gameDisplay('🧨 Game Over ');
  }
});

////when reset button in clicked
resetButton.addEventListener('click', reset);
