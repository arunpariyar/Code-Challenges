/* Destructuring as the name suggestes allows us to de-structure data structures of JS ie.
array and objects and assign the data within to a variable.
 
- to my understanding this a new feature specific to ES6 

 */

//ES5 

/* //Here if we wanted to store the value of the superhero array to specific value it has to be done manually.
var superhero5 = ['Spiderman','Peter', 'Parker', 'Marvel'];

var heroName5 = superhero5[0];
var firstName5 = superhero5[1];
var secondName5 = superhero5[2];
var brand5 = superhero5[3];

console.log(heroName5);
console.log(firstName5);
console.log(secondName5);
console.log(brand5) */

//ES6 

/* // this statement will allow us to create a mutable(let) variable under the name given in the brackets. 
let [heroName6,firstName6,secondName6, brand6] = ['Spiderman','Peter', 'Parker', 'Marvel'];

//printing the variables
console.log(heroName6);
console.log(firstName6);
console.log(secondName6);
console.log(brand6);

//mutating our variables
heroName6 = 'Batman';
firstName6 = 'Bruce';
secondName6 = 'Wayne';
brand6 = 'DC';

//printing mutatated variables
console.log(heroName6);
console.log(firstName6);
console.log(secondName6);
console.log(brand6); */

//ES6 - Destructring an object 
//Creating our superhero
/* let superhero = {
    name: 'Batman',
    realName : 'Bruce Wayne',
    sidekick: 'Robin',
    brand:'DC'
} */

/* when destructing the object we must always make sure to use the actual
property names of the object and since we are working with an object we use the curly braces {} */

/* let {name, realName, sidekick, brand} = superhero;
console.log(name, realName, sidekick, brand); */
/* 
if want to give name alt names we do it as follows
let {name: a, realName: b, sidekick: c, brand: d} = superhero;
console.log(a, b, c, d); */

//Using the concept in function

/* function rectangle(a,b){
   let  area = a * b;
   let  perimeter = 2 * (a +b);
   // this statement will return the array destructed 
   return [area, perimeter];
} */

//we are using the same names from above to store the calculated variables 
/* let [area, perimeter] = rectangle(5,6); */

//displaying the values directly using the variable names;
/* console.log(area);
console.log(perimeter); */





