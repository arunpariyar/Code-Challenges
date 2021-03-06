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


/* Exercise
Write a function rotate that rotates the elements of an array. All elements should be moved one position to the left. The 0th element should be placed at the end of the array. The rotated array should be returned.

Example: rotate(['a', 'b', 'c']) should return ['b', 'c', 'a'].

My Solution
function rotate(arr){
    let a1 = arr[0];
    arr.shift();
    arr.push(a1);
    return arr;
} */

/* Exercise
Write a function add that adds an element to the end of an array. However, the element should only be added if it is not already in the array.

Example: add([1, 2], 3) should return [1, 2, 3] and add([1, 2], 2) should return [1, 2].

My Solution
function add(arr,el){
    let index = arr.indexOf(el);
    if(index !== -1){
    return arr;
    }
    arr.push(el);
    return arr;
} */

/* Exercise
Write a function flat that flattens a two-dimensional array with 3 entries.

Example: flat(loshu) should return [4, 9, 2, 3, 5, 7, 8, 1, 6]. Thereby loshu is the magic square from the example above.

My Solution
function flat(loshu){
    let row1 = loshu[0];
    let row2 = loshu[1];
    let row3 = loshu[2];
    
    let result =row1.concat(row2)
    result = result.concat(row3);
    
    return result;
} */
/* 
Exercise : This one took me quite a while
Write a function median that takes an array of ascending numbers and returns the median of that numbers.

Example: median([1, 2, 10]) should return 2 and median([1, 2, 10, 100]) should return 6.

My Solution:
function median(array){
    let length = array.length;
    let index = Math.floor(length/2);
    if(length > 1){
        if(length % 2 === 1){
            return array[index];
        }else{ 
            let result = array[index] + array[index - 1];
            result = result/2;
            return result;
        }
       
    }else{
    return array[0];
    }
}
 */

/* Exercise
Write a function hello having one parameter and returning 'Hello <parameter>!'. If hello is called without an argument, 'Hello world!' should be returned.

My Solution
function hello(parameter){
    if(parameter === undefined){
    return "Hello world!";
    }else{
    return `Hello ${parameter}!`;
    }
}
 */
/* 
Write a function cutComment that takes one line of JavaScript and returns a possible line comment trimmed. If the line contains no line comment, null should be returned. For simplicity, we assume that the code does not contain the comment characters within a string.

Example: cutCommt('let foo; // bar') should return 'bar'.

My Solution
function cutComment(line){
    let index = line.indexOf('/');
    
    if(index === -1){
    return null;
    }else{
    let comment = line.substr(index+2);
    comment = comment.trim();
    return comment;
    }
} */


/* Exercise
Write a function spaces that takes a natural number n and returns a string of n spaces.

Example: spaces(1) should return ' '.

My solution

function spaces(n){
    let space = "";
    while(space.length < n){
    space = space + " ";
    }
    
    return space;
} */

/* Exercise
Write a function lcm that takes two natural numbers and calculates their least common multiple (lcm). The lcm of two natural numbers a und b is the smallest natural number that is divisible by a and b.

Example: lcm(4, 6) should return 12.

My Solution
function lcm(a,b){
    let limit = a*b;
    let min = Math.min(a,b)
    for(var i=min ; i <=limit;i++){
    if(i%a === 0 && i%b === 0) return i;
    }
}

Alternative
function lcm(a, b) {

    let theLCM = 0;
    let remainderA;
    let remainderB;
  
    do {
  
      theLCM++;
      remainderA = theLCM % a;
      remainderB = theLCM % b;
  
    } while (remainderA !== 0 || remainderB !== 0)
  
    return theLCM;
  } */
/* 
Exercise
Write a function gcd that takes two natural numbers and calculates their gcd.

Example: gcd(6, 15) should return 3.

function gcd(a,b){
    let max = Math.max(a,b);
    for(var i = max ; i >=0;i--){
    if(a%i === 0 && b%i === 0) return i;
    }
} */

/* Exercise
Write a function isPrime that checks whether a passed number is prime. In case of a prime number it should return true, otherwise false.

Example: isPrime(7) should return true and isPrime(8) should return false.

My Solution

function isPrime(n){
    let finalSum = 1+n;
    let sum = 0;
    for(let i = 1; i <= n;i++){
    if( n%i === 0){
    sum += i;
    }
    }
    if(sum === finalSum){
    return true;
    }else{
    return false;
    }
} */

/* Exercise
Write a function sum that calculates the sum of all elements of a two-dimensional array.

Example: sum([[1, 2], [3]]) should return 6.

My Solution

function sum(array){
    let sum = 0;
    for(let i = 0; i < array.length; i++){
    for(let j = 0; j < array[i].length; j++){
    sum = sum + array[i][j];
    }
    }
    return sum;
} */
/* 
Exercise
Write a function max that calculates the maximum of an arbitrary number of numbers.

Example: max(1, 2) should return 2 and max(2, 3, 1) should return 3.

My Solution

function max(){
    let max = 0
    for(let i = 0; i<=arguments.length; i++){
    if(max < arguments[i]) max = arguments[i];
    }
    return max;
} */


THE MOST ANNOYING CHALLANGE - most refactor 

/* Exercise
Write a function parseFirstInt that takes a string and returns the first integer present in the string. If the string does not contain an integer, you should get NaN.

Example: parseFirstInt('No. 10') should return 10 and parseFirstInt('Babylon') should return NaN.

My Solution

function parseFirstInt(string){
    let index;
        let numString;
    if(Number.isNaN(string)){
        return NaN;
    }
    let length = string.length;
    for(let i=0; i< length; i++){
        let char = string.charAt(i);
        if(isNaN(char) === false && char !== " "|| char === "-"){
            index = i;
            break;
        }
    }
    numString = parseInt((string.substr(index)).trim());
    
    if(isNaN(numString)){
        return NaN;
    }else{
        
return numString;
    }  
} */
/* 
Exercise
Write a function add that takes a string with a summation task and returns its result as a number. A finite number of natural numbers should be added. The summation task is a string of the form '1+19+...+281'.

Example: add('7+12+100') should return 119.

My Solution

function add(string){
    let sum = 0;
    let parts=string.split('+');
    for(let i = 0; i<parts.length; i++){
    
    sum += parseInt(parts[i]);
    }
    return sum;
} */