 // Get references for DOM elements
var $newGameButton = document.getElementById("new-game-button");
var $placeholders = document.getElementById("placeholders");
var $guessedLetters = document.getElementById("guessed-letters");
var $guessesLeft = document.getElementById("guesses-left");
var $wins = document.getElementById("wins");
var $losses = document.getElementById("losses");



var game = {
    wordBank: ['Daenerys Targaryen', 'Jon Snow', 'Tyrion Lannister', 'Cersei Lannister', 'Arya Stark', 'Sansa Stark'],
    wins: 0,
    losses: 0,
    guessesLeft: 10,
    gameRunning: false,
    pickedWord: '',
    pickedWordPlaceholderArr: [],
    guessedLetterBank: [],
    incorrectLetterBank: [],
    // newGame function to reset all stats, pick new word, and create placeholders)
    newGame: function() {
        this.gameRunning = true;
        this.guessesLeft = 10;
        this.guessedLetterBank = [];
        this.incorrectLetterBank = [];
        this.pickedWordPlaceholderArr = [];

       // pick a new word....
       this.pickedWord = this.wordBank[Math.floor(Math.random() * this.wordBank.length)];

       // create a placeholder....
       for (var i = 0; i < this.pickedWord.length; i++) {
           if (this.pickedWord[i] === ' ') {
               this.pickedWordPlaceholderArr.push(' ');
           }  else {
              this.pickedWordPlaceholderArr.push('_');
           }
       }
       //Write all game info to the DOM
       $guessesLeft.textContent = this.guessesLeft;
       $placeholders.textContent = this.pickedWordPlaceholderArr.join(' ');
       $guessedLetters.textContent = this.incorrectLetterBank;
   },
   letterGuess: function(letter) {
       // letterGuess function -- takes in the letter user pressed and sees if it is in the selected word
      if (this.gameRunning === true && this.guessedLetterBank.indexOf(letter) === -1) {
          // game logic
        this.guessedLetterBank.push(letter);

        //check if guessed letter is in picked word
        for (var i = 0; i < this.pickedWord.length; i++) {
            // convert both values to lower case to compare them correctly
            if (this.pickedWord[i].toLowerCase() === letter.toLowerCase()) {
                // if a match, switch the character in the placeholder with the actual letter
                this.pickedWordPlaceholderArr[i] = this.pickedWord[i];
            }
        }

        $placeholders.textContent = this.pickedWordPlaceholderArr.join(' ');
        // pass letter into checkIncorrect function
        this.checkIncorrect(letter);
        } else {           
        if (!this.gameRunning) {
          alert("The game is not running, click on the New Game Button to Start Over.");
         } else {
          alert("You've already guessed this letter, try a new one!");
        }   
      }
   },
   checkIncorrect: function(letter) {
       //check if the letter guessed made it into the placeholder array (if correct)
        if (this.pickedWordPlaceholderArr.indexOf(letter.toLowerCase()) === -1 
        &&
        this.pickedWordPlaceholderArr.indexOf(letter.toUpperCase()) === -1) {
        this.guessesLeft --;
        this.incorrectLetterBank.push(letter);
        $guessedLetters.textContent = this.incorrectLetterBank.join(' ');
        $guessesLeft.textContent = this.guessesLeft;
    }
      // check to see if you lose
      this.checkLoss();
    },
        checkLoss: function() {
                // check if you lose
                if (this.guessesLeft === 0) {
                this.losses++;
                // end game
                this.gameRunning = false;
                $losses.textContent = this.losses;
                $placeholders.textContent = this.pickedWord;
            }
        // check if you win
        this.checkWin();
 },
    checkWin: function() {
    if (this.pickedWord.toLowerCase() === this.pickedWordPlaceholderArr.join(' ').toLowerCase()) {
        this.wins++;
        // end game
        this.gameRunning = false;
        $wins.textContent = this.wins;
    }
  }
};
            //(!gameRunning) would accomplish the same thing as (gameRunning === false)
            // add eventListener for new game button
    $newGameButton.addEventListener('click', function() {
    game.newGame();
 });

    // add onkeyup event to trigger letterGuess
    document.onkeyup = function(event) {
    // console.log(event);
    if (event.keyCode >= 65 && event.keyCode <= 90) {
        game.letterGuess(event.key);
    }
  };

        

