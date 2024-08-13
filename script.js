// Giphy API key : kuWVJypKKh14TSGyiUpCfnjhUldNPZDN

document.getElementById('weatherForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent the form from submitting the traditional way
    
    const location = document.getElementById('location').value;

    fetch(`https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/${location}?key=KGK3U8EUGUP5LXBAT2NRZJ5LB`, { mode: 'cors' })
        .then(function(response) {
            return response.json();
        })
        .then(function(data) {
            console.log(`Current temperature in ${location}: ${data.currentConditions.temp}°C`);
        })
        .catch(function(error) {
            console.error('Error fetching the weather data:', error);
        });
});
