
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


