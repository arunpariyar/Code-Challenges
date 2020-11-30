console.log("Code Challange 4");

// the bill amount
const billAmount = Number(prompt("Please enter the amount"));

const inLimit = billAmount > 50 && billAmount < 300;

const tip = inLimit ? 0.15 * billAmount : 0.20 * billAmount;

console.log(`The bill was ${billAmount}, the tip was ${tip} and the total value is ${billAmount + tip}`);
