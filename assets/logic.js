
$(document).ready(function () {
    var topics = ["madonna", "music", "cat"];
    console.log(topics);

    for (var i = 0; i < topics.length; i++) {
        createButton(topics[i])
    }

    function createButton(value) {
        var newButton = $("<button>");
        newButton.attr("class", "seach_buttons");
        newButton.attr("value", value);
        newButton.text(value);

        $("#buttons").prepend(newButton);
    }

    $(document).on("click", ".seach_buttons", function () {
        var topic = $(this).attr("value");
        displayImgs(topic);

    });

    function displayImgs(topic) {
        $("#gif").empty();
        var queryURL = "https://api.giphy.com/v1/gifs/search?q=" + topic + "&api_key=dc6zaTOxFJmzC&limit=10";

        $.ajax({
            url: queryURL,
            method: "GET",
        }).done(function (response) {
            for (var j = 0; j < response.data.length; j++) {
                var topicDiv = $("<div>");
                var p = $('<p>').text("Rating: " + response.data[j].rating);
                var topicImage = $("<img>");
                topicImage.attr("src", response.data[j].images.fixed_width_still.url);
                topicImage.attr("data-alt-src", response.data[j].images.fixed_width.url);
                topicImage.attr("class", "image");
                topicDiv.append(p);
                topicDiv.append(topicImage);
                $("#gif").append(topicDiv);
            }

        });
    };

    $("#newSearch").submit(function (event) {
        var newSearch = $("#newSearch input[type=text]").val();
        if (newSearch !== '') {
            $("#newSearch input[type=text]").val("");
            if (topics.indexOf(newSearch) === -1) {
                topics.push(newSearch);
                createButton(newSearch);
            }
            displayImgs(newSearch);
        };
        event.preventDefault();
    })

    $(document).on("click", ".image", function (event) {
        var oldSrc = $(this).attr("src");
        $(this).attr("src", $(this).attr("data-alt-src"));
        $(this).attr("data-alt-src", oldSrc);
        $(this).attr

    })

});