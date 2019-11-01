$(document).ready(function() {
  // change search-button, search-value
  $("#search-button").on("click", function() {
    $('#forecast').empty();
    var searchValue = $("#search-value").val();
    // clear input box
    $("#search-value").val("");
    getForecast(searchValue);
  });
  function getForecast(searchValue) {
    $.ajax({
      type: "GET",
      url:
        "http://api.openweathermap.org/data/2.5/forecast?q=" +
        searchValue +
        "&appid=7ba67ac190f85fdba2e2dc6b9d32e93c&units=imperial",
      dataType: "json",
      success: function(data) {
        console.log(data);
        // overwrite any existing content with title and empty row
        // loop over all forecasts (by 3-hour increments)
        for (var i = 0; i < data.list.length; i++) {
          // only look at forecasts around 3:00pm
          if (data.list[i].dt_txt.indexOf("15:00:00") !== -1) {
            // create html elements for a bootstrap card
            var col = $("<div>").addClass("forecast");
            var title = $("<div>")
              .addClass("forecast-header")
              .html(
                '<div class="day">' +
                  new Date(data.list[i].dt_txt).toLocaleDateString() +
                  "</div>"
              );
            var content = $("<div>").addClass("forecast-content");
            var img = $("<img>")
              .attr(
                "src",
                "http://openweathermap.org/img/w/" +
                  data.list[i].weather[0].icon +
                  ".png"
              )
              .addClass("forecast-icon");
            var p1 = $("<div>")
              .addClass("degree")
              .text(data.list[i].main.temp_max + " °F");
            var p2 = $("<div>").text(data.list[i].main.humidity + "%");
            // merge together and put on page
            content.append(img, p1, p2);
            col.append(title, content);
            $("#forecast").append(col);
          }
        }
      }
    });
  }
});