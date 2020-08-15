// Arrow function is allows us to write functions more succiently

//this function takes one input and return the square

//ES5 
/* function square(number) {
    return number * number;
} */

//ES6
/* here we have only one so we dont need brackets around the argument and return doesnt 
need need to be be explicitly mentioned */ 

/* code 
let square = number => number * number;
console.log(square(8));   */

// function takes in more than one input and we have multiple lines of code so we must use brackets as well
//ES5
/* let addition = function(a,b){
    var sum = 0;
    sum = a + b;
    return sum;
}; */

//ES6
let addition = (a,b) => { 
    let sum = 0;
    sum = a + b;
    return sum;
};



console.log(addition(10,2));
