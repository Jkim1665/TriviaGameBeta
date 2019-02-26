var section = $("#questionHere");

//questions array
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

//var will hold time and other will hold instructuions for the game.

var timer;

var game = {

// Variable that will hold timer, correct, and inside global var.
  correct: 0,
  incorrect: 0,
  counter: 120,

  countdown: function() {
    game.counter--;
    $("#counter-number").html(game.counter);
    if (game.counter === 0) {
      game.done();
    }
  },

  start: function() {
    timer = setInterval(game.countdown, 1000);

    $("#background").prepend("<h2>Time Remaining: <span id='counter-number'>120</span> Seconds</h2>");

    $("#start").remove();

    for (var i = 0; i < questions.length; i++) {
      section.append("<h2>" + questions[i].question + "</h2>");
      for (var j = 0; j < questions[i].answers.length; j++) {
        section.append("<input type='radio' name='question-" + i +
        "' value='" + questions[i].answers[j] + "''>" + questions[i].answers[j]);
      }
    }

    section.append("<button id='done'>Done</button>");
  },

  done: function() {

    $.each($("input[name='question-0']:checked"), function() {
      if ($(this).val() === questions[0].correctAnswer) {
        game.correct++;
      }
      else {
        game.incorrect++;
      }
    });

    $.each($("input[name='question-1']:checked"), function() {
      if ($(this).val() === questions[1].correctAnswer) {
        game.correct++;
      }
      else {
        game.incorrect++;
      }
    });

    $.each($("input[name='question-2']:checked"), function() {
      if ($(this).val() === questions[2].correctAnswer) {
        game.correct++;
      }
      else {
        game.incorrect++;
      }
    });

    $.each($("input[name='question-3']:checked"), function() {
      if ($(this).val() === questions[3].correctAnswer) {
        game.correct++;
      }
      else {
        game.incorrect++;
      }
    });

    $.each($("input[name='question-4']:checked"), function() {
      if ($(this).val() === questions[4].correctAnswer) {
        game.correct++;
      }
      else {
        game.incorrect++;
      }
    });

    $.each($("input[name='question-5']:checked"), function() {
      if ($(this).val() === questions[5].correctAnswer) {
        game.correct++;
      }
      else {
        game.incorrect++;
      }
    });

    $.each($("input[name='question-6']:checked"), function() {
      if ($(this).val() === questions[6].correctAnswer) {
        game.correct++;
      }
      else {
        game.incorrect++;
      }
    });

    $.each($("input[name='question-7']:checked"), function() {
      if ($(this).val() === questions[7].correctAnswer) {
        game.correct++;
      }
      else {
        game.incorrect++;
      }
    });

    this.result();

  },

  result: function() {

    clearInterval(timer);

    $("#background h2").remove();

    section.html("<h2>How'd you do?</h2>");
    section.append("<h3>Correct Answers: " + this.correct + "</h3>");
    section.append("<h3>Incorrect Answers: " + this.incorrect + "</h3>");
    section.append("<h3>Unanswered: " + (questions.length - (this.incorrect + this.correct)) + "</h3>");
  }
};

// CLICK EVENTS

$(document).on("click", "#start", function() {
  game.start();
});


$(document).on("click", "#done", function() {
  game.done();
});
