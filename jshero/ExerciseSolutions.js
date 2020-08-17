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