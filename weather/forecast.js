$(document).ready(function() {
    // change search-button, search-value 
    $("#search-button").on("click", function() {
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
          $("#forecast")
            .html('<h4 class="mt-3">5-Day Forecast:</h4>')
            .append('<div class="row">');
          // loop over all forecasts (by 3-hour increments)
          for (var i = 0; i < data.list.length; i++) {
            // only look at forecasts around 3:00pm
            if (data.list[i].dt_txt.indexOf("15:00:00") !== -1) {
              // create html elements for a bootstrap card
              var col = $("<div>").addClass("col-md-2");
              var card = $("<div>").addClass("card bg-primary text-white");
              var body = $("<div>").addClass("card-body p-2");
              var title = $("<h5>")
                .addClass("card-title")
                .text(new Date(data.list[i].dt_txt).toLocaleDateString());
              var img = $("<img>").attr(
                "src",
                "http://openweathermap.org/img/w/" +
                  data.list[i].weather[0].icon +
                  ".png"
              );
              var p1 = $("<p>")
                .addClass("card-text")
                .text("Temp: " + data.list[i].main.temp_max + " °F");
              var p2 = $("<p>")
                .addClass("card-text")
                .text("Humidity: " + data.list[i].main.humidity + "%");
              // merge together and put on page
              col.append(card.append(body.append(title, img, p1, p2)));
              $("#forecast .row").append(col);
            }
          }
        }
      });
    }
   });