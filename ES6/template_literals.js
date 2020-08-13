// template literals easily allows us to work with strings. 
let vorname = "Arun";
let nachname = "pariyar";
const year = 1990;

function calcAge(){
    return 2020 - year; 
}

//ES5 
console.log('Ich heiße '+ vorname + ' '+ nachname +'.'+ ' '+ 'Ich bin '+ calcAge()+' jahr alt.');

//ES6 using template literals. 
console.log(`Ich heiße ${vorname} ${nachname}. Ich bin ${calcAge()} jahr alt.`);