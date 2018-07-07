//NYT api key = 5fb1a34287ef406ba23992f37d8f0f60

let url = "https://api.nytimes.com/svc/search/v2/articlesearch.json";
url += '?' + $.param({
  'api-key': "5fb1a34287ef406ba23992f37d8f0f60",
  'hl': "true"
});

function checkInputs() {
  if ($("#searchInput").val() != "") {
    url += `&q=${$("#searchInput").val().trim()}`
  } else {
    url += `&q=Jonathan Coulton`
  }
  if ($("#startDate").val() != "") {
    url += `&begin_date=${$("#startDate").val().trim()}`
  }
  if ($("#endDate").val() != "") {
    url += `&end_date=${$("#endDate").val().trim()}`
  }
}

$("#searchButton").on("click", () => {
  checkInputs()
  console.log(url)
  $.ajax({
    url: url,
    method: 'GET',
  }).done(
  function(response) {
    console.log(response);
    // PUT ALL CODE TO PUT STUFF FROM THE RESPONSE ON THE PAGE HERE

  }).fail(
    function(err) {
      throw err;
    }
  )
})
