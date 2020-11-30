console.log(`Coding Challange 3`)

const scoreDolphins1 = 150;
const scoreDolphins2 = 150;
const scoreDolphins3 = 150;

const scoreKoalas1 = 150;
const scoreKoalas2 = 150;
const scoreKoalas3 = 150;

const avgDolphins = (scoreDolphins1 + scoreDolphins2 + scoreDolphins3) / 3;

const avgKoalas = (scoreKoalas1+scoreKoalas2 + scoreKoalas3) / 3;

console.log(`The average score of Dolphins is ${avgDolphins}`);

console.log(`The average score of Koalas is ${avgKoalas}`);

// if(avgDolphins > avgKoalas){
//     console.log("Dolphins wins, Koalas loose");
// } else if(avgDolphins === avgKoalas) {
//     console.log("We have a Draw")
// } else {
//     console.log("Koalas win, Dolphins loose");
// }

//Bonus Challange 1

/* 
if((avgDolphins > 100) && (avgDolphins > 100)){
    if(avgDolphins > avgKoalas){
            console.log("Dolphins wins, Koalas loose");
        } else if(avgDolphins === avgKoalas) {
            console.log("We have a Draw")
        } else {
            console.log("Koalas win, Dolphins loose");
        }
} else {
    console.log("No one wins ☹️");
} 
*/

if(avgDolphins > avgKoalas && avgDolphins > 100){
    console.log(`The Dolphins win 🏆`);
} else if(avgKoalas > avgDolphins && avgKoalas > 100){
    console.log(`The Koalas win 🏆`);
} else {
    console.log(`Both the team wins`);
}


