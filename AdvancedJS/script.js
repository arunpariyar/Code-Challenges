var random, userInput ;

gamePlaying = true;



function Question(question, answerOptions, answer){
    this.question = question;
    this.answerOptions = answerOptions;
    this.answer = answer;
}

Question.prototype.display = function() {
    console.log(this.question);
    for (var i = 0; i < this.answerOptions.length; i++){
        console.log(i + ': '+ this.answerOptions[i] );
    };
}

Question.prototype.checkAnswer = function(val) {
    if(val === this.answer){
        return true;
    }else{ 
        return false;
    }
}

var q1 = new Question(
    "Which is the largest mammel?",
    ['Elephant','Whale','Panda'],
    1);

var q2 = new Question(
        "Which Programming Language is Dyanmically typed ?",
        ['SQL','JS','Java'],
        1);

var q3 = new Question(
        "Which among the following allows us to pre-assign function values",
        ['Bind','Call','Apply'],
        0);

var questions = [q1, q2, q3];

init();

function init(){
    r = randomNumber();
    askQuestion(r);
    userInput = Number(prompt("Please enter the right answer ?"));
    result = questions[r].checkAnswer(userInput);
    if(result === true){
        console.log("Correct");
        init();
    }else{
        console.log("Incorrect");
        init();
    }
}

function askQuestion(r){
    questions[r].display();
}

function randomNumber(){
    return random =  Math.floor(Math.random() * questions.length);
}
 









