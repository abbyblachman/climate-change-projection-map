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
        url: "https://api.meteostat.net/v1/history/monthly?station=" + station + "&start=2016-01&end=2016-12&key=lgCeHhGo",
        method: "GET"
    })
        .then(function(response) {
        var temps = [];
        var julyTemp = response.data[6].temperature_mean;
        var july2020 = (Math.floor((julyTemp * 1.8) + 32) + increment * 4);
        // console.log(july2020);
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
                url: `https://api.meteostat.net/v1/history/monthly?station=${stations[j].station}&start=1993-01&end=2012-12&key=lgCeHhGo`,
                method: "GET",
                custom: j, 
            })
            .then(function(response) {
                // console.log(this.custom);
                console.log(response);
                var yearTempMean01 = 0;
                var yearTempMean02 = 0;
                var yearTempMean03 = 0;
                var yearTempMean04 = 0;
                var yearTempMean05 = 0;
                var yearTempMean06 = 0;
                var yearTempMean07 = 0;
                var yearTempMean08 = 0;
                var yearTempMean09 = 0;
                var yearTempMean10 = 0;
                var yearTempMean11 = 0;
                var yearTempMean12 = 0;
                var yearTempMean13 = 0;
                var yearTempMean14 = 0;
                var yearTempMean15 = 0;
                var yearTempMean16 = 0;
                var yearTempMean17 = 0;
                var yearTempMean18 = 0;
                var yearTempMean19 = 0;
                var yearTempMean20 = 0;


                for (i = 0; i < response.data.length; i++) {
                    if (i === 6) {
                        yearTempMean01 = response.data[6].temperature_mean;
                    };
                    if (i === 18) {
                        yearTempMean02 = response.data[18].temperature_mean;
                    };
                    if (i === 30) {
                        yearTempMean03 = response.data[30].temperature_mean;
                    };
                    if (i === 42) {
                        yearTempMean04 = response.data[42].temperature_mean;
                    };
                    if (i === 54) {
                        yearTempMean05 = response.data[54].temperature_mean;
                    };
                    if (i === 66) {
                        yearTempMean06 = response.data[66].temperature_mean;
                    };
                    if (i === 78) {
                        yearTempMean07 = response.data[78].temperature_mean;
                    };
                    if (i === 90) {
                        yearTempMean08 = response.data[90].temperature_mean;
                    };
                    if (i === 102) {
                        yearTempMean09 = response.data[102].temperature_mean;
                    };
                    if (i === 114) {
                        yearTempMean10 = response.data[114].temperature_mean;
                    };
                    if (i === 126) {
                        yearTempMean11 = response.data[126].temperature_mean;
                    };
                    if (i === 138) {
                        yearTempMean12 = response.data[138].temperature_mean;
                    };
                    if (i === 150) {
                        yearTempMean13 = response.data[150].temperature_mean;
                    };
                    if (i === 162) {
                        yearTempMean14 = response.data[162].temperature_mean;
                    };
                    if (i === 174) {
                        yearTempMean15 = response.data[174].temperature_mean;
                    };
                    if (i === 186) {
                        yearTempMean16 = response.data[186].temperature_mean;
                    };
                    if (i === 198) {
                        yearTempMean17 = response.data[198].temperature_mean;
                    };
                    if (i === 210) {
                        yearTempMean18 = response.data[210].temperature_mean;
                    };
                    if (i === 222) {
                        yearTempMean19 = response.data[222].temperature_mean;
                    };
                    if (i === 234) {
                        yearTempMean20 = response.data[234].temperature_mean;
                    }};
                    
                // these variables check the difference between each year difference and output a number that represents the incremental change from one year to the next //
                var increment1 = (yearTempMean02 - yearTempMean01);
                var increment2 = (yearTempMean03 - yearTempMean02);
                var increment3 = (yearTempMean04 - yearTempMean03);
                var increment4 = (yearTempMean05 - yearTempMean04);
                var increment5 = (yearTempMean06 - yearTempMean05);
                var increment6 = (yearTempMean07 - yearTempMean06);
                var increment7 = (yearTempMean08 - yearTempMean07);
                var increment8 = (yearTempMean09 - yearTempMean08);
                var increment9 = (yearTempMean10 - yearTempMean09);
                var increment10 = (yearTempMean11 - yearTempMean10);
                var increment11 = (yearTempMean12 - yearTempMean11);
                var increment12 = (yearTempMean13 - yearTempMean12);
                var increment13 = (yearTempMean14 - yearTempMean13);
                var increment14 = (yearTempMean15 - yearTempMean14);
                var increment15 = (yearTempMean16 - yearTempMean15);
                var increment16 = (yearTempMean17 - yearTempMean16);
                var increment17 = (yearTempMean18 - yearTempMean17);
                var increment18 = (yearTempMean19 - yearTempMean18);
                var increment19 = (yearTempMean20 - yearTempMean19);

                // this last variable takes all the increments and finds an average to determine a small scale incremental increase or decrease in temperature based on a 10 year check //
                var incrementTotal = ((increment1 + increment2 + increment3 + increment4 + increment5 + increment6 + increment7 + increment8 + increment9 + increment10 + increment11 + increment12 + increment13 + increment14 + increment15 + increment16 + increment17 + increment18 + increment19) / 19)
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