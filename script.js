var input = document.getElementById("searchbar");
if (input) {
    input.addEventListener("keyup", function(event) {
        if (event.keyCode === 13) {
          event.preventDefault();
          document.getElementById("submit").click();
        }
      });
}

function search() {
    var query = document.getElementById("searchbar").value
    const search_url = "https://www.google.com/search?q=" + query
    if (query.length > 0) {
       window.location.href = search_url
    }
}