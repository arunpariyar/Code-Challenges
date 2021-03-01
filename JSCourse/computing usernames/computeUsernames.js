"use strict";
/* 
let account2 = {
  owner: "james gorden",
};

let account3 = {
  owner: "randy smith",
};

let account4 = {
  owner: "jessice james",
};

const createUsernames = function (accs) {
  accs.forEach(
    (acc) =>
      (acc.username = acc.owner
        .toLowerCase()
        .split(" ")
        .map((val) => val[0])
        .join(""))
  );
};

let accounts = [account1, account2, account3, account4];

createUsernames(accounts);
console.log(accounts);

const withdrawel = amounts.filter((amt) => amt < 0);

console.log(withdrawel);

*/
let balanceLabel = document.querySelector(".total-balance");

const printTotalBalance = function (account) {
  let balance = account.transactions.reduce((acc, transc) => acc + transc, 0);
  balanceLabel.textContent = `${balance}€`;
};

let account1 = {
  owner: "mike smith peter james",
  transactions: [200, -300, -400, -400, 1500, 300],
  balance: 0,
};

printTotalBalance(account1);
