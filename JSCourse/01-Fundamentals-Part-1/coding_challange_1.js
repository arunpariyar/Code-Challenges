console.log("Coding Challange 1 ");

//Mark's data
const markWeight = 78;
const markHeight = 1.69;
const markBMI = markWeight / markHeight ** 2;
console.log("Mark's BMI is " + markBMI);

//John's data
const johnWeight = 92;
const johnHeight = 1.95;
const johnBMI = johnWeight / (johnHeight * johnHeight);
console.log("John's BMI is " + johnBMI);

//Comparing it Mark's BMI is Higher than John's
const markHigherBMI1 = markBMI > johnBMI;
console.log(markHigherBMI1);
