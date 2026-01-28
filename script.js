const apiKey = "21bb1de29b849fffc3d8dc3c9e526fae";

function getWeather() {
    const city = document.getElementById("cityInput").value;
    const resultDiv = document.getElementById("weatherResult");
    const errorMsg = document.getElementById("errorMessage");

    // Clear old data
    resultDiv.innerHTML = "";
    errorMsg.textContent = "";

    if (city === "") {
        errorMsg.textContent = "Please enter a city name.";
        return;
    }

    // OpenWeatherMap API URL
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;

    // Fetch weather data
    fetch(url)
        .then(response => {
            if (!response.ok) {
                throw new Error("City not found");
            }
            return response.json();
        })
        .then(data => {
            // Display weather data
            resultDiv.innerHTML = `
                <h3>${data.name}</h3>
                <p>🌡 Temperature: ${data.main.temp} °C</p>
                <p>☁ Condition: ${data.weather[0].description}</p>
                <p>💧 Humidity: ${data.main.humidity}%</p>
            `;
        })
        .catch(error => {
            errorMsg.textContent = "Invalid city name. Please try again.";
        });
}
