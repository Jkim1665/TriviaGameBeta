var section = $("questionWillGoHere");

var questions = [{
    question: "What does MVP in project Management?",
    answers: ["Most Valuable Player", "Most Valuable Person", "Minimum Viable product", "Maximum viable product"],
    correctAnswer: "Minimum Viable Product"
}, {
    question: "Is programming a Super Power?",
    answers: ["Absolutely!", "No.", "Kinda?", "Yes"],
    correctAnswer: "Absolutely!"
}, {
    question: "What does lexical mean?",
    answers: ["new", "grammar", "enviornment?", "compiler"],
    correctAnswer: "grammar!"
}, {
    question: "What is Java?",
    answers: ["jS", "node", "mySQL", "similar to learning how to survive with only a spoon"],
    correctAnswer: "similar to learning how to survive with only a spoon"
}, {
    question: "What does the X mean in AJAX?",
    answers: ["XTML", "XML", "X-men", "Xtraaaaaaa"],
    correctAnswer: "XML"
}];

var timer;

var startGame = {

    counter:120,
    correct: 0,
    incorrect: 0,

    countdown: function() {
        game.counter--;
        $()
    }

}


var quiz = new Quiz(questions);

populate();

function Quiz(questions) {
    this.score = 0;
    this.questions = questions;
    this.questionIndex = 0;
}

Quiz.prototype.getQuestionIndex = function() {
    return this.questions(this.questionIndex);
}

Quiz.prototype.isEnded = function () {
    return this.questions.length === this.questionIndex;
}

Quiz.prototype.guess = function(answer) {
    this.questionIndex++;

    if(this.getQuestionIndex().correctAnswer(answer)) {
        this.score++;
        }
    }



    function Question (text, choices, answer) {
        this.text = text;
        this.choices = choices;
        this.answer = answer;
    }
    
    Question.prototype.correctAnswer = function(choice) {
        return choice === this.answer;
    }
    
    function populate() {
        if(quiz.isEnded()) {
            // showScores() ;
        }
        else {
            //show question
            var element = document.getElementById("question");
            element.innerHTML = quiz.getQuestionIndex().text;
        }
    }