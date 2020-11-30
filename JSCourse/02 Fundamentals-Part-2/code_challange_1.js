console.log('Code Challange 1');

const calcAverage = (score1,score2,score3) => (score1 + score2 + score3) / 3;

const avgDolphins = calcAverage(10,10,10);
const avgKoalas = calcAverage(40,40,40);

const checkWinner = (avgDolphins, avgKoalas) => {
    if(avgDolphins > avgKoalas && avgDolphins > (avgKoalas * 2)){
        return `Dolphins win ( ${avgDolphins} vs ${avgKoalas}) 🏆`;
    } else if(avgKoalas > avgDolphins && avgKoalas > (avgDolphins * 2)){
        return `Koalas win (${avgKoalas} vs. ${avgDolphins}) 🏆`;
    } else {
        return `We dont have a winner 🤜 🤛`;
    }
}

const winner = checkWinner(avgDolphins, avgKoalas);

console.log(winner);


