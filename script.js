function init () {
    // alert("hello");
}

var queryURL = "https://api.meteostat.net/v1/history/monthly?station=71964&start=2009-01&end=2009-12&key=ELTLnGss";
// test data for calling 2017 Weather Summary for Frankfurt Airport


$.ajax({
    url: queryURL,
    method: "GET"
  })
    .then(function(response) {

        console.log(response);

        // In this example history is the package and monthly is the method. The parameters are station, start and end. 
        // Whenever you have to define a time range, start defines the start date and end defines the end date. 
        // Depending on the method you can provide dates in different formats:

    });




init();