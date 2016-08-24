



$(document).on("ready", function(){
  $('#submit').on('click', function(event){
    event.preventDefault(); /// prevents page from reloading
    console.log('atleast the button works');
    $.ajax({
        method: "GET",
        url: "http://api.giphy.com/v1/gifs/trending?api_key=dc6zaTOxFJmzC", /// http://api.giphy.com/v1/gifs/search ///
        data: "json", ///$("form").serialize(),
        success: onSuccess,
        error: onError,
    });
      function onSuccess(json) {
        $("div").append("<h1>"+json.title+"</h1>"); /// what does json do
        console.log(json.data[0].embed_url);
      }
    function onError(xhr, status, errorThrown) {
        alert("Sorry, there was a problem!");
        console.log("Error: " + errorThrown);
        console.log("Status: " + status);
        console.dir(xhr);
    }
  });
  /// append gifs to h1 or somewhere else on the page
});
