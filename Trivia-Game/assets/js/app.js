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
