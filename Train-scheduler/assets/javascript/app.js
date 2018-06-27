 // Initialize Firebase
 var config = {
    apiKey: "AIzaSyB7CyhSh3KIJY0tewIOtl3ivzu4RTioe9s",
    authDomain: "train-time-c8a6d.firebaseapp.com",
    databaseURL: "https://train-time-c8a6d.firebaseio.com",
    projectId: "train-time-c8a6d",
    storageBucket: "train-time-c8a6d.appspot.com",
    messagingSenderId: "921928549156"
  };
  firebase.initializeApp(config);

  var trainData = firebase.database();

  $(document).on("click", "#addTrainBtn", function(){
      var trainName = $("#trainNameInput").val().trim();
      var destination = $("#destinationInput").val().trim();
      var firstTrain = moment($("#firstTrainInput").val().trim(),"HH:mm").subtract(10,"years").format("X");
      var frequency = $("#frequencyInput").val().trim();

      var newTrain = {
          name: trainName,
          destination: destination,
          firstTrain: firstTrain,
          frequency: frequency
      }
	  // Uploads train data to the database
	  trainData.ref().push(newTrain);
	  
	  //Logs everything to console
	  console.log(newTrain.name);
	  console.log(newTrain.destination);
	  console.log(newTrain.firstTrain);
	  console.log(newTrain.frequency);

      alert("Train Added!");
	  // Clears all of the text-boxes
      $("#trainNameInput").val("");
      $("#destinationInput").val("");
      $("#firstTrainInput").val("");
      $("#frequencyInput").val("");
	  // Prevents moving to a new page
      return false;
  });

  trainData.ref().on("child_added",function(snapshot, prevChildKey){
      var trainName = snapshot.val().name;
      var destination = snapshot.val().destination;
      var frequency = snapshot.val().frequency;
      var firstTrain = snapshot.val().firstTrain;
      
      var remainder = moment().diff(moment.unix(firstTrain),"minutes")%frequency;
      var minutes = frequency -remainder;
      var arrival = moment().add(minutes, "m").format("hh:mm A");

	// Add each train's data into the table
	$("#trainTable > tbody").append("<tr><td>" + trainName + "</td><td>" + destination + "</td><td>" + frequency + "</td><td>" + firstTrain + "</td><td>" + trainMinsAway + "</td><td>");
  });












