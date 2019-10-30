$(document).ready(function() {  
//jquery init 

// variables
    // City
var clickedCities = [];
var increments = [];
var stationIncrements = [];
var cities = [
    { label: '',
    stationNumber: 0, 
    backgroundColor: [
        'rgba(255, 255, 255, 0.2)'
    ],
    borderColor: [
        'rgba(255, 255, 255, 1)'
    ],
    }]

// functions





    // Ajax call 

function showData(station, cityName, increment) {
    $.ajax({
        url: "https://api.meteostat.net/v1/history/monthly?station=" + station + "&start=2016-01&end=2016-12&key=ELTLnGss",
        method: "GET"
    })
        .then(function(response) {
        var temps = [];
        var julyTemp = response.data[6].temperature_mean;
        var july2020 = (Math.floor((julyTemp * 1.8) + 32) + increment * 4);
        console.log(july2020);
        temps.push(july2020);
        var july2030 = (Math.floor((julyTemp * 1.8) + 32) + increment * 14);
        temps.push(july2030);
        var july2040 = (Math.floor((julyTemp * 1.8) + 32) + increment * 24);
        temps.push(july2040);
        var july2050 = (Math.floor((julyTemp * 1.8) + 32) + increment * 34);
        temps.push(july2050);
        var july2060 = (Math.floor((julyTemp * 1.8) + 32) + increment * 44);
        temps.push(july2060);
        var july2070 = (Math.floor((julyTemp * 1.8) + 32) + increment * 54);
        temps.push(july2070);
        var tempCity = 
            {
            label: cityName,
            data: temps, 
            chartNumber: station, 
            backgroundColor: [
                'rgba(' + (Math.random() * 300).toString() + ',' + + (Math.random() * 300).toString() + ',' + (Math.random() * 300).toString() + ', 0.2)'
            ],
            borderColor: [
                'rgba(21, 152, 243, 1)'
            ],
            borderWidth: 1
        }

        cities.push(tempCity);

        });
};



    // Dropdown function 
        // Match city selected to array of 10 major cities 
        // Ajax call for stations 
        // Fill div with 5 stations from that city
            
    // Click station function 
        // Major variable to pass into Ajax call - station number 
        // Ajax 
            // Formula for temperature of middle of summer from object for that city 
            // Replace div with table of temperature projections by year that city 
            // Replace div with graph of temperature projections for that city 

    function chartOne(cityData) {
    $('.js-chart').html('<canvas id="myChart" width="10rem" height="10rem"></canvas>');
    var ctx = document.getElementById('myChart');
    var myChart = new Chart(ctx, {
        type: 'line',
        data: {
            labels: ['2020', '2030', '2040', '2050', '2060', '2070'],
            datasets: cityData
        },
        options: {
            scales: {
                yAxes: [{
                    ticks: {
                        beginAtZero: true
                    }
                }]
            },
            animation: {
                duration: 0
            },
            hover: {
                animationDuration: 0
            },
            responsiveAnimationDuration: 0
        }
        //
        
    });
    myChart.update()
}

function showChart(i) {
if (i === 0) {
    clickedCities.push(cities[i]);
    chartOne(clickedCities);
}
else {
    var index = cities.findIndex(function(city) {
        return city.chartNumber === i;
       })
    //if (clickedCities.indexOf(cities[i]) < 0) {
        clickedCities.push(cities[index]);
        chartOne(clickedCities);
    //}
}
}



function init() {
    function calcIncrement(stations) {
        var stations = [{station: 72530, city: 'Chicago'}, {station: 70273, city: 'Ancorage'}, {station: 91182, city: 'Honolulu'}, {station: 72295, city: 'Los Angeles'}, {station: 72202, city: 'Miami'}, {station: 72278, city: 'Phoenix'}, {station: 72408, city: 'Philadelphia'}, { station: 72405, city: 'Washington, D.C.'}];
        for (j = 0; j < stations.length; j++) {
            $.ajax({
                url: `https://api.meteostat.net/v1/history/monthly?station=${stations[j].station}&start=2009-01&end=2012-12&key=ELTLnGss`,
                method: "GET",
                custom: j, 
            })
            .then(function(response) {
                console.log(this.custom);
                //console.log(response);
                var yearTempMean09 = 0;
                var yearTempMean10 = 0;
                var yearTempMean11 = 0;
                var yearTempMean12 = 0;
                for (i = 0; i < response.data.length; i++) {
                    if (i < 12) {
                        var monthTempMean = response.data[i].temperature_mean;
                        yearTempMean09 = (yearTempMean09 + monthTempMean);
                    };
                    if (i > 11 && i < 24) {
                        var monthTempMean = response.data[i].temperature_mean;
                        yearTempMean10 = (yearTempMean10 + monthTempMean);
                    };
                    if (i > 23 && i < 36) {
                        var monthTempMean = response.data[i].temperature_mean;
                        yearTempMean11 = (yearTempMean11 + monthTempMean);
                    };
                    if (i > 35) {
                        var monthTempMean = response.data[i].temperature_mean;
                        yearTempMean12 = (yearTempMean12 + monthTempMean);
                    };
                }
                var avg09 = (yearTempMean09 / 12);
                var avg10 = (yearTempMean10 / 12);
                var avg11 = (yearTempMean11 / 12);
                var avg12 = (yearTempMean12 / 12);
                var increment1 = (avg10 - avg09)
                var increment2 = (avg11 - avg10)
                var increment3 = (avg12 - avg11)
                var incrementTotal = ((increment1 + increment2 + increment3) / 3)
                var stationObject = {};
                stationObject.station = stations[this.custom].station;
                stationObject.city = stations[this.custom].city;
                stationObject.incrementTotal = incrementTotal;
                stationIncrements.push(stationObject);
                //increments.push(incrementTotal);
                console.log(stationObject);
                // example: .2
                if (stationIncrements.length === 8 ) {
                    
                    for (i = 0; i < stationIncrements.length; i++) {
                        showData(stationIncrements[i].station, stationIncrements[i].city, stationIncrements[i].incrementTotal);
                        //console.log(increments[i]);
                        //console.log(cityName[i]);
                    }
                    showChart(0);
                    /*$('.js-chart').empty();*/
                    clickedCities = [];
                    //console.log(clickedCities);
                }
                
            });
            
        }};
    
    calcIncrement();

    /*for (i = 0; i < increments.length; i++) {
    console.log(increments[i]);
    }*/
   
}


    // Clear graph function 

// events

    // Submit dropdown 
        // Dropdown function 
    
$('.js-submit').on('click', function() {
    var chartNumber = $(this).data('station');
    //console.log(chartNumber);
    showChart(chartNumber);
    //console.log(cities);
    

})

    // Click station
        // Click station function 

    // Clear graph 
$('.js-clear').on('click', function() {
    clickedCities = [];
    showChart(0);
    clickedCities = [];
})
// init 
init();
//console.log(cities);
    // Sample city (Chicago)

});