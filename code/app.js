$(document).ready(function() {  
//jquery init 

// variables
    // City

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

    // Clear graph function 

// events

    // Submit dropdown 
        // Dropdown function 

    // Click station
        // Click station function 

    // Clear graph 

// init 

    // Sample city (Chicago)

    var ctx = document.getElementById('myChart');
    var myChart = new Chart(ctx, {
        type: 'line',
        data: {
            labels: ['2020', '2030', '2040', '2050', '2060', '2070'],
            datasets: [{
                label: 'City #1',
                data: [30, 40, 50, 60, 70, 80, 90, 100, 110], 
                backgroundColor: [
                    'rgba(12, 99, 132, 0.2)'
                ],
                borderColor: [
                    'rgba(12, 99, 132, 1)'
                ],
                borderWidth: 1
            },
            {
                label: 'City #2',
                data: [110, 100, 90, 80, 70, 60, 50, 40, 30], 
                backgroundColor: [
                    'rgba(255, 99, 132, 0.2)'/*,
                    'rgba(54, 162, 235, 0.2)',
                    'rgba(255, 206, 86, 0.2)',
                    'rgba(75, 192, 192, 0.2)',
                    'rgba(153, 102, 255, 0.2)',
                    'rgba(255, 159, 64, 0.2)'*/
                ],
                borderColor: [
                    'rgba(255, 99, 132, 1)'/*,
                    'rgba(54, 162, 235, 1)',
                    'rgba(255, 206, 86, 1)',
                    'rgba(75, 192, 192, 1)',
                    'rgba(153, 102, 255, 1)',
                    'rgba(255, 159, 64, 1)'*/
                ],
                borderWidth: 1
            }]
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
});