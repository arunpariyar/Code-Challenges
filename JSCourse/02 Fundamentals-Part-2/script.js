//JavaScript Fundamentals Part 2

/* 
// Lecture: Functions
'use strict';


function describeCountry(country, population, capitalCity){
    return `${country} has ${population} million people and it's capital city is ${capitalCity}. `;
}

const kathmandu = describeCountry('Nepal',29,"Kathmandu");
const germany = describeCountry('Germany',82,"Berlin");
const bhutan = describeCountry('Bhutan',1,"Thimpu");

console.log(kathmandu);
console.log(germany);
console.log(bhutan);
 */

 
/*  
// Function Declarations vs Expressions

//function called before declaration
percentageOfWorld1(28);
percentageOfWorld1(1393);
percentageOfWorld1(83);

//Function Declarations
function percentageOfWorld1(population){
    return console.log((population / 7900) * 100);
}

//FUNCTION EXPRESSION
const percentageOfWorld2 = function(population){
    return console.log((population / 7900) * 100);
};
//function can only be called after declaretion
percentageOfWorld2(28);
percentageOfWorld2(1393);
percentageOfWorld2(83);

//Arrow functions
const percentageOfWorld3 = population => console.log((population/7900) * 100);

percentageOfWorld3(28);
percentageOfWorld3(1393);
percentageOfWorld3(83);
 */

/* 
//Lecture Functions Calling Other Functions

const percentageOfWorld = function(population){
    return (population / 7900) * 100;
};

const describePopulation = (country, population) => {
    const globalPercentage = percentageOfWorld(population)
    return `${country} has ${population} million people which is ${globalPercentage}% of the world`;
}

const nepal = describePopulation('Nepal','28');
const china = describePopulation('China',1393);
const bhutan = describePopulation('Bhutan',0.76);

console.log(nepal);
console.log(china);
console.log(bhutan); */

