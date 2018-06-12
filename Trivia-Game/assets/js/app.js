$("#start").click(function(){
    game.start();
    // console.log("You clicked?")
})

// $("#done").click(function() {
//     game.done();
// })



var questions = [{
    question: "What was the Disney movie with 'Buzz' as a main character?",
    answers:["A Bug's Life","Monster Inc", "Toy Story", "The Lion King"],
    correctAnswer:"Toy Story"
}, {
    question: "What is the best flavor of ice cream?",
    answers:["Vanilla","Chocolate", "Strawberry", "Mint Chip"],
    correctAnswer:"Mint Chip"
}, {
    question: "Who does Harry Potter end up marrying",
    answers:["Hermione","Voldemort", "Hagrid", "Ginny Weasley"],
    correctAnswer:"Ginny Weasley"
}, {
    question: "Which Disney movie featured the song 'Never had a friend like me'?",
    answers:["A Bug's Life","Monter Inc", "Alladin", "The Lion King"],
    correctAnswer:"Alladin"
}, {
    question: "Who is the most decorated Olympic swimmer?",
    answers:["Usain Bolt","Lindsey Vohn", "Michael Jordan", "Michael Phelps"],
    correctAnswer:"Michael Phelps"
}, {
    question: "Which band sings 'Believer'?",
    answers:["Nirvana","Imagine Dragons", "ABBA", "Del the Funky Homosapian"],
    correctAnswer:"Believer"
}];


var game = {
    correct: 0,
    incorrect: 0,
    counter: 120,
    countdown: function(){
        game.counter--;
        $('#counter').html(game.counter);
        if(game.counter <= 0) {
            console.log("Time's Up!");
            game.done();
        }
    },

    start: function(){
        timer = setInterval(game.countdown, 1000);
        $("#subwrapper").prepend('<h2> Time Remaining: <span id="counter"> 120</span> Seconds</h2>');
        $('#start').remove();
            for (var i = 0; i< questions.length; i++) {
              $('#subwrapper').append("<h2>" + questions[i].question + "</h2>");
                for (var j = 0; j < questions[i].answers.length; j++){
                  $("#subwrapper").append("<input type='radio' name='question-" + i + "' value='" + questions[i].answers[j]+ "''>" + questions[i].answers[j]);
             }    
        }
        $('#subwrapper').append('<br><button id="done">All Done</button>');           
    },

    done: function(){
        $.each($("input[name='question-0']:checked"),function(){
            if($(this).val() == questions[0].correctAnswer){
                game.correct++;
          } else {
              game.incorrect++;
          }
        });
        $.each($("input[name='question-1']:checked"),function(){
            if($(this).val() == questions[1].correctAnswer){
                game.correct++;
          } else {
              game.incorrect++;
          }
        });
        $.each($("input[name='question-2']:checked"),function(){
            if($(this).val() == questions[2].correctAnswer){
                game.correct++;
          } else {
              game.incorrect++;
          }
        });
        $.each($("input[name='question-3']:checked"),function(){
            if($(this).val() == questions[3].correctAnswer){
                game.correct++;
          } else {
              game.incorrect++;
          }
        });
        $.each($("input[name='question-4']:checked"),function(){
            if($(this).val() == questions[4].correctAnswer){
                game.correct++;
          } else {
              game.incorrect++;
          }
        });
        $.each($("input[name='question-5']:checked"),function(){
            if($(this).val() == questions[5].correctAnswer){
                game.correct++;
          } else {
              game.incorrect++;
          }
        });
        $.each($("input[name='question-6']:checked"),function(){
            if($(this).val() == questions[6].correctAnswer){
                game.correct++;
          } else {
              game.incorrect++;
          }
        });

    this.result();
    },

    result: function(){
        clearInterval(timer);
        $('#subwrapper h2').remove();

        $('#subwrapper').html("<h2>All done!</h2>");
        $('#subwrapper').append("<h3>Correct Answers: " + this.correct + "</h3>");
        $('#subwrapper').append("<h3>Incorrect Answers: " + this.incorrect + "</h3>");
        $('#subwrapper').append("<h3>Unanswered: " + (questions.length - (this.incorrect + this.correct)) + "</h3>");
    }

};

// $(document).on("click", "#endgame", function() {
//     game.done();
//   });

  $(document).ready(function(){
    $('<br><button id="done">All Done</button>').on("click", function(){
        game.done();
    });
});

// $(document).ready(function(){
//     $("p").on("click", function(){
//         alert("The paragraph was clicked.");
//     });
// });











































/*  var panel = $("#quiz-area");

// Question set
var questions = [{
  question: "What was the first full length CGI movie?",
  answers: ["A Bug's Life", "Monsters Inc.", "Toy Story", "The Lion King"],
  correctAnswer: "Toy Story"
}, {
  question: "Which of these is NOT a name of one of the Spice Girls?",
  answers: ["Sporty Spice", "Fred Spice", "Scary Spice", "Posh Spice"],
  correctAnswer: "Fred Spice"
}, {
  question: "Which NBA team won the most titles in the 90s?",
  answers: ["New York Knicks", "Portland Trailblazers", "Los Angeles Lakers", "Chicago Bulls"],
  correctAnswer: "Chicago Bulls"
}, {
  question: "Which group released the hit song, \"Smells Like Teen Spirit\"?",
  answers: ["Nirvana", "Backstreet Boys", "The Offspring", "No Doubt"],
  correctAnswer: "Nirvana"
}, {
  question: "Which popular Disney movie featured the song, \"Circle of Life\"?",
  answers: ["Aladdin", "Hercules", "Mulan", "The Lion King"],
  correctAnswer: "The Lion King"
}, {
  question: "Finish this line from the Fresh Prince of Bel-Air theme song: \"I whistled for a cab and when it came near, the license plate said...\"",
  answers: ["Dice", "Mirror", "Fresh", "Cab"],
  correctAnswer: "Fresh"
}, {
  question: "What was Doug's best friend's name?",
  answers: ["Skeeter", "Mark", "Zach", "Cody"],
  correctAnswer: "Skeeter"
}, {
  question: "What was the name of the principal at Bayside High in Saved By The Bell?",
  answers: ["Mr.Zhou", "Mr.Driggers", "Mr.Belding", "Mr.Page"],
  correctAnswer: "Mr.Belding"
}];

// Variable that will hold the setInterval
var timer;

var game = {

  correct: 0,
  incorrect: 0,
  counter: 120,

  countdown: function() {
    game.counter--;
    $("#counter-number").html(game.counter);
    if (game.counter === 0) {
      console.log("TIME UP");
      game.done();
    }
  },

  start: function() {
    timer = setInterval(game.countdown, 1000);

    $("#sub-wrapper").prepend("<h2>Time Remaining: <span id='counter-number'>120</span> Seconds</h2>");

    $("#start").remove();

    for (var i = 0; i < questions.length; i++) {
      panel.append("<h2>" + questions[i].question + "</h2>");
      for (var j = 0; j < questions[i].answers.length; j++) {
        panel.append("<input type='radio' name='question-" + i +
        "' value='" + questions[i].answers[j] + "''>" + questions[i].answers[j]);
      }
    }

    panel.append("<button id='done'>Done</button>");
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

    $("#sub-wrapper h2").remove();

    panel.html("<h2>All Done!</h2>");
    panel.append("<h3>Correct Answers: " + this.correct + "</h3>");
    panel.append("<h3>Incorrect Answers: " + this.incorrect + "</h3>");
    panel.append("<h3>Unanswered: " + (questions.length - (this.incorrect + this.correct)) + "</h3>");
  }
};

// CLICK EVENTS

$(document).on("click", "#start", function() {
  game.start();
});


$(document).on("click", "#done", function() {
  game.done();
});
*/
