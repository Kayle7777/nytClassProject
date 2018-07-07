//NYT api key = 5fb1a34287ef406ba23992f37d8f0f60
let url = "https://api.nytimes.com/svc/search/v2/articlesearch.json";
function clearSearch() {
  url = "https://api.nytimes.com/svc/search/v2/articlesearch.json";
  url += '?' + $.param({
    'api-key': "5fb1a34287ef406ba23992f37d8f0f60",
    'hl': "true"
  });
}
function checkInputs() {
  if ($("#searchInput").val() != "") {
    url += `&q=${$("#searchInput").val().trim()}`
  } else {
    url += `&q=Jonathan%20Coulton`
  }
  if ($("#startDate").val() != "") {
    url += `&begin_date=${$("#startDate").val().trim()}`
  }
  if ($("#endDate").val() != "") {
    url += `&end_date=${$("#endDate").val().trim()}`
  }
}

$("#searchButton").on("click", () => {
  $("#newsDiv").empty();
  clearSearch();
  checkInputs();
  console.log(url);
  $.ajax({
    url: url,
    method: 'GET',
  }).done(
  function(ajaxresponse) {
    console.log(ajaxresponse);
     ajaxresponse.response.docs.map((object, index) => {
       let div = $("<div class='row'>");
       let button = $("<button>");
       let anchor = $("<a>");
       button.attr("class", "col-md-12 button button-light");
       anchor.attr("href", object.web_url);
       anchor.attr("target", "_blank");
       button.text(JSON.stringify(object.headline.main));
       anchor.append(button);
       div.append(anchor);
       $("#newsDiv").append(div)
     })

  }).fail(
    function(err) {
      throw err;
    }
  )
})
