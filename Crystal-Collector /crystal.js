// psuedo coding: 
// 4 Crystals  displayed as buttons on page.
/* show random number at game start
clicking on crystals will add set value of points to player's score
*/

// var randomResult;
// var lose;
// var win;
// // console.log(randomResult)
// for (var i = 0; i < 4; i++) {

//     var crystal = $("<div>");
//         crystal.attr("class", 'crystal')
//     $(".crystals").append(crystal);

// }

//Global Variables
//----------------------------------------------------------

//Crystals
//---------------------------------------------------------
var crystal = {
    blue:
    {
        name: "Blue",
        value: 0
    },
    green:
    {
        name: "Green",
        value: 0
    },
    red:
    {
        name: "Red",
        value: 0
    },
    yellow: 
    {   name: "Yellow",
        value: 0
},    
};


// Scores: Current and Target
var currentScore     = 0;
var targetScore      = 0;

// Wins and Losses
var winCount    = 0;
var lossCount   = 0;


//Functions
//----------------------------------------------------------

// Helper function for getting random numbers
var getRandom = function(min,max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

// Starts the game (and restarts the game)
var startGame = function() {

// Reset the Current Score
currentScore = 0;

// Set a new Target Score between 19 and 120
targetScore = getRandom(19, 120);

// Set different values for each of the crystals (between 1 and 12)
crystal.blue.value = getRandom(1, 12);
crystal.green.value = getRandom(1, 12);
crystal.red.value = getRandom(1, 12);
crystal.yellow.value = getRandom(1, 12);

// Change the HTML to reflect all of these changes
$("#yourScore").html(currentScore);
$("#targetScore").html(targetScore);

// Testing console
console.log("---------------------------------");
console.log("Target Score: " + targetScore);
console.log("Blue: " + crystal.blue.value + " | Green: " + crystal.green.value + " | Red: " + crystal.red.value + " | Yellow: " + crystal.yellow.value);
console.log("----------------------------------");
}

// Add values to responding to clicks on the crystals
var addValues = function(crystal) {

    // Change currentScore
    currentScore = currentScore + crystal.value;

    // Change the HTML to reflect changes in currentScore
    $("#yourScore").html(currentScore);

    // Call the checkWin function
    checkWin();

    // Testing console
    console.log("Your Score: " + currentScore);
}

var checkWin = function() {

    // Check if currentScore is larger than targetScore
    if(currentScore > targetScore) {
        alert("Sorry, You lost!");
        console.log("You Lost");

        // Add to the Loss Counter
        lossCount++;

        // Change Loss Count in HTML
        $("#lossCount").html(lossCount);

         // Restart the Game
         startGame();
    }

    else if(currentScore == targetScore) {
        alert("Congratulations---You Won!");
        console.log("You Won");

        //// Add to the Win Counter
        winCount++;

        // Change Win Count in HTML
        $("#winCount").html(winCount);

        // Restart the Game
        startGame();
    }
}

//Main Process
//------------------------------------------------------------

// Starts the game the 1st time
startGame();

$("#blue").click(function() {
    addValues(crystal.blue);
    
});

$("#green").click(function() {
    addValues(crystal.green);
});

$("#red").click(function() {
    addValues(crystal.red);
});

$("#yellow").click(function() {
    addValues(crystal.yellow);
});
