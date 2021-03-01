/* const dogsJulia = [3, 5, 2, 12, 7];
const dogsKate = [4, 1, 15, 8, 3];

const dogsJuliaCopy = [...dogsJulia];
dogsJuliaCopy.splice(0, 1);
dogsJuliaCopy.splice(-2);

const allDogs = [...dogsJuliaCopy, ...dogsKate];
console.log(allDogs);

allDogs.forEach(function (age, i) {
  const message =
    age >= 3
      ? `Dog number ${i} is an adult, and is ${age} years old.`
      : `Dog number ${i} is still a puppy 🐶`;
  console.log(message);
});
 */
/* 
//Set, Sets is data structure avaible in JS which is used to store unique values without any order.
// creating a set
const furnitureSet = new Set([]);
//add chaor to the set
furnitureSet.add("chair");
furnitureSet.add("table");
furnitureSet.add("hat");
//delete hat
furnitureSet.delete("hat");
furnitureSet.add("sofa");
furnitureSet.add("bed");

console.log(furnitureSet.has("table"));

const animals = ["lion", "tiger", "horse", "chimp", "zebra", "tiger", "horse"];

const animalsCorrected = [...new Set(animals)];

console.log(animalsCorrected); */

/* const dogsKate = [4, 1, 15, 8, 3];

const inTwoYears = dogsKate.map((val) => val + 2);

console.log(inTwoYears);

const moreThan5 = dogsKate.filter(function (val) {
  if (val > 4) return val;
});

console.log(moreThan5);

const sumdogAges = dogsKate.reduce(function (, val) {
  return sum + val;
});

console.log(sumdogAges);
 */

/* const dogAges = [5, 2, 4, 1, 15, 8, 3];

const dogAges2 = [16, 6, 10, 5, 6, 1, 4];

const calcAverageHumanAge = function (ages) {
  //calculate dog ages in human years
  let humanYears = ages.map((dogAge) =>
    dogAge <= 2 ? 2 * dogAge : 16 + dogAge * 4
  );
  //exclude all ages less than 18 human years
  let humanYearsCorrected = humanYears.filter((dogAge) => dogAge >= 18);

  let averageHumanYear = humanYearsCorrected.reduce(
    (acc, dogAge, arr) => (acc += dogAge / arr.length),
    0
  );
  //calculate average human age for the dog
  return averageHumanYear;
};

console.log(calcAverageHumanAge(dogAges));
console.log(calcAverageHumanAge(dogAges2));
 */
const euroToUsd = 1.23;
let deposit = [200, 300, 1500, -300, -400, -100, 500];

let totalUSD = deposit
  .filter((amt) => amt > 0)
  .map((amt, i, arr) => {
    console.log(arr);
    return amt * euroToUsd;
  })
  .reduce((acc, cur, i, arr) => {
    console.log(arr);
    return (acc += cur);
  }, 0);

console.log(totalUSD);
