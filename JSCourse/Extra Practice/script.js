// Remember, we're gonna use strict mode in all scripts now!
"use strict";

/* //VAT Calculation
const rawPrice = 1000;
const vatAmt = rawPrice * 0.206;
//calculating vat and adding to the raw amount
const totalPrice = rawPrice + vatAmt;
console.log(totalPrice);
 */
/* //FROM Celcius to Fahrenheit
const tempCelc = 80;
const tempFahr = tempCelc * (9 / 5) + 32;
console.log(tempFahr);
 */
/* //Variable swapping
let number1 = 8;
let number2 = 7;
//find the difference
const diff = number1 > number2 ? number1 - number2 : number2 - number1;
//sub diff to num1 and add diff to num2
number1 -= diff;
number2 += diff;
//Print the number
console.log(number1, number2);
 */
/* //FOLLOWING DAY

//varible for date
const day = "sunday";
//use if else statement to print the following day
if (day === "sunday") {
  console.log("monday");
} else if (day === "monday") {
  console.log("tuesday");
} else if (day === "tuesday") {
  console.log("wednesday");
} else if (day === "wednesday") {
  console.log("thursday");
} else if (day === "thursday") {
  console.log("friday");
} else if (day === "friday") {
  console.log("saturday");
} else if (day === "saturday") {
  console.log("sunday");
} else {
  console.log(`${day} is an invalid day`);
} */

/* //FOLLOWING DAY USING SWITCH

switch (day) {
  case "sunday":
    console.log("monday");
    break;
  case "monday":
    console.log("tuesday");
    break;
  case "tuesday":
    console.log("wednesday");
    break;
  case "wednesday":
    console.log("thursday");
    break;
  case "thursday":
    console.log("friday");
    break;
  case "friday":
    console.log("saturday");
    break;
  case "saturday":
    console.log("sunday");
    break;
  default:
    console.log(`${day} is an invalid day`);
} */

/* //FOLLOWING SECOND

//ask for the time in three part hours minutes and seconds

let hours = Number(prompt("Please enter the hours"));
while (hours > 23) {
  hours = Number(prompt("Please enter the hours"));
}

let minutes = Number(prompt("Please enter the minutes"));
while (minutes > 61) {
  hours = Number(prompt("Please enter the hours"));
}

let seconds = Number(prompt("Please enter the seconds"));
while (seconds > 61) {
  hours = Number(prompt("Please enter the hours"));
}

//add 1 to the seconds
seconds++;

//update minutes and hours accordingly;
if (seconds > 59) {
  minutes++;
  seconds = "0";
  if (minutes > 59) {
    hours++;
    minutes = "0";
    if (hours > 22) {
      hours = "0";
    }
  }
}

console.log(`The following time is ${hours}h${minutes}m${seconds}s`);
 */

/* //CAROUSEL
const item = "carousel";
let counter = 1;
while (counter <= 10) {
  console.log(item);
  counter++;
}

for (let i = 0; i <= 10; i++) {
  console.log(item);
}
 */

/*  //PARITY 
const numLimit = Number(prompt("Please enter a limit"));

for (let i = 1; i <= numLimit; i++) {
  console.log(i % 2 === 0 ? `${i} is even` : `${i} is odd`);
} */

/* //INPUT VALIDATION
let userInput = Number(prompt("Please enter a number"));

//number is less than or equal to 100
while (userInput >= 100 || userInput <= 50) {
  userInput = Number(prompt("Please enter a number"));
}
console.log(userInput); */

/* 
// MULTIPLICATION TABLE
const userInput = Number(prompt("Please enter a number between 2 and 9"));

// input validation
while (userInput < 2 || userInput > 9) {
  Number(prompt("Please enter a number between 2 and 8"));
}
// loop to calculate the table
for (let i = 1; i < 11; i++) {
  console.log(`🧮 ${i} x ${userInput} = ${i * userInput}`);
} 
*/

/* //Neither yes or no
let userInput = prompt("Neither yes or no 😉");
while (
  userInput !== "yes" &&
  userInput !== "YES" &&
  userInput !== "no" &&
  userInput !== "NO"
) {
  userInput = prompt("Neither yes or no 😉");
}

console.log(`👍 ${userInput}`); */

//FIZZBUZZ

/* //approach 1 
for (let i = 1; i <= 100; i++) {
  if (i % 3 === 0) {
    if (i % 5 === 0) {
      console.log("FizzBuzz");
    }
    console.log("Fizz");
  } else if (i % 5 === 0) {
    console.log("Buzz");
  } else {
    console.log(`${i}`);
  }
} */

/* //approach 2
for (let i = 1; i <= 100; i++) {
  if (i % 15 === 0) {
    console.log("FizzBuzz");
  } else if (i % 5 === 0) {
    console.log("Buzz");
  } else if (i % 3 === 0) {
    console.log("Fizz");
  } else {
    console.log(`${i}`);
  }
}
 */

/* //Improved Hello

const sayHello = (firstName, lastName) => {
  const message = ` 👋 Hello, ${firstName} ${lastName}`;
  return message;
};

const firstName = prompt("Please enter your first name.");
const lastName = prompt("Please enter your lastName.");
const result = sayHello(firstName, lastName);

console.log(result); */

/* 
//NUMBER SQUARING
function square1(arg) {
  return arg ** 2;
}

const square2 = arg =>  arg ** 2;

// console.log(square1(0));
// console.log(square1(2));
// console.log(square1(5));

// console.log(square2(0));
// console.log(square2(2));
// console.log(square2(5));

for (let i = 1; i < 11; i++) {
  console.log(square1(i));
} */

/* //Minimum of two numbers 
const min = function (arg1, arg2) {
  return arg1 <= arg2 ? arg1 : arg2;
};

console.log(min(4.5, 5));
console.log(min(19, 9));
console.log(min(1, 1)); */

/* //Calculator
function calculator(arg1, arg2, arg3) {
  switch (arg2) {
    case "+":
      return arg1 + arg3;
      break;
    case "-":
      return arg1 - arg3;
      break;
    case "*":
      return arg1 * arg3;
      break;
    case "/":
      return arg1 / arg3;
    default:
      return "Please enter the data again carefully";
  }
}

console.log(calculator(4, "+", 6));
console.log(calculator(4, "-", 6));
console.log(calculator(2, "*", 0));
console.log(calculator(12, "/", 0)); */

/* //Circumference of a Circle
const circumference = (radius) => 2 * Math.PI * radius;
const areaOfCircle = (radius) => Math.PI * radius ** 2;

console.log(circumference(5));
console.log(areaOfCircle(5)); */

//OBJECTS

/* //ADDING CHARACTER EXPERIENCE
const aurora = {
  name: "Aurora",
  health: 150,
  strength: 25,
  xp: 0,

  describe: function () {
    console.log(
      `${this.name} has ${this.health} health points, ${this.strength} as strength and ${this.xp} XP points.`
    );
  },
};

aurora.health -= 20;
aurora.strength += 10;
aurora.xp += 15;

aurora.describe(); */

/* //MODELING A DOG
const dog = {
  name: "Fang",
  species: "boarhound",
  size: "75",

  bark: function () {
    return "Grrr! Grrr!";
  },
};

console.log(`${dog.name} is a ${dog.species} measuring at ${dog.size}.`);
console.log(`Look, a cat ! ${dog.name} barks: ${dog.bark()}`);
 */

/* //MODELING A CIRCLE
let circle = {
  radius: 0,

  area: function () {
    return Math.PI * this.radius ** 2;
  },
  circumference: function () {
    return 2 * Math.PI * this.radius;
  },
};

const r = Number(prompt("Please enter the radius of the circle"));
//updating the radius value
circle.radius = r;

console.log(`Its circumference is ${circle.circumference()}`);
console.log(`Its area is ${circle.area()}`);

 */

/* //Modeling a Bank Account

const account = {
  owner: "Alex",
  balance: 0,

  credit: function (amt) {
    this.balance += amt;
  },
  describe: function () {
    console.log(`owner:${account.owner}, balance:${account.balance}`);
  },
};

account.credit(250);
account.describe();
account.credit(-80);
account.describe(); */
