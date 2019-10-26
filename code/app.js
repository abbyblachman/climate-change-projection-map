$(document).ready(function() {  
//jquery init 

// variables
    // City
var clickedCities = [];
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

var increment = 0.4;

function weatherCalc(a, b) {
    return (Math.floor(((a * 1.8) + 32)) + (increment * b));
};


    // Ajax call 
function showData(station, cityName) {
    $.ajax({
        url: "https://api.meteostat.net/v1/history/monthly?station=" + station + "&start=2016-01&end=2016-12&key=ELTLnGss",
        method: "GET"
    })
        .then(function(response) {
        var temps = [];
        var julyTemp = response.data[6].temperature_mean;
        var july2020 = weatherCalc(julyTemp, 4);
        temps.push(july2020);
        var july2030 = weatherCalc(julyTemp, 14);
        temps.push(july2030);
        var july2040 = weatherCalc(julyTemp, 24);
        temps.push(july2040);
        var july2050 = weatherCalc(julyTemp, 34);
        temps.push(july2050);
        var july2060 = weatherCalc(julyTemp, 44);
        temps.push(july2060);
        var july2070 = weatherCalc(julyTemp, 54);
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
    stations = [72530, 70273, 91182, 72244, 72295, 74486, 72202, 72278, 72408, 72405];
    cityName = ['Chicago', 'Ancorage', 'Honolulu', 'Houston', 'Los Angeles', 'New York', 'Miami', 'Phoenix', 'Philadelphia', 'Washington, D.C.'];
    for (i = 0; i < stations.length; i++) {
        showData(stations[i], cityName[i]);
    }
    showChart(0);
    /*$('.js-chart').empty();*/
    clickedCities = [];
}


    // Clear graph function 

// events

    // Submit dropdown 
        // Dropdown function 
    
$('.js-submit').on('click', function() {
    var chartNumber = $(this).data('station');
    console.log(chartNumber);
    showChart(chartNumber);
    console.log(cities);
    

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
console.log(cities);
    // Sample city (Chicago)

});