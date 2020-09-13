// Create a map 
let myMap = new Map();

//add key value pair in the map
myMap.set('question','Who is the strongest superhero ?');
myMap.set(1,"Spider-man")
myMap.set(2,"Batman")
myMap.set(3,"Ironman")
myMap.set(4,'Superman')
myMap.set('correct', 4)
myMap.set(true, "You are correct!")
myMap.set(false,"Wrong!");

console.log(myMap.get('question'));

myMap.forEach((value,key)=>{
    if(typeof(key) === "number"){
        console.log(`${key}: ${value}`);
    }
})

const ans = Number(prompt("Enter your answer"));

console.log(myMap.get(ans === myMap.get('correct')));