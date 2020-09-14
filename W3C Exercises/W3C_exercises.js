/* Write a JavaScript program to display the current day and time in the following format. 
Sample Output : Today is : Tuesday. 
Current time is : 10 PM : 30 : 38 */

let dayLabel = document.querySelector(".day");
let timeLabel = document.querySelector(".time");
const weekdays = ['Sunday','Monday','Tuesday','Wednesday','Thursday','Friday','Saturday'];
let now = new Date();

function updateDay(){
    dayLabel.innerText = weekdays[now.getDay()];
};

updateDay();

let time = setInterval(updateTime,1000);

function updateTime(){
    var d = new Date();
    timeLabel.innerText = d.toLocaleTimeString();
};

