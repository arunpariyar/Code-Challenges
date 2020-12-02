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

/* 
//Lecture Array
const calcAge = function (birthYear){
    return 2030 - birthYear;
}
//Array decleration - using literal syntax
const years1 = [1990,1991,1995];

//Array decleration - using function syntax
const years2 = new Array(1990,1991,1995);

const ages = [calcAge(years[0]), calcAge(years[1]),calcAge(years[years.length - 1])];
console.log(ages); */

/* 
//video 43 challange
const john = {
    firstName:"John",
    secondName:'Hardy',
    age: 2020 - 1990,
    job: 'Trucker',
    friends:['Jamie','Freddy','Brando','Mike']
}

console.log(`${john.firstName} has ${john.friends.length} friends and his best friend is called ${john.friends[john.friends.length - 1]}.`); */
/* 
// Lecture: Introduction to Array

const populations = [1393, 83, 28, 132];

console.log(populations.length === 4);

const percentages = [];

const percentageOfWorld1 = (population) => { return (population / 7900) * 100}; 

percentages.push(percentageOfWorld1(populations[0]),
                 percentageOfWorld1(populations[1]), 
                 percentageOfWorld1(populations[2]),
                 percentageOfWorld1(populations[3])
                 );

console.log(percentages); */

/* //Lecture: Basic Array Operations(Methods)

const neighbourCountriesIndia = new Array("Afghanistan", "Bangladesh", "Bhutan", "China", "Maldives", "Myanmar", "Nepal", "Pakistan", "Sri Lanka");

neighbourCountriesIndia.push("Utopia");

console.log(neighbourCountriesIndia);

neighbourCountriesIndia.pop();

console.log(neighbourCountriesIndia);

if(neighbourCountriesIndia.includes("Germany")){
    console.log("Its in the Europe");
} else {
    console.log("Probably not a central European country :D");
}

neighbourCountriesIndia[0] = "Sweden";

console.log(neighbourCountriesIndia);

if(neighbourCountriesIndia.includes("Sweden")){
    const index = neighbourCountriesIndia.indexOf("Sweden");
    neighbourCountriesIndia[index] = "Republic Of Sweden";
}

console.log(neighbourCountriesIndia); */

/* 
//Lecture: Objects 

const myCountry = {
    name:"Nepal",
    capital:"Kathmandu",
    language:"Nepali",
    population: 28,
    neighbours: ['Nepal','China']
}

console.log(`${myCountry.name} has ${myCountry.population} million ${myCountry.language}-speaking people, ${myCountry.neighbours.length} neighbouring countires and the capital is called ${myCountry.capital}.`)

myCountry.population += 2;
console.log(myCountry.population);

myCountry["population"] -= 2;
console.log(myCountry.population);

 */
/* 
//  Lecture: Object Methods
 const john = {
     firstName:"John",
     secondName: "Doe",
     birthYear: "1990",
     job:"teacher",
     hasDriversLicense: false,
     age:0,

     calcAge: function(){
         this.age = 2020 - this.birthYear;
         return this.age;
     },

     getSummary: function(){
         this.calcAge();
         return `${this.firstName} is a ${this.age}-year old ${this.job}, and he has ${this.hasDriversLicense ? "a" : "no"} driver's license.`;
     }

 };

 console.log(john.getSummary());
 */

/* //  Lecture Looping Array

//calcuate age for the years and save into an array
const years = [1991, 1980, 1978, 1985];
const ages = [];

for(let i = 0; i < years.length ; i++){
    ages.push(2020 - years[i]);
}

console.log(ages);

for(let i = 0; i < ages.length; i++){
    if(ages[i] >= 40) continue;
    console.log(ages[i]);
}
 */
/* 
 //Lecture continue and break;

 const data = ["John", 30, true, ["hello"],(arg)=> console.log(arg)]

for(let i = 0; i < data.length; i++){
    if(typeof data[i] !== 'function') continue;
    console.log(data[i]);
}

for(let i = 0; i < data.length; i++){
    if(typeof data[i] === 'object') break;
    console.log(data[i]);
}
 */

/*  for(let exercise = 1; exercise < 4 ; exercise++){
     console.log(`💪 Exercise ${exercise} `);
    for(let rep = 1; rep < 6; rep++){
        console.log(`🏋️‍♂️ Rep ${rep}`);
    }
 } */

 //looping an array backwards

 const data = ["John", 30, true, ["hello"]]

 for(let i = data.length; i >= 0; i--){
    console.log(data[i]);
 }





