console.log('Code Challange 4')

const bills = [22, 295, 176, 440, 37, 105, 10, 1100, 86, 52];
const tips = [];
const totals = [];

const calcTip = function(amount){
    const inLimit = amount >= 50 && amount <= 300;
    const tip = inLimit ? amount * 0.15 : amount * 0.20;
    return tip;
}

for(let i = 0; i < bills.length; i++){
    //calculate the tip and push it into the tips array
    tips.push(calcTip(bills[i])) ;
    // calculate the total and push is to the totals array
    totals.push(bills[i]+tips[i]); 
}

const calcAverage = function(arr){
    //create a variable for the average
    let billsSum = 0;
    //loop all the array and add the numbers together;
    for(let i = 0; i < arr.length; i++){
        //add the value to bills sum
        billsSum += arr[i];
    }
    
    return billsSum/arr.length;
    // calculate the average
}

const billsAverage = calcAverage(totals);

console.log(billsAverage);





