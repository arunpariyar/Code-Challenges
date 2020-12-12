// Remember, we're gonna use strict mode in all scripts now!
'use strict';
console.log('Woring with Strings');

/* const checkMiddleSeat = function (seat) {
  seat.slice(-1) === 'B' || seat.slice(-1) === 'E'
    ? console.log(' 😁 Hurray you have a middle seat')
    : console.log('Not a middle seat 😞');
};

checkMiddleSeat('11B');
checkMiddleSeat('23C');
checkMiddleSeat('3E'); */

/* const userInput = 'Arun Pariyar, 123416';

//The way that javascript allows for methods to work on string every though they are primitives is by converting the string into an object when a method is called upon them. As shown below.
console.log(new String(userInput));

//indexof - p
console.log(userInput.indexOf('P'));

//lastindexof
console.log(userInput.lastIndexOf('r'));

//slice
console.log(userInput.slice(5, 12));

//slice first character
console.log(userInput.slice(0, 1));

//slice just the last character
console.log(userInput.slice(-1));

//slice first and last character
console.log(userInput.slice(0, -2)); */

/* const musketeers = ['Athos', 'Porthis', 'Aramis'];

for (let i = 0; i < musketeers.length; i++) {
  console.log(musketeers[i]);
}

musketeers.push("D'Artagan");
musketeers.forEach(musketeer => {
  console.log(musketeer);
});

musketeers.splice(musketeers.indexOf('Aramis'), 0);

for (const musketeer of musketeers) {
  console.log(musketeer);
} */

/* //SUM OF VALUES

const values = [3, 11, 7, 2, 9, 10];
let totalSum = 0;

//using for loop
for (let i = 0; i < values.length; i++) {
  totalSum += values[i];
}

//using arrow function in forEach
values.forEach(value => (totalSum += value));

//using the for of loop
for (const value of values) {
  totalSum += value;
}

console.log(totalSum); */

/* //Array Maximum
const values = [3, 11, 7, 2, 9, 10];
let maxValue = 0;

for (const value of values) {
  if (maxValue < value) {
    maxValue = value;
  }
}

console.log(maxValue); */

//LIST OF WORDS
/* 
let userInput = prompt('Please, enter a value');
let pastEntries = [];

while (userInput !== 'stop') {
  pastEntries.push(userInput);
  userInput = prompt('Please, enter a value');
}

for (let i = 0; i < pastEntries.length - 1; i++) {
  console.log(pastEntries[i]);
} */

//WORD INFO
// console.log(userInput.length);
// console.log(userInput.toLowerCase());
// console.log(userInput.toUpperCase());

/* //vowel count
for (let i = 0; i <= userInput.length; i++) {
  switch (userInput[i]) {
    case 'a':
    case 'A':
    case 'e':
    case 'E':
    case 'i':
    case 'I':
    case 'o':
    case 'O':
    case 'u':
    case 'U':
      console.log(userInput[i])
      break;
  }
} */

/* const userInput = 'ababa';
let reverseInput = '';

//conver the input into an array easier to loop
const userInputArray = Array.from(userInput);
for (let i = userInputArray.length - 1; i >= 0; i--) {
  //creating the reverse of the Input
  reverseInput += userInputArray[i];
}
//triming the string to remove blankspaces
reverseInput.trim();

//checking if the userInput equals to its reverse
if (userInput === reverseInput) {
  console.log(`${userInput} is a palindrome`);
} else {
  console.log(`${userInput} is not a palindrome`);
}
 */

/*  Padded Number
In this challenge, an array is provided and stored in a variable, create a function which evaluates the strings in the array by adding a preceding 0 to single numbers (6 => 06, 5 => 05). Double figures remain as is. */

/* const values = [5, 6, 7, 8, 21, 25, 30];
//if a number is less tha 9 add 0 to the front
const result = [];

const padNumber = function (array) {
  //check if the number is less than 10
  for (let element of array) {
    if (element <= 9) {
      //convert each value to a string & add padding to the necessary number
      let elementPadded = '0' + element.toString();

      result.push(elementPadded);
    } else {
      //convert each value to a string
      result.push(element.toString());
    }
  }
};
//calling the padNumber function
padNumber(values);
//log the result 
console.log(result); */
/* 
const userInput = 'WhyAreYouSoAngry';
let result = userInput[0].toUpperCase(); // this need to be This is why i am hot;

const userInputToArray = Array.from(userInput);

for (let i = 1; i < userInputToArray.length; i++) {
  if (userInputToArray[i] !== userInputToArray[i].toUpperCase()) {
    result += userInputToArray[i];
  } else {
    //In from of every capital letter there must be an space.
    //convert everything to lowercase and concatinate
    result += ' ' + userInputToArray[i].toLowerCase();
  }
}

console.log(result); */
/* // String Methods
const string = 'Hello';
console.log(string.length);
console.log(string.toUpperCase());
console.log(string.toLowerCase());
console.log(Array.from(string));
console.log(string.indexOf('H'));
console.log(string.lastIndexOf('o'));
console.log(string.startsWith('H'));
console.log(string.endsWith('o')); */

//Masking Strings

const maskString = function (num) {
  //take the last 2 number
  const lastDigits = num.toString().slice(-2);

  console.log(lastDigits.padStart(num.toString().length, 'X'));
  //add padding to the two number
};

maskString(12345); //XXX45
maskString('12345'); //XXX45
