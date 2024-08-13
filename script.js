document.getElementById('weatherForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent the form from submitting the traditional way
    
    const location = document.getElementById('location').value;
    const weatherInfoDiv = document.getElementById('weatherInfo');
    weatherInfoDiv.innerHTML = "Fetching weather data..."; // Display a loading message

    fetch(`https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/${location}?key=KGK3U8EUGUP5LXBAT2NRZJ5LB`, { mode: 'cors' })
        .then(function(response) {
            return response.json();
        })
        .then(function(data) {
            const fahrenheitTemp = data.currentConditions.temp;
            const celsiusTemp = ((fahrenheitTemp - 32) * 5) / 9;
            weatherInfoDiv.innerHTML = `
                <h2>Weather in ${location}</h2>
                <p>Current temperature: ${celsiusTemp.toFixed(2)}°C</p>
                <p>Conditions: ${data.currentConditions.conditions}</p>
            `;
        })
        .catch(function(error) {
            weatherInfoDiv.innerHTML = `<p>Error fetching the weather data. Please try again.</p>`;
            console.error('Error fetching the weather data:', error);
        });
});
