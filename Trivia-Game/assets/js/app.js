$("#start").click(function(){
    // console.log("You clicked?")
    // $('subwrapper').remove();
    for (var i = 0; i< questions.length; i++){
        $('#subwrapper').append('<h2>' + questions[i].question + '</h2>');
        for (var j = 0; j < questions[i].answers.length; j++){
            $('#subwrapper').append("<input type='radio' name='question- "+i+"' value='" +questions[i].answers[j]+"'>"+questions[i].answers[j])
        }
    }
})

var questions = [{
    question: "What was the first full-lenth CGI movie?",
    answer:["A Bug's Life","Monter Inc", "Toy Story", "The Lion King"],
    correctAnswer:"Toy Story"
}, {
    question: "What was the first full-lenth CGI movie?",
    answer:["A Bug's Life","Monter Inc", "Toy Story", "The Lion King"],
    correctAnswer:"Toy Story"
}, {
    question: "What was the first full-lenth CGI movie?",
    answer:["A Bug's Life","Monter Inc", "Toy Story", "The Lion King"],
    correctAnswer:"Toy Story"
}, {
    question: "What was the first full-lenth CGI movie?",
    answer:["A Bug's Life","Monter Inc", "Toy Story", "The Lion King"],
    correctAnswer:"Toy Story"
}, {
    question: "What was the first full-lenth CGI movie?",
    answer:["A Bug's Life","Monter Inc", "Toy Story", "The Lion King"],
    correctAnswer:"Toy Story"
}, {
    question: "What was the first full-lenth CGI movie?",
    answer:["A Bug's Life","Monter Inc", "Toy Story", "The Lion King"],
    correctAnswer:"Toy Story"
}];