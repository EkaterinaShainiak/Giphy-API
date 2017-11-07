var topics = ["madonna", "music", "cat"];
console.log(topics);


for (i = 0; i < topics.length; i++) {
    console.log("test")
    var queryURL = "https://api.giphy.com/v1/gifs/search?q=" + topics[i] + "&api_key=dc6zaTOxFJmzC&limit=10";

    $.ajax({
        url: queryURL,
        method : "GET",
    }).
    done(function(response){
        for (j = 0; j < response.data.length; j++) {
        var topicDiv = $("div");
        var p = $('<p>').text("Rating: " + response.data[j].rating );
        var topicImage = $("<img>");
        topicImage.attr("src", response.data[j].images.fixed_height_still.url);
        topicDiv.append(p);
        topicDiv.append(topicImage);
    }

});
}
