    // populateButtons(topics, "searchButton", "#buttonArea");
    var topics = ["Dog", "Monkey", "Lion", "Cat", "Tiger", "Donkey", "Donald Trump", "Harry Potter"];
  
    // function to make buttons and add to page
    function populateButtons(arrayToUse, classToAdd, areaToAddTo) {
      $(areaToAddTo).empty();
  
      for (var i = 0; i < arrayToUse.length; i++) {
        var a = $("<button>");
        a.addClass(classToAdd);
        a.attr("data-type", arrayToUse[i]);
        a.text(arrayToUse[i]);
        $(areaToAddTo).append(a);
      }
    }
  
    $(".searchButton").click(function() {
      $(".searchButton").removeClass("active");
      $(this).addClass("active");
  
      var type = $(this).attr("data-type");
      var queryURL = "http://api.giphy.com/v1/gifs/search?q=" + type + "&api_key=Krcnyy2pICQhILl4ZQ6wVVmCDW7zibS7&limit=10";
  
      $.ajax({
        url: queryURL,
        method: "GET"
      })
      .done(function(response) {
        var results = response.data;
  
        for (var i = 0; i < results.length; i++) {
          var searchDiv = $("<div class=\"search-item\">");  
          var rating = results[i].rating;
          var p = $("<p>").text("Rating: " + rating);
          var animated = results[i].images.fixed_height.url;
          var still = results[i].images.fixed_height_still.url;
          var image = $("<img>");

          image.attr("src", still);
          image.attr("data-still", still);
          image.attr("data-animate", animated);
          image.attr("data-state", "still");
          image.addClass("searchImage");
  
          searchDiv.append(p);
          searchDiv.append(image);
  
          $("#searches").append(searchDiv);
        }
      });
    });
  
    $(".searchImage").click(function() { 
      var state = $(this).attr("data-state");
  
      if (state === "still") {
        $(this).attr("src", $(this).attr("data-animate"));
        $(this).attr("data-state", "animate");
      }
      else {
        $(this).attr("src", $(this).attr("data-still"));
        $(this).attr("data-state", "still");
      }
    });
  
    $("#add-search").on("click", function() {
      var newSearch = $("#search-input").eq(0).val();
        topics.push(newSearch);
        $("#buttonArea").empty();
        for (var i = 0; i < topics.length; i++) {
          var a = $("<button>");
          a.addClass('searchButton');
          a.attr("data-type", topics[i]);
          a.text(topics[i]);
          $("#buttonArea").append(a);
        }
      }); 
      populateButtons(topics, "searchButton", "#buttonArea");