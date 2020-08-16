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