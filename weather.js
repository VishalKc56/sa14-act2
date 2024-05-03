document.getElementById('weatherForm').addEventListener('submit', function(event) {
    event.preventDefault();
    const city = document.getElementById('cityInput').value;
    
    fetch(`http://api.weatherapi.com/v1/forecast.json?key=8bcf720527614cce81953614242404&q=${city}&days=5`)
        .then(response => response.json())
        .then(data => {
            const weatherDisplay = `
                <p>Current Time: ${new Date().toLocaleTimeString()}</p>
                <p>Current Temperature: ${data.current.temp_c} °C</p>
                <p>Weather Condition: <img src="${data.current.condition.icon}" alt="Weather Icon"></p>
                <p>Humidity: ${data.current.humidity}%</p>
                <p>Forecast:</p>
                <ul>
                    ${data.forecast.forecastday.map(day => `
                        <li>${day.date}: ${day.day.avgtemp_c} °C, ${day.day.condition.text}</li>
                    `).join('')}
                </ul>
            `;
            document.getElementById('weatherResult').innerHTML = weatherDisplay;
        })
        .catch(error => alert('Failed to fetch data: ' + error));
});
