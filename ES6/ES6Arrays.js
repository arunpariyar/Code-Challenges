/* The first feature to explore is the Array.from(array) */

/* // converting a nodelist to array
const superheroesNodeList = document.querySelectorAll('.superhero');

// using Array.from to convert a nodelist to and array.
const superheroArray = Array.from(superheroesNodeList);

//convert all font color of superhero list
superheroArray.forEach(cur => cur.style.color = 'green'); */


// the FOR of loop that allows use continue and break
const superheroesNodeList = document.querySelectorAll('.superhero');
const superheroArray = Array.from(superheroesNodeList);

/* //ES5 
for(var i = 0; i < superheroArray.length; i++){
    if(superheroArray[i].className === "superhero super"){
        continue; 
    }
    superheroArray[i].style.color = 'blue';
    superheroArray[i].textContent += ' - Superman is the most powerful';
}; */

//The problem above is that we have to make use of a lot of code to achieve the result the ES6 implementation is as follows

for (const cur of superheroArray){ 
    if(cur.className.includes(' super')){
        continue;
    }
    cur.textContent += ' - Superman is the most powerful.';
};



