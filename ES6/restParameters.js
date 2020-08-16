/* 
Rest Parameters allow a function to able to accept an Arbitary amount of inputs 
Rest parameters acts as an opposite to spread operator. While spread operator takes a data struture 
and breaks it its constituents. Rest Parameter on the other hand takes the constituents/arguments and
and turns it into a data structure.
NOTE: Rest  parameters and Spreadoperator look exactly the same (...name) however the main difference is 
    - Rest parameters is used with a function decleration to accept any arbitary input
    - Spread operator is used in a function call.

*/

// lets create a function that can take as many number and give out the sum of it 

/* //ES5
function sum5(){
    //note that a function define without any input JS give us the arguments keyword that represents input it may receive
    // however arguments is not an array but array like data structure so we have to convert it to an array
    inputArr = Array.prototype.slice.call(arguments);
    var result = 0;
    for (var i = 0; i < inputArr.length; i++){
        result += inputArr[i];
    };
    console.log(result);
};

//ES6 
let sum6 = (...nums) => {
    let result = 0;
    for (let i = 0; i < nums.length; i++){
        result += nums[i];
    };
    console.log(result);
} 

sum6(1,2,3,4,5);
 */
/* 
What if we wanted to input mandatory value alongside the arbitary date ? 
lets make our function only the first 5 numbers of the input.
 */

//ES5
function sum5(limit){
    // here we will have to hack the slice in order to make space for our limit by asking the splice to start from 1
    var inputArr = Array.prototype.slice.call(arguments, 1);
    var result = 0;
    for (var i = 0; i < limit; i++){
        result += inputArr[i];
    };
    console.log(result);
};

//what happend above is that the first input is taken as the limit. 

// Implementation in ES6 is far more simpler

//ES6 
// all we have to do is introduce limit, in the function decleration and we are ready to use it.
let sum6 = (limit,...nums) => {
    let result = 0;
    for (let i = 0; i < limit; i++){
        result += nums[i];
    };
    console.log(result);
} 

sum6(5, 1,2,3,4,5,6,7);




