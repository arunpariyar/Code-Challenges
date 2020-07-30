function Question(question, answerOptions, answer){
    this.question = question;
    this.answerOptions = answerOptions;
    this.answer = answer;
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

var random =  Math.floor(Math.random() * questions.length);

Question.prototype.display = function() {
    console.log(this.question);
    for (var i = 0; i < this.answerOptions.length; i++){
        console.log(i + ': '+ this.answerOptions[i] );
    };
}

questions[random].display();



