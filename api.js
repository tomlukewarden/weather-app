const api_key = "6e2dced305956e592a7222c3c987e4dc";
const api_url = "https://api.openweathermap.org/data/2.5/weather";
const weatherImages = {
  'clear': 'clear.png',
  'few clouds': 'few-clouds.png',
  'scattered clouds': 'scattered-clouds.png',
  'broken clouds': 'broken-clouds.png',
  'overcast clouds': 'overcast-clouds.png',
  'shower rain': 'shower-rain.png',
  'rain': 'rain.png',
  'thunderstorm': 'thunderstorm.png',
  'snow': 'snow.png',
  'mist': 'mist.png',
};

const getWeatherData = (city, country) => {
  const url = `${api_url}?q=${city},${country}&appid=${api_key}&units=metric`;
  return fetch(url);
};

document.addEventListener("DOMContentLoaded", () => {
  const cityInput = document.getElementById("city");
  const countryInput = document.getElementById("country");
  const form = document.getElementById("weather-form");

  form.addEventListener("submit", (e) => {
    e.preventDefault();
    const city = cityInput.value;
    const country = countryInput.value;

    getWeatherData(city, country)
      .then((response) => {
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        return response.json();
      })
      .then((data) => {
        console.log(data);

        const weatherContainer = document.getElementById("weather-info");
        
        weatherContainer.innerHTML = `
        <div class="card my-4 text-center shadow-sm">
        <div class="card-body">
        <h5 class="card-title mb-3">Weather in ${data.name}, ${data.sys.country}</h5>
    
        <!-- Weather Icon -->
        <div class="text-center">
        <img 
        src="assets/${weatherImages[data.weather[0].description]}" 
        alt="${data.weather[0].description}" 
        class="weather-icon mb-3" 
        width="100"
        height="100"
        />
        </div>

        <!-- Weather Info -->
        <h6 class="card-subtitle mb-2 text-muted">
        <strong>Temperature:</strong> ${data.main.temp}°C
        </h6>
        <p class="card-text">
        <strong>Weather:</strong> ${data.weather[0].description}
    </p>
    <p class="card-text">
      <strong>Wind Speed:</strong> ${data.wind.speed} m/s
    </p>
    <p class="card-text">
      <strong>Humidity:</strong> ${data.main.humidity}%
    </p>
  </div>
</div>

        `;
      })

      .catch((error) => {
        console.error("Error:", error);
        alert("Failed to fetch weather data. Please try again.");
      });
  });
});
