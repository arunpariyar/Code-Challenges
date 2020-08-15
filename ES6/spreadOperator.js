/* When we need to expand the contents of an array to its components for use in a function
we make use of the spread operator(...) */

//lets imagine that we need the multiplication of all components in an array. 

//ES5 
/* function multiply(a,b,c,d){
    return a * b * c * d; 
};

var arr5 = [1,2,3,4];

//to do this we will make use of apply that allows us to use array as and input. 
console.log(multiply.apply(null,arr5)); */

// ES6
//since this is a single line function we dont need to write a return 
let multiply = (a,b,c,d) => a * b * c * d;
// this is our array
let arr6 = [1,2,3,4];
//using spread operator
console.log(multiply(...arr6));

//We can also make use to spread to join data structures
let arr7 = [5,6,7,8];

// can simply just add another array using the spread operator
let arr8 = [...arr6,...arr7]

console.log(arr8);
