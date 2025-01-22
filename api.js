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
  <div class="card my-4 shadow-sm rounded-3 border-0">
    <div class="card-body text-center">
      
      <!-- Weather Header -->
      <h5 class="card-title mb-3 text-uppercase fw-bold">${data.name}, ${data.sys.country}</h5>
      
      <!-- Weather Icon -->
      <div class="mb-3">
        <img 
          src="assets/${weatherImages[data.weather[0].description] || 'default.png'}" 
          alt="${data.weather[0].description}" 
          class="weather-icon mb-3"
          width="150" 
          height="150"
        />
      </div>
      
      <!-- Weather Info -->
      <h2 class="display-4 mb-2">${data.main.temp}°C</h2>
      <h5 class="mb-3 text-muted">${data.weather[0].description}</h5>
      
      <!-- Extra Weather Details -->
      <div class="row text-start">
        <div class="col-6">
          <p class="card-text mb-1"><strong>Wind:</strong> ${data.wind.speed} m/s</p>
          <p class="card-text mb-1"><strong>Humidity:</strong> ${data.main.humidity}%</p>
        </div>
        <div class="col-6">
          <p class="card-text mb-1"><strong>Pressure:</strong> ${data.main.pressure} hPa</p>
          <p class="card-text mb-1"><strong>Cloudiness:</strong> ${data.clouds.all}%</p>
        </div>
      </div>
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
