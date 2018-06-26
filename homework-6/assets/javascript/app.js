$(document).ready(function(){
    // populateButtons(topics, 'searchButton', '#buttonArea');    

    var topics = ["Dog", "Monkey", "Lion", "Cat", "Tiger", "Donkey", "Donald Trump", "Harry Potter", "Wine"];
    //---------------------------------------------------
    //Function to make buttons and ad to the page
    function populateButtons(arrayToUse, classToAdd, areaToAddTo) {
        $(areaToAddTo).empty();

        for (var i = 0; i < arrayToUse.length; i++){
            var a = $('<button>');
            a.addClass(classToAdd);
            a.attr('data-type', arrayToUse[i]);
            a.text(arrayToUse[i]);
            $(areaToAddTo).append(a);
        }
    }

    $('.searchButton').click (function() {
        $('#searches').empty();
        $('.searchButton').removeClass('active');
        $(this).addClass('active');

        var type = $(this).data('type');
        var queryURL = 'http://api.giphy.com/v1/gifs/search?q=' + type + '&api_key=Krcnyy2pICQhILl4ZQ6wVVmCDW7zibS7&limit=20'
        
        $.ajax({
            url: queryURL, 
            method: 'GET',
        }).done(function(response) {

            for (var i = 0; i < response.data.length; i++){
                var searchDiv = $('<div class="search-item">');
                var rating = response.data[i].rating;
                var p = $('<p>').text('Rating:' + rating);
                var animated = response.data[i].images.fixed_height.url;
                var still = response.data[i].images.fixed_height_still.url;
                var image = $('<img>');
                
                image.attr('src', still);
                image.attr('data-still', still);
                image.attr('data-animated', animated);  
                image.attr('data-state', 'still');
                image.addClass('searchImage');
                
                searchDiv.append(p);
                searchDiv.append(image);
                $('#searches').append(searchDiv);
            }
        });
    });

    $('.searchImage').click(function(){
        var state = $(this).attr('data-state');
        
        if (state === 'still') {
            $(this).attr('src', $(this).attr('animated'));
            // $(this).attr("src", $(this).attr("data-animate"));
            $(this).attr('data-state', 'animated');
        } else {
            $(this).attr('src', $(this).attr('still'));
            // $(this).attr("src", $(this).attr("data-still"));
            $(this).attr('data-state', 'still');
        }
    });

    $('#addSearch').on('click', function(event) {
        // event.preventDefault();
        var newSearch = $('#search-input').eq(0).val();

        if (newSearch.length > 2) {
        topics.push(newSearch);
        }

        populateButtons(topics, 'searchButton', '#buttonArea');
        // return false;  
    });
    populateButtons(topics, 'searchButton', '#buttonArea');


});
