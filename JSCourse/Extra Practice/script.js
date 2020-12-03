// Remember, we're gonna use strict mode in all scripts now!
"use strict";

//VAT Calculation
const rawPrice = 1000;
const vatAmt = rawPrice * 0.206;
//calculating vat and adding to the raw amount
const totalPrice = rawPrice + vatAmt;
console.log(totalPrice);

//FROM Celcius to Fahrenheit
const tempCelc = 80;
const tempFahr = tempCelc * (9 / 5) + 32;
console.log(tempFahr);

//Variable swapping
let number1 = 8;
let number2 = 7;
//find the difference
const diff = number1 > number2 ? number1 - number2 : number2 - number1;
//sub diff to num1 and add diff to num2
number1 -= diff;
number2 += diff;
//Print the number
console.log(number1, number2);

//FOLLOWING DAY

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
}

//FOLLOWING DAY USING SWITCH

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
}

//FOLLOWING SECOND

//ask for the time in three part hours minutes and seconds

let hours = 1;
let minutes = 20;
let seconds = 20;

//add 1 to the seconds
seconds++;

//update minutes and hours accordingly;
if (seconds > 60) {
  minutes++;
  seconds = "00";
  if (minutes > 60) {
    hours++;
    minutes = "00";
  }
}

console.log(`The following time is ${hours}:${minutes}:${seconds}`);

//add 1 to seconds and display the time;
