
    var random, userInput, score ;

    score = 0;

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
            userInput = prompt("Please enter the right answer ?");
            if(userInput === "exit"){
                console.log("Game Over");
            }else{
                inputNumber = Number(userInput);
                result = questions[r].checkAnswer(inputNumber);
                if (result){
                    console.log("Correct Answer");
                    calScore(result);
                    init();
                } else {
                    console.log("Incorrect Answer");
                    calScore(result);
                    init();
                }  
            }
    }
    
    function askQuestion(r){
        questions[r].display();
    }
    
    function randomNumber(){
        return random =  Math.floor(Math.random() * questions.length);
    }

    function calScore(x){
        var print = "Your score is: ";
            if(x){
                return console.log(print + (score+=1));
            }else{
                return console.log(print + score);
            }
    }


 









