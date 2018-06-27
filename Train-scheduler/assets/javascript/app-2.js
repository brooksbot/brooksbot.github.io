  // Steps to complete:
/*
1. Create Firebase link
2. Create button for adding new trains - then update the html + update the database
3. Create a way to retrieve trains from the train database.
4. Create a way to calculate the months worked. Using difference between start and current time. Then use moment.js formatting to set difference in months.
5. Calculate Total billed
*/
// 1. Link to Firebase
var trainData = new Firebase("https://trainscheduler.firebaseio.com/");

// 2. Button for adding trains
$("#addTrainBtn").on("click", function(){

	// Grabs user input
	var trainName = $("#trainNameInput").val().trim();
	var trainDest = $("#destInput").val().trim();
	var trainStart = moment($("#startInput").val().trim(), "DD/MM/YY").format("X");
	var trainFreq = $("#freqInput").val().trim();

	// Creates local "temporary" object for holding train data
	var newTrain = {
		name:  trainName,
		dest: trainDest,
		start: trainStart,
		freq: trainFreq
	}

	// Uploads train data to the database
	trainData.push(newTrain);

	// Logs everything to console
	console.log(newTrain.name);
	console.log(newTrain.dest);
	console.log(newTrain.start);
	console.log(newTrain.freq)

	// Alert
	alert("train successfully added");

	// Clears all of the text-boxes
	$("#trainNameInput").val("");
	$("#destInput").val("");
	$("#startInput").val("");
	$("#freqInput").val("");

	// Prevents moving to new page
	return false;
});


// 3. Create Firebase event for adding train to the database and a row in the html when a user adds an entry
trainData.on("child_added", function(childSnapshot, prevChildKey){

	console.log(childSnapshot.val());

	// Store everything into a variable.
	var trainName = childSnapshot.val().name;
	var trainDest = childSnapshot.val().dest;
	var trainStart = childSnapshot.val().start;
	var trainFreq = childSnapshot.val().freq;

	// train Info
	console.log(trainName);
	console.log(trainDest);
	console.log(trainStart);
	console.log(trainFreq);

	// Prettify the train start
	var trainStartPretty = moment.unix(trainStart).format("MM/DD/YY");
	// Calculate the months worked using hardconre math
	// To calculate the months worked
	var trainMonths = moment().diff(moment.unix(trainStart, 'X'), "months");
	console.log(trainMonths);

	// Calculate the total billed freq
	var trainBilled = trainMonths * trainFreq;
	console.log(trainBilled);

	// Calculate the time when Next train Arrives
	var trainNextArr

	// Calculate the time remaining until Next train Arrives
	var trainMinsAway

	// Add each train's data into the table
	//$("#trainTable > tbody").append("<tr><td>" + trainName + "</td><td>" + trainDest + "</td><td>" + trainStartPretty + "</td><td>" + TrainMonths + "</td><td>" + trainFreq + "</td><td>");
	$("#trainTable > tbody").append("<tr><td>" + trainName + "</td><td>" + trainDest + "</td><td>" + trainFreq + "</td><td>" + trainNextArr + "</td><td>" + trainMinsAway + "</td><td>");

});