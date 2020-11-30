
/* LECTURE: Values and Variables */
/* 
let country = "Nepal";
let continent = "Asia";
let population = 29136808;
let isIsland = 0;

console.log(country);
console.log(continent);
console.log(population);
console.log(isIsland); 
*/

/* LECTURE: Data Types */

/* const country = "Nepal";
const continent = "Asia";
let population = 29136808;
const isIsland = true;
const language = "Nepalese"

console.log(country + ': type -' + typeof country);
console.log(continent + ':type - '+ typeof continent);
console.log(population + ':type - '+ typeof population);
console.log(isIsland +": type - "+ typeof isIsland); 
console.log(language + ": type - "+ typeof language); */

/* Lecture Basic Operators */

/* const country = "Nepal";
const continent = "Asia";
let population = 29136808;
const isIsland = true;
const language = "Nepalese"

const halfPopulation = population / 2;

console.log(halfPopulation);
console.log(population);

population += 1;
console.log(population);

const finlandPopulation = 6000000;
console.log(finlandPopulation > population)

const averagePopulation = 33000000;
console.log(population > averagePopulation); */

// const description = country + " is in " + continent + " and its " + population / 1000000 + " million people speak " + language;
// console.log(description);

// String and Template Literals
/* const description = `${country} is in ${continent} and its ${population/1000000} mullion people speak ${language}.`

console.log(description); */

// Taking Decisions: if / else statements
/* 
const country = "Nepal";
const continent = "Asia";
let population = 29136808;
const isIsland = true;
const language = "Nepalese";

if(population > 33000000){
    console.log(`${country}'s population is above average.`);
} else { 
    console.log(`${country} population is below average.`);
}
console.log('9' - '5');
console.log('19' - '13' + '17');
console.log('123' < 57);
console.log(5 + 6 + '4' + 9 - 4 - 2);
 */

// Lecture: Equality Operators : == vs ===

/* const numNeighbours = Number(prompt(`How many neighbour countries does your country have ? `));

if(numNeighbours === 1) {
    console.log(`Only 1 border!`);
} else if(numNeighbours > 1) {
    console.log(`More than 1 border`);  
} */

//Lecture Logical Operators

/* const speakEnglish = true;
const population = 40000000;
const isIsland = false;
const overPopulated = population < 50000000;

if(speakEnglish && overPopulated && !isIsland){
    console.log(`Sarah should move here`);
} else {
    console.log(`Sarah stay where you are seriously`);
}
 */

 //Coverting Switch to if else

/*  // Assignment
 const language = prompt("Please enter your language");

 switch(language){
    case "chinese":
    case "mandarin":
        console.log("Most number of native speakers");
        break; 
    case "spanish":
        console.log("2nd place in number of native speakers")
        break;
    case "english":
        console.log("3rd place");
        break;
    case "Hindi":
        console.log("4th place");
        break;
    case "arabic":
        console.log("5th most spoken language");
        break;
    default:
        console.log("Great Language too :D");         
 } */
     

/*  const day = prompt("Enter the day of the Week");

 if(day === "monday"){
     console.log("Plan course structure");
     console.log('Go to coding bootcamp');
 } else if(day === "tuesday"){
     console.log("Prepare Theory Videos");
 } else if(day === "wednesday" || day === "thursday"){
     console.log("Write code samples");
 } else if(day === "friday"){
     console.log("Record Videos");
 } else if(day === "saturday" || day === 'sunday'){
     console.log("Enjoy the weekend");
 } else {
     console.log("Invalid day, enter again");
 } */

/*  
// Ternary Operator

 let isHappy = true;
 const thePlan = isHappy ? "to Code." : "not to Code."

 console.log(`The Plan today is ${thePlan}`);
  */