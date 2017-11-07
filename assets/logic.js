
$(document).ready(function(){
var topics = ["madonna", "music", "cat"];
console.log(topics);

function createButton () {
    
    for (var i = 0; i < topics.length; i++) {
        var newButton = $("<button>");
        newButton.attr("class","seach_buttons");
        newButton.attr("value",topics[i]);
        newButton.text(topics[i]);

        $("#buttons").prepend(newButton);
    }

}


createButton ();
$(document).on("click", ".seach_buttons", function(){
    $("#gif").empty();  
    console.log(this);
    var topic = $(this).attr("value");
    var queryURL = "https://api.giphy.com/v1/gifs/search?q=" + topic + "&api_key=dc6zaTOxFJmzC&limit=10";
    
        $.ajax({
            url: queryURL,
            method : "GET",
        }).
        done(function(response){
            for (var j = 0; j < response.data.length; j++) {
            var topicDiv = $("<div>");
            var p = $('<p>').text("Rating: " + response.data[j].rating );
            var topicImage = $("<img>");
            topicImage.attr("src", response.data[j].images.fixed_height_still.url);
            topicDiv.append(p);
            topicDiv.append(topicImage);
            $("#gif").append(topicDiv);
        }

});
});


});