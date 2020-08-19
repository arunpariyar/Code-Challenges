/* Exercise
Write a function secondIndexOf, taking two strings and determining the second occurrence of the second string in the first string. If the search string does not occur twice, -1 should be returned.

Example: secondIndexOf('White Rabbit', 'it') should return 10.

Solution 
function secondIndexOf(s1,s2){
    let fIndex = s1.indexOf(s2);
    let sIndex = s1.indexOf(s2, fIndex + 1);
    return sIndex;
} */

/* 
Write a function firstWord, taking a string and returning the first word in that string. The first word are all characters up to the first space.

Example: firstWord('see and stop') should return 'see'.

Solution
function firstWord(str){
    var index = str.indexOf(" ");
    return str.substr(0,index);
}
 */

/* 
Exercise
Write a function normalize, that replaces '-' with '/' in a date string.

Example: normalize('20-05-2017') should return '20/05/2017'.

Solution
function normalize(string){
    let newString = string.replace('-','/');
    let finalString = newString.replace('-','/');
    return finalString;
}
 */

/* Exercise
Write a function toFahrenheit that converts a temperature from Celsius to Fahrenheit.

Example: toFahrenheit(0) should return 32.

Solution
function toFahrenheit(num){
    return 1.8 * num + 32; 
} */

/* 
Exercise
Write a function area that calculates the area of a circle. The function is given the radius of the circle.

Example: area(1) should return π and area(2) should return 4 * π.

Solution 
function area(value){
    return (value*value)* Math.PI;
}
 */

/* 
Exercise
Write a function round100 that rounds a number to the nearest hundred.

Example: round100(1749) should return 1700 and round100(856.12) should return 900.

Solution
function round100(num){
    var result = num;
    result = result/100;
    result = Math.round(result);
    result = result * 100;
    return result;
}
 */

/* Exercise
Write a function dice that returns like a dice a random number between 1 and 6.

Solution
function dice(){
    var random = Math.random() * 6;
    random = Math.ceil(random);
    return random;
} */

/* Exercise
Write a function add that takes a string with a summation task and returns its result as a number. Two natural numbers should be added. The summation task is a string of the form '102+17'.

Example: add('102+17') should return 119.

- Hint
Determine the first summand with parseInt. Use indexOf to determine the position of the plus sign. Determine with substring the substring after the plus sign. Use parseInt to determine the second summand from this substring.

Solution

function add(string){
    var index = string.indexOf('+');
    var fN = parseInt(string.substr(0,index));
    var sN = parseInt(string.substr(index));
    
    result = fN + sN;
    return result

}
Alternative Solution
- Solution
function add(s) {
  let summand1 = parseInt(s, 10);
  let positionPlus = s.indexOf('+');
  let sAfterPlus = s.substring(positionPlus + 1);
  let summand2 = parseInt(sAfterPlus, 10);
  return summand1 + summand2;
}
*/

/* 
Exercise
Write a function nand that takes two Boolean values. If both values are true, the result should be false. In the other cases the return should be true.

I.e.: The call nand(true, true) should return false. The calls nand(true, false), nand(false, true) and nand(false, false) should return true.

My Solution
function nand(val1, val2){

    if(val1 === val2 && val1 === true){
    return false;
    }else if (val1 === val2 && val1 === false){
    return true
    }else{
    return true
    }
}

Alternative Solution

function nand(a, b) {
    let and = a && b;
    return !and;
  } */


/* Exercise
Write a function nor that takes two Boolean values. If both values are false, the result should be true. In the other cases the return should be false.

I.e.: The call nor(false, false) should return true. The calls nor(true, false), nor(false, true) and nor(true, true) should return false.

Solution
function nor(val1, val2){
    if(val1 === false && val2 === false){
    return true;
    }else{
    return false;
    }
} */


/* Exercise
Write a function xor that takes two Boolean values. If both values are different, the result should be true. If both values are the same, the result should be false.

I.e.: The calls xor(true, false) and xor(false, true) should return true. The calls xor(true, true) and xor(false, false) should return false.

solution

function xor(val1, val2){
    if(val1 === val2){
    return false;
    }else{
    return true;
    }
 } */

/* Exercise
Write a function isEven that checks if a passed number is even. If the given number is even, true should be returned, otherwise false.

Example: isEven(2) should return true and isEven(3) should return false.

Solution
function isEven(v){
    let reminder = v%2;
    if(reminder === 0){
    return true;
    }
    else{
    return false;
    }
}
 */

/* Exercise
Write a function unequal that checks 3 values for strict inequality. The function should return true if all three parameters are strict unequal. Otherwise false.

Example: unequal(1, 2, 3) should return true and unequal(1, 1, 2) should return false.

Solution
function unequal(a,b,c)
{
if(a!==b && b!==c && a!==c){
return true;
}else{
return false;
}
} */


/* Exercise
Write a function repdigit that determines whether a two-digit decimal is a repdigit or not. If the decimal is a repdigit, 'Repdigit!' should be returned, otherwise 'No repdigit!'.

Example: repdigit(22) shouöd return 'Repdigit!' and repdigit(23) should return 'No repdigit!'.

HINT
function repdigit(n) {
    // Calculate the ones digit
    // of n with modulo 10.
    // Calculate the tens digit
    // of n by dividing by 10
    // and rounding down.
    // Compare ones and tens digits.
    }

    Solution
function repdigit(num){
    let fD = num%10;
    let sD = num/10;
    sD = Math.floor(sD);
    if(fD === sD){
    return "Repdigit!"}
    return "No Repdigit!"
} */
/* 
Exercise
Write a function addWithSurcharge that adds two amounts with surcharge. For each amount less than or equal to 10, the surcharge is 1. For each amount greater than 10 and less than or equal to 20, the surcharge is 2. For each amount greater than 20, the surcharge is 3.

My Solution
function addWithSurcharge(a,b){
    let surCharge = 0;
    
    let result = a + b;
    if(a <=10){
    surCharge = 1;
    }else if(a >10 && a<=20){
    surCharge = 2;
    } else {
    surCharge = 3;
    }
    
    result += surCharge;
    
    if(b <=10 ){
    surCharge = 1;
    }else if(b > 10 && b<=20){
    surCharge = 2;
    }else{
    surCharge = 3;
    }
    
    result += surCharge;
    
    return result
} */
    

/* Exercise
Write a function toArray that takes 2 values and returns these values in an array.

My Solution
function toArray(a,b){
    let arr = [];
    arr[0] = a;
    arr[1] = b;
    
    return arr;
} */

/* Exercise
Write a function sort that takes an array filled with 3 numbers and returns these 3 numbers sorted in ascending order as an array.

Example: sort([2, 3, 1]) should return [1, 2, 3].

Solution
function sort(arr){
    let newArray =[];
    let len = arr.length;
    let st = arr[0];
    let nd = arr[1];
    let rd = arr[2];
    
    let min = Math.min(st,nd,rd);
    let max = Math.max(st,nd,rd);

    newArray.push(min);
    
    if(st !== min && st !== max)
    {
    newArray.push(st);
    } 
    else if(nd !== min && nd !== max)
    {
    newArray.push(nd);
    } 
    else if(rd !== min && rd !== max)
    {
    newArray.push(rd);
    }
    
    newArray.push(max);
    
    return newArray;
}  */