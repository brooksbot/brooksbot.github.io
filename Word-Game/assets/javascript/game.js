
// Get references for DOM elements
var $newGameButton = document.getElementById("new-game-button");
var $placeholders = document.getElementById("placeholders");
var $guessedLetters = document.getElementById("guessed-letters");
var $guessesLeft = document.getElementById("guesses-left");
var $wins = document.getElementById("wins");
var $losses = document.getElementById("losses");


// create variables for game (wordBank, wins, losses, picked word, guesses left, game running,
//  picked word placeholder, guessed letter bank, incorrect letter bank)
var wordBank = ["Daenerys Targaryen", "Jon Snow" , "Tyrion Lannister" , "Cersei Lannister" , "Arya Stark", "Sansa Stark"];
var wins = 0;
var losses = 0;
var guessesLeft = 10;
var gameRunning = false;
var pickedWord = " ";
var pickedWordPlaceholderArr = [];
var guessedLetterBank = [];
var incorrectLetterBank = [];


// newGame function to reset all stats, pick new word, and create placeholders)
function newGame() {
    gameRunning = true;
    guessesLeft = 10;
    guessedLetterBank = [];
    incorrectLetterBank = [];
    pickedWordPlaceholderArr = [];

    // pick a new word....
    pickedWord = wordBank[Math.floor(Math.random() * wordBank.length)];

    // create a placeholder....
    for (var i = 0; i < pickedWord.length; i++) {
        if (pickedWord[i] === " ") {
            pickedWordPlaceholderArr.push(" ");
        }
        else {
            pickedWordPlaceholderArr.push("_");
        }
    }

    //Write all game info to the DOM
    $guessesLeft.textContent = guessesLeft;
    $placeholders.textContent = pickedWordPlaceholderArr.join(" ");
    $guessedLetters.textContent = incorrectLetterBank;
}






// letterGuess function -- takes in the letter user pressed and sees if it is in the selected word
function letterGuess(letter) {
    console.log(letter);

    if (gameRunning === true && guessedLetterBank.indexOf(letter)=== -1) {

        guessedLetterBank.push(letter);

        //check if guessed letter is in picked word

        for (var i = 0; i < pickedWord.length; i++) {
            if (pickedWord[i].toLowerCase() === letter.toLowerCase()) {
                pickedWordPlaceholderArr[i] = pickedWord[i];
            }
        }

        $placeholders.textContent = pickedWordPlaceholderArr.join(" ");



    }
     else {  //(!gameRunning) would accomplish the same thing as (gameRunning === false)
      if (gameRunning === false) {
          alert("The game is not running, click on the New Game Button to Start Over.");
      } else {
          alert("You've already guessed this letter, try a new one!");
        }   
    }

}
// checkIncorrect letter
function checkIncorrect(letter) {
    if (
      pickedWordPlaceholderArr.indexOf(letter.toLowerCase()) === -1 
      &&
      pickedWordPlaceholderArr.indexOf(letter.toUpperCase()) === -1
    ) {
    guessesLeft --;
    incorrectLetterBank.push(letter);
    $guessedLetters.textContent = incorrectLetterBank.join(" ");
    $guessesLeft.textContent = guessesLeft;

    }
}

// checkLose
function checkLoss() {
    if (guessesLeft === 0) {
        losses++;
        gameRunning = false;
        $losses.textContent = losses;
        $placeholders.textContent = pickedWord;
    }

}

// checkWin
function checkWin() {
    if (pickedWord.toLowerCase() === pickedWordPlaceholderArr.join(" ").toLowerCase())
    {
        wins++;
        gameRunning = false;
        $wins.textContent = wins;
    }

}


// add eventListener for new game button
$newGameButton.addEventListener("click", newGame);

// add onkeyup event to trigger letterGuess
document.onkeyup = function(event) {
    // console.log(event);

    if (event.keyCode >= 65 && event.keyCode <= 90) {
        letterGuess(event.key);
    }
}
// LINK html to game.js page and make sure that the relative paths are correct!!//
