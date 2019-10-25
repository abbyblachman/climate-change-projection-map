$(document).ready(function() {  
//jquery init 

// variables
    // City
var clickedCities = [];
var cities = [{
    label: 'City #1',
    data: [30, 40, 50, 60, 70, 80, 90, 100, 110], 
    backgroundColor: [
        'rgba(12, 99, 132, 0.2)'
    ],
    borderColor: [
        'rgba(12, 99, 132, 1)'
    ],
    borderWidth: 1
}, {
    label: 'City #2',
    data: [110, 100, 90, 80, 70, 60, 50, 40, 30], 
    backgroundColor: [
        'rgba(255, 99, 132, 0.2)'
    ],
    borderColor: [
        'rgba(255, 99, 132, 1)'
    ],
    borderWidth: 1
}]

// functions

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
            }
        }
        //
        
    });
}

function init() {
    $('.js-chart').empty();
    clickedCities = [];
}


    // Clear graph function 

// events

    // Submit dropdown 
        // Dropdown function 
$( ".target" ).change(function() {
    clickedCities.push(cities[1]);
    chartOne(clickedCities);
    });
    
$('.js-submit-one').change(function() {
    clickedCities.push(cities[0]);
    chartOne(clickedCities);
})

$('.js-submit-two').change(function() {
    clickedCities.push(cities[1]);
    console.log(clickedCities);
    chartOne(clickedCities);
})

    // Click station
        // Click station function 

    // Clear graph 
$('.js-clear').on('click', function() {
    init();
})
// init 
init();
    // Sample city (Chicago)

});