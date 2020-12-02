console.log("Array Code Challanges");

const calcTip = function(amount){
    const inLimit = amount >= 50 && amount <= 300;
    const tip = inLimit ? amount * 0.15 : amount * 0.20;
    return tip;
}

const bills = [125,555,44];

const tips = [calcTip(bills[0]), calcTip(bills[1]), calcTip(bills[bills.length - 1])];

const total = [ bills[0] + tips[0], bills[1] + tips[1], bills[2]+tips[2]];

console.log(total);