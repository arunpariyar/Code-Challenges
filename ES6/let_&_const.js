//Both let and const are block scoped unlike var which is function scoped;

/*
//ES5 
{
    var n5 = 0;
    n5 = 5;
    // This will work
    console.log(n5);
}

// this console log will work
console.log(n5);


//ES 6 
{
    let n6 = 0;
    n6 = 6;
    // this will work because this is in the same block
    console.log(n6);
}
// this console log will not work and returns  - Uncaught ReferenceError: n6 is not defined error
console.log(n6);
*/


//How var, let and const work inside function
/*
function displayAll(){
    if(true){
        var es5 = "es5";
        let es6 = "es6";
        const es6l = "es6l";
    }
    //var will work as it is function scoped
    console.log(es5);

    //let wont work as it is block scoped only valid inside the if block.
    console.log(es6);

    //const wont work as it is block scoped only valid inside the if block.
    console.log(es6l);
}
*/

// how to get let and const be fully avaible inside the above function

/* function displayAll(){
    let es6;
    const es6l = "es6l";

    if(true){
        var es5 = "es5";
        es6 = "es6";
        
    }
    //var will work as it is function scoped
    console.log(es5);

    //let wont work as it is block scoped only valid inside the if block.
    console.log(es6);

    //const wont work as it is block scoped only valid inside the if block.
    console.log(es6l);
}

displayAll();
 */

//Difference between let and const is that let is mutable while const is not
/* 
let l = 10;
const c = 10;

l = 20;
console.log(l);

// This statement will cause a Assignment to constant variable error
c = 20;
console.log(c);
 */





