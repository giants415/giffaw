// var baseUrl = "http://api.giphy.com/v1/gifs/search"


$(document).on("ready", function(){
  $('#submit').on('click', function(event){
    event.preventDefault(); /// prevents page from reloading
    // console.log('atleast the button works');
    var value = $("#textbox").serialize();
    console.log(value);
    $.ajax({
        method: "GET",
        url: https:api.giphy.com/v1/gifs/search
        data: "json", ///$("#textbox").serialize(),
        success: onSuccess,
        error: onError,
    });
      function onSuccess(json) {
        $("div").append("<h1>"+json.title+"</h1>"); /// what does json do
        console.log(json.data[0]); //logs object[0]
        console.log(json.data[0].embed_url); //logs the embed_url from object[0]
        // ^^^^change search from embed url to ID
      }
    function onError(xhr, status, errorThrown) {
        alert("Sorry, there was a problem!");
        console.log("Error: " + errorThrown);
        console.log("Status: " + status);
        console.dir(xhr);
    }
    function urlCreator() {
      "http://api.giphy.com/v1/gifs/search" + value;
      return;
    }
  });
  /// append gifs to h1 or somewhere else on the page
});

/// use forEach to post the

// change search from embed url to ID
