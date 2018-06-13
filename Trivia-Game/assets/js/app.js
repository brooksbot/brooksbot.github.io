$("#start").click(function(){
    game.start();
    
})

// $("#done").click(function() {
//     game.endgame();
// })



var questions = [{
    question: "What does O.W.L stand for?",
    answers:["Ordinary Wizarding Level", "Official Wharthog Level", "Outstanding Wizard Levitation", "Owler Wolf Lace"],
    correctAnswer:"Ordinary Wizarding Level"
}, {
    question: "What is the name of Fred and George's joke shop?",
    answers:["Weasleys' Joke Shop","Fred and George's Gag shop", "Weasleys' Wizard Wheezes", "F.G. Inc."],
    correctAnswer:"Weasleys' Wizard Wheezes"
}, {
    question: "What is Harry's 2nd born child's name?",
    answers:["James Sirius Potter","Albus Severus Potter", "Lily Luna Potter", "James Lily Potter"],
    correctAnswer:"Ginny Weasley"
}, {
    question: "How does Harry manage to breathe underwater during the second task of the Triwizard Tournament?",
    answers:["He kisses a mermaid", "He transfigures into a shark", "He performs the bubble head charm", "He eats gillyweed"],
    correctAnswer:"He eats gillyweed"
}, {
    question: "Who guards the entrance to the Gryffindor common room?",
    answers:["The Fat Lady", "The Bloody Baron", "Nearly Headless Nick", "Professor McGonnegal"],
    correctAnswer:"The Fat Lady"
}, {
    question: "Who is NOT a member of the Order of the Phoenix?",
    answers:["Cornelius Fudge","Professor Snape", "Mad Eye Moody", "Remus Lupin"],
    correctAnswer:"Cornelius Fudge"
}];


var game = {
    correct: 0,
    incorrect: 0,
    counter: 60,
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
        $('#subwrapper').append('<br><button id="endgame">All Done!</button>');

        $(document).on("click", "#endgame", function() {
        game.done();
        });           
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



//   $(document).ready(function(){
//     $('<br><button id="endgame">All Done!</button>').on("click", function(){
//         game.done();
//     });
// });



